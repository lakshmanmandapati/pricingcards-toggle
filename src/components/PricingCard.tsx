import React from 'react';
import { PricingPlan, BillingCycle } from '../types';
import { Check, X } from 'lucide-react';

interface PricingCardProps {
  plan: PricingPlan;
  billingCycle: BillingCycle;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, billingCycle }) => {
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  
  return (
    <div 
      className={`relative rounded-2xl shadow-xl overflow-hidden transition-all duration-200 transform hover:-translate-y-1 hover:shadow-2xl ${
        plan.isPopular ? 'border-2 border-indigo-500 scale-105 lg:scale-110 z-10' : 'border border-gray-200'
      }`}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-0 left-0 bg-indigo-500 text-white text-xs font-semibold text-center py-1 px-3">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6 sm:p-10">
        <div className="flex flex-col h-full">
          <div>
            <h3 className={`text-2xl font-bold ${plan.isPopular ? 'text-indigo-600' : 'text-gray-900'}`}>
              {plan.name}
            </h3>
            <p className="mt-2 text-gray-500">{plan.description}</p>
            
            <div className="mt-8">
              <div className="flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-gray-900">${price}</span>
                <span className="ml-1 text-xl font-medium text-gray-500">
                  /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">What's included</h4>
            <ul className="space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    {feature.included ? (
                      <Check size={20} className="text-green-500" />
                    ) : (
                      <X size={20} className="text-gray-300" />
                    )}
                  </div>
                  <p className={`ml-3 text-base ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                    {feature.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 pt-6 flex-grow flex items-end">
            <button
              type="button"
              className={`w-full px-4 py-3 rounded-lg text-base font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                plan.isPopular 
                  ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500' 
                  : 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-500'
              }`}
            >
              {plan.ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;