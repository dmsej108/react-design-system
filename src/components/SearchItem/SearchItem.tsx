import React from 'react';
import styles from './SearchItem.module.css';

export interface SearchItemProps {
  label?: string;
  type?: string;
  value?: string;
  selectData?: { value: string; label: string }[];
  changeValue?: (value: string) => void;
}

export const SearchItem = ({ label, type,selectData, value, changeValue }: SearchItemProps) => {
    const chagngeValueHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log('검색어 변경:', e.target.value);
        changeValue?.(e.target.value);
    };

    return (
        <div className={styles.item}>
            <label className={styles.label}>{label}</label>
            {type === 'input' && (
                <span className={styles.input}>
                    <input type="text" className={styles.formControl} onChange={chagngeValueHandler} value={value || ''} />
                </span>
            )}
            {type === 'select' && (
                <span className={styles.input}>
                    <select className={styles.select} onChange={chagngeValueHandler} value={value || ''}>
                        <option value="">선택하세요</option>
                        {selectData?.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </span>
            )}
            {type === 'radio' && (
                <span className={styles.input}>
                    { selectData?.map((option, index) => (
                        <span key={index} className={styles.radio}>
                            <input type="radio" id={`${label}-option${index}`} name={label} value={option.value} checked={value === option.value} onChange={chagngeValueHandler} />
                            <label htmlFor={`${label}-option${index}`}>{option.label} </label>
                        </span>
                    )) }
                </span>
            )}
            {type === 'checkbox' && (
                <span className={styles.input}>
                    { selectData?.map((option, index) => (
                        <span key={index} className={styles.checkbox}>
                            <input type="checkbox" id={`${label}-option${index}`} name={label} value={option.value} checked={value === option.value} onChange={chagngeValueHandler} />
                            <label htmlFor={`${label}-option${index}`}>{option.label}</label>
                        </span>
                    )) }
                </span>
            )}
        </div>
    );
};

SearchItem.displayName = 'SearchItem';
