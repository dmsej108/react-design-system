import React from 'react';
import styles from './Chip.module.css';

export type ChipVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
export type ChipSize = 'small' | 'medium' | 'large';

export interface ChipProps {
  label: React.ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  disabled?: boolean;
  /** 클릭 가능한 칩 */
  onClick?: () => void;
  /** X 버튼 표시 및 닫기 핸들러 */
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const CLOSE_SIZES: Record<ChipSize, number> = {
  small: 10,
  medium: 12,
  large: 14,
};

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'neutral',
  size = 'medium',
  disabled = false,
  onClick,
  onClose,
  className = '',
  style,
}) => {
  const classes = [
    styles.chip,
    styles[variant],
    styles[size],
    onClick ? styles.clickable : '',
    disabled ? styles.disabled : '',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled) onClick?.();
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled) onClose?.();
  };

  const svgSize = CLOSE_SIZES[size];

  return (
    <span
      className={classes}
      style={style}
      onClick={onClick ? handleClick : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); } : undefined}
    >
      {label}
      {onClose && (
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClose}
          disabled={disabled}
          aria-label="삭제"
          tabIndex={disabled ? -1 : 0}
        >
          <svg width={svgSize} height={svgSize} viewBox="0 0 16 16" fill="none">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
};

Chip.displayName = 'SChip';
