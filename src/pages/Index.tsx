
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyAutomatedSecurity from '@/components/WhyAutomatedSecurity';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <WhyAutomatedSecurity />
    </div>
  );
};

export default Index;
