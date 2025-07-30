import React, { forwardRef } from 'react';
import styles from '@/styles/Input.module.scss';

type InputProps = {
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ id, name, type = 'text', placeholder, error, ...props }, ref) => {
        return (
            <div className={styles.inputWrapper}>
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    ref={ref}
                    className={`${styles.input} ${error ? styles.error : ''}`}
                    {...props}
                />
                {error && <p className={styles.errorMessage}>{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input'; 
export default Input;