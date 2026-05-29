import React from 'react';
import styles from './Tab.module.css';

export interface TabItem {
  label: string;
  value: string;
  disabled?: boolean;
}

export type TabVariant = 'filled' | 'underline' | 'line';

export interface TabProps {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  variant?: TabVariant;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  (
    {
      tabs,
      value,
      defaultValue,
      variant = 'filled',
      fullWidth = false,
      onChange,
      className = '',
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      defaultValue ?? tabs[0]?.value ?? '',
    );

    const activeValue = value !== undefined ? value : internalValue;

    const handleClick = (tabValue: string) => {
      if (value === undefined) {
        setInternalValue(tabValue);
      }
      onChange?.(tabValue);
    };

    const rootClass = [
      styles.tabList,
      styles[variant],
      fullWidth ? styles.fullWidth : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} role="tablist" className={rootClass}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            type="button"
            aria-selected={activeValue === tab.value}
            disabled={tab.disabled}
            className={[
              styles.tab,
              activeValue === tab.value ? styles.active : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => !tab.disabled && handleClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  },
);

Tab.displayName = 'STab';
