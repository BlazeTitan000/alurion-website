import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Updated to accept an optional id prop
interface ValuesSectionProps {
  id?: string;
}
const ValueCard = ({
  title,
  description,
  className,
  style
}: {
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return <Card className={cn("bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]", className)} style={style}>
      <CardContent className="p-6 md:p-8">
        <h3 className="text-xl font-medium mb-4 text-alurion-secondary">{title}</h3>
        <p className="text-alurion-secondary/90 leading-relaxed">{description}</p>
      </CardContent>
    </Card>;
};
const ValuesSection = ({
  id
}: ValuesSectionProps) => {
  const values = [{
    title: "Excellence",
    description: "We hold ourselves to the highest standards, delivering exceptional results with precision and purpose. Our commitment to excellence ensures that every connection we make drives meaningful impact and long-term success."
  }, {
    title: "Integrity",
    description: "Trust is the foundation of everything we do. We act with transparency, honesty, and accountability, fostering relationships built on mutual respect and ethical decision-making."
  }, {
    title: "Grit",
    description: "Success requires resilience. We embrace challenges with determination and persistence, pushing beyond obstacles to achieve transformative outcomes for our clients and candidates."
  }, {
    title: "Now",
    description: "Momentum drives success. We act with urgency and precision, ensuring that businesses and talent connect at the right moment to seize opportunities and create lasting impact."
  }, {
    title: "Curiosity",
    description: "We thrive on discovery. By asking the right questions and challenging conventional thinking, we uncover new possibilities that drive growth, innovation, and strategic advantage."
  }, {
    title: "Adaptability",
    description: "We embrace change with agility, adjusting strategies to meet evolving business needs and market shifts. By staying ahead of trends, we ensure our solutions remain effective, timely and impactful."
  }];
  return <section id={id} className="section bg-alurion-primary py-24 px-4 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80)'
    }}></div>
      <div className="absolute inset-0 bg-alurion-primary/95"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-alurion-secondary mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => <ValueCard key={index} title={value.title} description={value.description} className={`animate-fade-in`} style={{
          animationDelay: `${index * 100}ms`
        }} />)}
        </div>
      </div>
    </section>;
};
export default ValuesSection;