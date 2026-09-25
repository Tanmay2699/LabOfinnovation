import { useId } from 'react';
import { AlertCircle, ChevronDown } from 'lucide-react';

/**
 * Observatory select. The native control is kept — `color-scheme: dark` on
 * <html> makes the OS dropdown follow the theme, which a custom listbox
 * would have to reimplement (including keyboard and screen-reader support).
 */
const Select = ({
  label,
  options = [],
  error,
  hint,
  icon,
  className = '',
  required = false,
  id,
  ...props
}) => {
  const autoId = useId();
  const selectId = id || `select-${autoId}`;
  const describedBy = error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-[13px] leading-5 font-medium text-ink-secondary mb-1.5"
        >
          {label}
          {required && <span className="text-danger-text ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-tertiary pointer-events-none">
            {icon}
          </div>
        )}
        <select
          id={selectId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={`
            w-full min-h-[44px] ${icon ? 'pl-11 pr-10' : 'pl-3.5 pr-10'} py-3
            rounded-control border text-sm text-ink
            appearance-none cursor-pointer
            transition-[background-color,border-color] duration-160 ease-standard
            ${error
              ? 'border-danger-text bg-danger-bg'
              : 'border-line bg-surface-card hover:border-line-strong focus:bg-surface-field focus:border-indigo-500'}
            ${className}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-tertiary pointer-events-none"
          aria-hidden="true"
        />
      </div>
      {error && (
        <p
          id={`${selectId}-error`}
          className="mt-1.5 flex items-center gap-1.5 text-xs leading-[18px] text-danger-text"
        >
          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
      {!error && hint && (
        <p id={`${selectId}-hint`} className="mt-1.5 text-xs leading-[18px] text-ink-tertiary">
          {hint}
        </p>
      )}
    </div>
  );
};

export default Select;
