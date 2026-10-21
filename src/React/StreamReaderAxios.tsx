import {useEffect, useRef, useState} from 'react';
import axios from 'axios';

export function StreamReaderAxios() {
	const [text, setText] = useState('');
	const [isStreaming, setIsStreaming] = useState(false);
	const abortRef = useRef<AbortController | null>(null);

	const startStream = async () => {
		abortRef.current?.abort();
		const controller = new AbortController();
		abortRef.current = controller;

		setText('');
		setIsStreaming(true);

		try {
			const response = await axios.get('http://localhost:3001/stream', {
				responseType: 'stream', // 👈 важно
				adapter: 'fetch', // 👈 ключевой момент
				signal: controller.signal, // 👈 для отмены
				headers: {Accept: 'text/plain'},
			});

			// response.data — это ReadableStream<Uint8Array>
			const stream = response.data as ReadableStream<Uint8Array>;

			// Оборачиваем в TextDecoderStream, чтобы сразу получать строки
			// TextDecoderStream — это встроенный в браузер TransformStream, который берёт байты на входе и отдаёт строки на выходе.
			const reader = stream.pipeThrough(new TextDecoderStream()).getReader();

			while (true) {
				const {value, done} = await reader.read();
				if (done) break;

				// value — это строка (чанк текста)
				setText(prev => prev + value);
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

	useEffect(() => {
		return () => abortRef.current?.abort();
	}, []);

	return (
		<div style={{padding: 20, fontFamily: 'monospace'}}>
			<button onClick={startStream} disabled={isStreaming}>
				{isStreaming ? 'Идёт стриминг…' : 'Запустить стрим (axios)'}
			</button>
			<button onClick={stopStream} disabled={!isStreaming} style={{marginLeft: 8}}>
				Стоп
			</button>

			<pre style={{marginTop: 16, whiteSpace: 'pre-wrap'}}>
				{text}
				{isStreaming && <span>▌</span>}
			</pre>
		</div>
	);
}

// Теория:
// https://chat.deepseek.com/a/chat/s/f3a52825-c533-48a1-acb8-084d3fb2f814
