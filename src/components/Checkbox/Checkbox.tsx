import React, { useEffect, useRef } from 'react';
import styles from './Checkbox.module.css';

export type CheckboxSize = 'small' | 'medium' | 'large';

/* ── Checkbox ── */
export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  size?: CheckboxSize;
  disabled?: boolean;
  indeterminate?: boolean;
  id?: string;
  name?: string;
  value?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked,
  onChange,
  label,
  size = 'medium',
  disabled = false,
  indeterminate = false,
  id,
  name,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const classes = [
    styles.checkbox,
    styles[size],
    checked || (indeterminate) ? (indeterminate ? styles.indeterminate : styles.checked) : '',
    disabled ? styles.disabled : '',
  ].filter(Boolean).join(' ');

  return (
    <label className={classes}>
      <input
        ref={inputRef}
        type="checkbox"
        className={styles.input}
        id={id}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={styles.box} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

Checkbox.displayName = 'SCheckbox';

/* ── CheckboxGroup ── */
export interface CheckboxOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  size?: CheckboxSize;
  direction?: 'vertical' | 'horizontal';
  disabled?: boolean;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  value = [],
  onChange,
  size = 'medium',
  direction = 'horizontal',
  disabled = false,
}) => {
  const toggle = (optValue: string, checked: boolean) => {
    const next = checked
      ? [...value, optValue]
      : value.filter((v) => v !== optValue);
    onChange?.(next);
  };

  return (
    <div
      className={[styles.group, direction === 'horizontal' ? styles.horizontal : ''].filter(Boolean).join(' ')}
      role="group"
    >
      {options.map((opt) => (
        <Checkbox
          key={opt.value}
          value={opt.value}
          label={opt.label}
          size={size}
          checked={value.includes(opt.value)}
          disabled={disabled || opt.disabled}
          onChange={(checked) => toggle(opt.value, checked)}
        />
      ))}
    </div>
  );
};

CheckboxGroup.displayName = 'SCheckboxGroup';
