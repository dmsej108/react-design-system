import React from 'react';
import '../../styles/legacy/index.css';

export interface BaseButtonProps {
    label?: string;
    type?: string;
    iconClass?: string;
    btnsize?: 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg';
    iconSize?: 'sg' | 'mg' | 'lg';
    offscreen?: boolean;
    changeValue?: (value: string) => void;
}

const btnSizeMap: Record<NonNullable<BaseButtonProps['btnsize']>, string> = {
    small: 'btn-sm',
    medium: 'btn-slm',
    large: 'btn-sl',
    sm: 'btn-sm',
    md: 'btn-slm',
    lg: 'btn-sl',
};

export const BaseButton = ({ label, btnsize = 'small', iconClass, type, iconSize, offscreen, changeValue }: BaseButtonProps) => {
    const changeValueHandler = () => {
        console.log('버튼 클릭:', label);
        changeValue?.(label || '');
    }

    const sizeClass = btnSizeMap[btnsize] ?? btnSizeMap.small;

    return (
        <button type="button" className={`btn ${sizeClass}`} onClick={changeValueHandler}>
            {type === 'icon' && (
                <span className={`${iconClass} ${iconSize ? `${iconSize}` : ''}`}></span>
            )}
            {offscreen && <span className="offscreen">{label}</span>}
            {!offscreen && label}
        </button>
    );
};

BaseButton.displayName = 'BaseButton';
