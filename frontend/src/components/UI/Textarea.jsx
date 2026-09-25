import { useId } from 'react';
import { AlertCircle } from 'lucide-react';

const Textarea = ({
  label,
  error,
  hint,
  className = '',
  required = false,
  rows = 4,
  id,
  ...props
}) => {
  const autoId = useId();
  const areaId = id || `textarea-${autoId}`;
  const describedBy = error ? `${areaId}-error` : hint ? `${areaId}-hint` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={areaId}
          className="block text-[13px] leading-5 font-medium text-ink-secondary mb-1.5"
        >
          {label}
          {required && <span className="text-danger-text ml-1">*</span>}
        </label>
      )}
      <textarea
        id={areaId}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`
          w-full px-3.5 py-3 rounded-control border text-sm leading-[23px] text-ink
          resize-y
          transition-[background-color,border-color] duration-160 ease-standard
          ${error
            ? 'border-danger-text bg-danger-bg'
            : 'border-line bg-surface-card hover:border-line-strong focus:bg-surface-field focus:border-indigo-500'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p
          id={`${areaId}-error`}
          className="mt-1.5 flex items-center gap-1.5 text-xs leading-[18px] text-danger-text"
        >
          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
      {!error && hint && (
        <p id={`${areaId}-hint`} className="mt-1.5 text-xs leading-[18px] text-ink-tertiary">
          {hint}
        </p>
      )}
    </div>
  );
};

export default Textarea;
