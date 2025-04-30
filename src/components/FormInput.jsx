import React from 'react'
import { motion } from 'framer-motion'

const FormInput = ({
  label,
  id,
  error,
  required,
  ...inputProps
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="text-error-500 ml-1">*</span>}
      </label>
      <input
        id={id}
        className={`form-input ${error ? 'border-error-500 focus:border-error-500 focus:ring-error-100' : ''}`}
        {...inputProps}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="form-error"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

export default FormInput