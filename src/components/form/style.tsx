// Packages
import tw from 'tailwind-styled-components';

const FormWrapper = tw.form`
	flex
	max-w-screen-md
	mx-auto
	my-6
	bg-white
	rounded-lg
	shadow-lg
	p-4
	pl-2
`;

const FormRow = tw.div`
	w-2/5
	px-2
`;

const FormInput = tw.input`
	border
	border-gray-400
	rounded
	w-full
	h-11
	px-4
`;

const FormButton = tw.button`
	bg-green-500
	rounded
	h-11
	text-white
	font-black
	w-1/5
`;

export {
	FormWrapper,
	FormRow,
	FormInput,
	FormButton
};