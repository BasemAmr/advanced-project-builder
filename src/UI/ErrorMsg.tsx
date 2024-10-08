import React from 'react';

interface ErrorMsgProps {
    message: string;
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ message }) => {
    return message ? (
        <span className="block text-red-500 text-sm">
            {message}
        </span>
    ) : null;
};

export default ErrorMsg;