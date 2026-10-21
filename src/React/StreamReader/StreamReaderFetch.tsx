// src/StreamReader.tsx
import {useEffect, useRef, useState} from 'react';

export function StreamReaderFetch() {
	const [text, setText] = useState('');
	const [isStreaming, setIsStreaming] = useState(false);
	const abortRef = useRef<AbortController | null>(null);

	const startStream = async () => {
		// Сбрасываем предыдущий поток, если он ещё идёт
		abortRef.current?.abort();

		const controller = new AbortController();
		abortRef.current = controller;

		setText('');
		setIsStreaming(true);

		try {
			const response = await fetch('http://localhost:3001/stream', {
				signal: controller.signal,
			});

			if (!response.body) throw new Error('No body');

			const reader = response.body.getReader();
			const decoder = new TextDecoder('utf-8');

			while (true) {
				const {value, done} = await reader.read();
				if (done) break;

				const chunk = decoder.decode(value, {stream: true});
				// Дописываем пришедший кусок к состоянию
				setText(prev => prev + chunk);
			}
		} catch (err) {
			if ((err as Error).name !== 'AbortError') {
				console.error('Stream error:', err);
			}
		} finally {
			setIsStreaming(false);
		}
	};

	const stopStream = () => {
		abortRef.current?.abort();
		setIsStreaming(false);
	};

	// На размонтировании — прерываем поток
	useEffect(() => {
		return () => abortRef.current?.abort();
	}, []);

	return (
		<div style={{padding: 20, fontFamily: 'monospace'}}>
			<button onClick={startStream} disabled={isStreaming}>
				{isStreaming ? 'Идёт стриминг…' : 'Запустить стрим'}
			</button>
			<button onClick={stopStream} disabled={!isStreaming} style={{marginLeft: 8}}>
				Стоп
			</button>

			<pre style={{marginTop: 16, whiteSpace: 'pre-wrap'}}>
				{text}
				{isStreaming && <span className="cursor">▌</span>}
			</pre>
		</div>
	);
}
