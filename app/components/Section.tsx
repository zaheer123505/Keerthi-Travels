// app/components/Section.tsx
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  heading?: string;
  subHeading?: string;
}

export default function Section({ children, className = '', heading, subHeading }: SectionProps) {
  return (
    <section className={`py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {(heading || subHeading) && (
          <div className="text-center mb-12">
            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                {heading}
              </h2>
            )}
            {subHeading && (
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                {subHeading}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}