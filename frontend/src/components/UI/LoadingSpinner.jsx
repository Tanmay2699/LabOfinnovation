import { motion } from 'framer-motion';

/**
 * A light-theme spinner disappears on a dark ground. Track is a hairline,
 * the moving arc is indigo.
 */
const LoadingSpinner = ({ size = 'md', className = '', label = 'Loading' }) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-[3px]',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className={`flex items-center justify-center ${className}`} role="status">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        className={`${sizes[size] || sizes.md} border-line rounded-full border-t-indigo-400`}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
};

export default LoadingSpinner;
