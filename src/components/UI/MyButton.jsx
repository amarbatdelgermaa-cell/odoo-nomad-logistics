const MyButton = ({ children, variant = 'primary', size = 'md', className = '', onClick, disabled = false, type = 'button' }) => {
  const variants = {
    primary: 'bg-primary hover:bg-amber-600 text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };
  const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-5 py-2.5', lg: 'px-6 py-3 text-lg' };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${variants[variant]} ${sizes[size]} rounded-lg font-medium transition-all duration-200 disabled:opacity-50 ${className}`}>
      {children}
    </button>
  );
};
export default MyButton;