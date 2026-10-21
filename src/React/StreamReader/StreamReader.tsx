import {StreamReaderAxios} from './StreamReaderAxios';
import {StreamReaderFetch} from './StreamReaderFetch';

export function StreamReader() {
	return (
		<div style={{display: 'flex', flexDirection: 'column', width: '400px'}}>
			<StreamReaderFetch />
			<StreamReaderAxios />
		</div>
	);
}
