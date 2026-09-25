import { useId } from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * Observatory text input.
 *
 * The field surface sits at elev.1 and rises to elev.2 on focus, so the
 * control reads as recessed until you are in it. Errors are announced as
 * well as coloured: the message is linked with aria-describedby and the
 * input is marked aria-invalid.
 */
const Input = ({
  label,
  error,
  hint,
  icon,
  className = '',
  required = false,
  id,
  ...props
}) => {
  const autoId = useId();
  const inputId = id || `input-${autoId}`;
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
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
        <input
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={`
            w-full min-h-[44px] ${icon ? 'pl-11 pr-3.5' : 'px-3.5'} py-3
            rounded-control border text-sm text-ink
            transition-[background-color,border-color] duration-160 ease-standard
            ${error
              ? 'border-danger-text bg-danger-bg'
              : 'border-line bg-surface-card hover:border-line-strong focus:bg-surface-field focus:border-indigo-500'}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1.5 flex items-center gap-1.5 text-xs leading-[18px] text-danger-text"
        >
          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
      {!error && hint && (
        <p id={`${inputId}-hint`} className="mt-1.5 text-xs leading-[18px] text-ink-tertiary">
          {hint}
        </p>
      )}
    </div>
  );
};

export default Input;
