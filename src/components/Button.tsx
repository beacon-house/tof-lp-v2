// Reusable button components following exact brand guidelines
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = 'h-12 px-8 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out'

  const variants = {
    primary: 'bg-gradient-to-r from-gold to-goldLight text-navy shadow-sm hover:shadow-glow hover:-translate-y-0.5',
    secondary: 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white'
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  )
}
