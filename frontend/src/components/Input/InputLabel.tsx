interface InputLabelProps {
    htmlFor: string;
    children: React.ReactNode;
    required?: boolean;
}

export default function InputLabel({ htmlFor, children, required = false }: InputLabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={`block text-sm leading-6 font-medium text-gray-200 ${required ? 'after:ml-1 after:text-red-500 after:content-["*"]' : ''}`}
        >
            {children}
        </label>
    );
}
