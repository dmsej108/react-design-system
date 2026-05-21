import React, { useState } from 'react';
import styles from './Textarea.module.css';

export type TextareaSize = 'small' | 'medium' | 'large';
export type TextareaResize = 'none' | 'vertical' | 'both';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string;
  size?: TextareaSize;
  error?: boolean;
  helperText?: string;
  errorText?: string;
  required?: boolean;
  resize?: TextareaResize;
  showCount?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      size = 'medium',
      error = false,
      helperText,
      errorText,
      required,
      resize = 'vertical',
      showCount = false,
      id,
      className = '',
      onChange,
      value,
      defaultValue,
      maxLength,
      rows = 3,
      ...rest
    },
    ref,
  ) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    const [length, setLength] = useState(() => {
      if (typeof value === 'string') return value.length;
      if (typeof defaultValue === 'string') return defaultValue.length;
      return 0;
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setLength(e.target.value.length);
      onChange?.(e);
    };

    const wrapperClasses = [
      styles.textareaWrapper,
      styles[size],
      error ? styles.error : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div className={wrapperClasses}>
          <textarea
            ref={ref}
            id={inputId}
            className={styles.textarea}
            required={required}
            rows={rows}
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            style={{ resize }}
            {...rest}
          />
        </div>
        <div className={styles.footer}>
          <div>
            {error && errorText && <p className={styles.errorText}>{errorText}</p>}
            {!error && helperText && <p className={styles.helperText}>{helperText}</p>}
          </div>
          {showCount && (
            <span className={styles.count}>
              {length}
              {maxLength != null ? `/${maxLength}` : ''}
            </span>
          )}
        </div>
      </div>
    );
  },
);

Textarea.displayName = 'STextarea';
