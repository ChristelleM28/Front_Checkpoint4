import React from 'react'

function Input({
  labelClassName,
  label,
  type,
  required,
  name,
  className,
  value,
  onChange,
  disabled,
  placeholder,
}) {
  return (
    <label htmlFor={name} className={labelClassName}>
      {label}
      <input
        type={type}
        required={required}
        name={name}
        id={name}
        className={className}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input