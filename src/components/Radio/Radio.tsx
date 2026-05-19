import React, { createContext, useContext } from 'react';
import styles from './Radio.module.css';

export type RadioSize = 'small' | 'medium' | 'large';

/* ── Context ── */
interface RadioGroupContext {
  name: string;
  value?: string;
  size?: RadioSize;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Context = createContext<RadioGroupContext | null>(null);

/* ── RadioGroup ── */
export interface RadioOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  value?: string;
  options: RadioOption[];
  size?: RadioSize;
  direction?: 'vertical' | 'horizontal';
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  options,
  size = 'medium',
  direction = 'horizontal',
  disabled = false,
  onChange,
}) => (
  <Context.Provider value={{ name, value, size, disabled, onChange }}>
    <div
      className={[styles.group, direction === 'horizontal' ? styles.horizontal : ''].filter(Boolean).join(' ')}
      role="radiogroup"
    >
      {options.map((opt) => (
        <Radio key={opt.value} value={opt.value} label={opt.label} disabled={opt.disabled} />
      ))}
    </div>
  </Context.Provider>
);

RadioGroup.displayName = 'SRadioGroup';

/* ── Radio ── */
export interface RadioProps {
  value: string;
  label?: React.ReactNode;
  size?: RadioSize;
  disabled?: boolean;
}

export const Radio: React.FC<RadioProps> = ({ value, label, size: ownSize, disabled: ownDisabled }) => {
  const ctx = useContext(Context);
  const name = ctx?.name ?? '';
  const checked = ctx?.value === value;
  const disabled = ownDisabled ?? ctx?.disabled ?? false;
  const size = ownSize ?? ctx?.size ?? 'medium';

  const classes = [
    styles.radio,
    styles[size],
    checked ? styles.checked : '',
    disabled ? styles.disabled : '',
  ].filter(Boolean).join(' ');

  const handleChange = () => {
    if (!disabled) ctx?.onChange?.(value);
  };

  return (
    <label className={classes}>
      <input
        type="radio"
        className={styles.input}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={styles.circle} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

Radio.displayName = 'SRadio';
