import React from 'react';
import { BillingCycle } from '../types';

interface PricingToggleProps {
  billingCycle: BillingCycle;
  onToggle: (cycle: BillingCycle) => void;
  savingsPercent: number;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ 
  billingCycle, 
  onToggle,
  savingsPercent
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-3 mt-4">
        <span 
          className={`text-sm font-medium ${
            billingCycle === 'monthly' 
              ? 'text-indigo-600' 
              : 'text-gray-500 cursor-pointer'
          }`}
          onClick={() => onToggle('monthly')}
        >
          Monthly
        </span>
        
        <button
          type="button"
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
            billingCycle === 'yearly' ? 'bg-indigo-600' : 'bg-gray-200'
          }`}
          onClick={() => onToggle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          aria-pressed={billingCycle === 'yearly'}
        >
          <span className="sr-only">
            {billingCycle === 'yearly' ? 'Switch to monthly billing' : 'Switch to yearly billing'}
          </span>
          <span
            aria-hidden="true"
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
        
        <span 
          className={`text-sm font-medium ${
            billingCycle === 'yearly' 
              ? 'text-indigo-600' 
              : 'text-gray-500 cursor-pointer'
          }`}
          onClick={() => onToggle('yearly')}
        >
          Yearly
        </span>
      </div>
      
      {billingCycle === 'yearly' && (
        <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
          Save {savingsPercent}%
        </span>
      )}
    </div>
  );
};

export default PricingToggle;