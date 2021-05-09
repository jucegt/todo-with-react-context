// Packages
import tw from 'tailwind-styled-components';

const TodoWrapper = tw.div`
	p-4
	border-b
	border-gray-200
	relative
`;

const TodoName = tw.p`
	font-sans
	text-lg
	font-bold
	text-gray-900
`;

const TodoDescription = tw.p`
	font-sans
	text-base
	text-gray-600
`;

const TodoDate = tw.p`
	font-sans
	text-sm
	text-gray-400
`;

const TodoDelete = tw.button`
	bg-red-500
	text-white
	absolute
	top-4
	right-4
	px-2
	py-1
	text-xs
	rounded
`;

export {
	TodoWrapper,
	TodoName,
	TodoDescription,
	TodoDate,
	TodoDelete
};