import React, { useState } from 'react';
import { pricingPlans } from '../data/pricingData';
import { BillingCycle } from '../types';
import PricingToggle from './PricingToggle';
import PricingCard from './PricingCard';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const handleToggle = (cycle: BillingCycle) => {
    setBillingCycle(cycle);
  };

  const yearlySavingsPercent = 16.7; // Approximately 2 months free

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Choose the plan that's right for you and your business
        </p>
      </div>

      <div className="mt-12 sm:mt-16 flex flex-col items-center">
        <PricingToggle 
          billingCycle={billingCycle} 
          onToggle={handleToggle}
          savingsPercent={yearlySavingsPercent}
        />
        
        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-base text-gray-500">
            All plans come with a 14-day free trial. No credit card required.
            <br />
            Questions? <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;