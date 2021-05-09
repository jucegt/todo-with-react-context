// Packages
import tw from 'tailwind-styled-components';

const ListWrapper = tw.div`
	max-w-screen-md
	mx-auto
	my-6
	bg-white
	rounded-lg
	shadow-2xl
`;

const ListHeader = tw.div`
	p-4
	font-black
	text-xl
	text-white
	bg-green-500
	rounded-t-lg
`;

const ListText = tw.p`
	text-center
	text-xl
	text-red-400
	font-black
	p-6
`;

export {
	ListWrapper,
	ListHeader,
	ListText
};