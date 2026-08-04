import {testResults} from '../utils';

/*
input:
`
id,firstName,lastName,quote
42e9f,Linus,Torvalds,Talk is cheap. Show me the code.
4f5e4,Joel,Spolsky,It's harder to read code than to write it.
`
expected output:
[
  {
    id: '42e9f',
    firstName: 'Linus',
    lastName: 'Torvalds',
    quote: 'Talk is cheap. Show me the code.'
  },
  {
    id: '4f5e4',
    firstName: 'Joel',
    lastName: 'Spolsky',
    quote: "It's harder to read code than to write it."
  }
]
*/

const parseCSV = csv => {
	const lines = csv.split('\n').filter(Boolean);
	const headers = lines[0].split(',');
	const rows = lines.slice(1).map(line => line.split(','));

	const createObject = (headers, row) => {
		return headers.reduce((map, header, index) => {
			return {...map, [header]: row[index]};
		}, {});
	};

	return rows.map(row => createObject(headers, row));
};

// *** Проверка ***********************************************

const csvFile = `
id,firstName,lastName,quote
42e9f,Linus,Torvalds,Talk is cheap. Show me the code.

4f5e4,Joel,Spolsky,It's harder to read code than to write it.
`;

const samples = [
	{
		test: [csvFile],
		expected: [
			{
				id: '42e9f',
				firstName: 'Linus',
				lastName: 'Torvalds',
				quote: 'Talk is cheap. Show me the code.',
			},
			{
				id: '4f5e4',
				firstName: 'Joel',
				lastName: 'Spolsky',
				quote: "It's harder to read code than to write it.",
			},
		],
	},
];

export function parseCSVTest() {
	testResults(parseCSV, samples);
}
