import React from 'react'
import { motion } from 'framer-motion'

const VisitorData = ({ visitor }) => {
  const formatDateTime = () => {
    const now = new Date()
    return now.toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    })
  }
  
  return (
    <motion.div 
      className="card bg-neutral-50 border border-primary-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-primary-100 p-2 rounded-full mt-1">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6 text-primary-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-neutral-800">
              Visit Registered Successfully
            </h3>
            <span className="text-sm text-neutral-500">{formatDateTime()}</span>
          </div>
          
          <div className="space-y-3 text-neutral-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-neutral-500 mb-1">Visitor Name</p>
                <p className="font-medium">{visitor.fullName}</p>
              </div>
              
              <div>
                <p className="text-sm text-neutral-500 mb-1">Mobile Number</p>
                <p className="font-medium">{visitor.mobileNumber}</p>
              </div>
              
              <div>
                <p className="text-sm text-neutral-500 mb-1">Flat Number</p>
                <p className="font-medium">{visitor.flatNumber}</p>
              </div>
              
              <div>
                <p className="text-sm text-neutral-500 mb-1">Purpose of Visit</p>
                <p className="font-medium">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                    visitor.purpose === 'Delivery' ? 'bg-blue-100 text-blue-800' :
                    visitor.purpose === 'Guest' ? 'bg-green-100 text-green-800' :
                    visitor.purpose === 'Maintenance' ? 'bg-orange-100 text-orange-800' :
                    'bg-neutral-100 text-neutral-800'
                  }`}>
                    {visitor.purpose}
                  </span>
                </p>
              </div>
            </div>
            
            <div className="pt-2 text-sm text-neutral-500 border-t border-neutral-200 mt-4">
              <p>This information has been saved to the visitor registry.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default VisitorData