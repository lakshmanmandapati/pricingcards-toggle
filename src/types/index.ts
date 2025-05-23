export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
}

export type BillingCycle = 'monthly' | 'yearly';