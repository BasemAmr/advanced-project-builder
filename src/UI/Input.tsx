import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const InputField: React.FC<InputFieldProps> = ({ ...rest }) => {
return (
    <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-blue-500"
        {...rest}
    />
);
};

export default InputField;