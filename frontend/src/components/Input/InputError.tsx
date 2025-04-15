interface InputErrorProps {
    message: string | null;
    className?: string;
}

export default function InputError({ message, className }: InputErrorProps) {
    if (message === null) {
        return null;
    }

    return (
        <p className={`mt-2 text-sm text-red-600 dark:text-red-500 ${className}`} role="alert">
            {message}
        </p>
    );
}
