import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FormInput from './FormInput'

const VisitorForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    flatNumber: '',
    purpose: '',
    mobileNumber: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const validateForm = () => {
    const newErrors = {}
    
    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    // Validate Flat Number
    if (!formData.flatNumber.trim()) {
      newErrors.flatNumber = 'Flat number is required'
    }
    
    // Validate Purpose
    if (!formData.purpose) {
      newErrors.purpose = 'Please select a purpose'
    }
    
    // Validate Mobile Number (10 digits)
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required'
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be exactly 10 digits'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    
    // For mobile number, only allow digits
    if (name === 'mobileNumber') {
      const digitsOnly = value.replace(/\D/g, '')
      setFormData(prev => ({ ...prev, [name]: digitsOnly }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulate backend processing delay
      await new Promise(resolve => setTimeout(resolve, 600))
      
      onSubmit(formData)
      
      // Reset form
      setFormData({
        fullName: '',
        flatNumber: '',
        purpose: '',
        mobileNumber: ''
      })
      
      setIsSubmitting(false)
    }
  }
  
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-neutral-800 mb-6">
        Register Your Visit
      </h2>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-5">
          <FormInput
            label="Full Name"
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />
          
          <FormInput
            label="Flat Number"
            id="flatNumber"
            name="flatNumber"
            type="text"
            placeholder="e.g. A-101"
            value={formData.flatNumber}
            onChange={handleChange}
            error={errors.flatNumber}
            required
          />
          
          <div className="form-group">
            <label htmlFor="purpose" className="form-label">
              Purpose of Visit
              <span className="text-error-500 ml-1">*</span>
            </label>
            <select
              id="purpose"
              name="purpose"
              className="form-select"
              value={formData.purpose}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select purpose</option>
              <option value="Delivery">Delivery</option>
              <option value="Guest">Guest</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Other">Other</option>
            </select>
            {errors.purpose && (
              <p className="form-error">{errors.purpose}</p>
            )}
          </div>
          
          <FormInput
            label="Mobile Number"
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            placeholder="10-digit mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={errors.mobileNumber}
            maxLength={10}
            required
          />
          
          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Register Visit'
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}

export default VisitorForm