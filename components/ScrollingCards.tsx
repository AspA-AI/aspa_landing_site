'use client';

import { useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Zap, Shield, CheckCircle2 } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: <Zap className="h-12 w-12 text-[#D4AF37] mb-4 ml-2" />,
    title: "Human-Centered Augmentation",
    description: "AI executes repetitive, low-value tasks while humans retain strategic decision-making, creative problem-solving, and critical oversight.",
    features: [
      "Augmentation not replacement",
      "Higher adoption rates",
      "Ethical technology deployment"
    ]
  },
  {
    id: 2,
    icon: <Shield className="h-12 w-12 text-[#D4AF37] mb-4 ml-2" />,
    title: "Flexible Data Integration",
    description: "Agents consume structured data, unstructured text, IoT feeds, and real-time external data to continuously improve predictive performance.",
    features: [
      "Multi-source integration",
      "Real-time processing",
      "Continuous learning"
    ]
  },
  {
    id: 3,
    icon: <Zap className="h-12 w-12 text-[#D4AF37] mb-4 ml-2" />,
    title: "Seamless Automation",
    description: "Automate complex workflows with intelligent agents that learn and adapt to your business processes.",
    features: [
      "Workflow automation",
      "Process optimization",
      "Smart task delegation"
    ]
  }
];

export default function ScrollingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Clone the content to create seamless looping
    const clone = content.cloneNode(true);
    content.after(clone);

    let scrollPos = 0;
    let direction = 1; // 1 for right, -1 for left
    const speed = 60; // pixels per second
    let animationFrameId: number;
    let isPaused = false;

    const animate = () => {
      if (isPaused) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      scrollPos += (speed / 60) * direction; // 60fps
      
      // Change direction when reaching the end
      if (scrollPos >= content.scrollWidth) {
        direction = -1;
      } else if (scrollPos <= 0) {
        direction = 1;
      }
      
      container.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
      container.style.scrollBehavior = 'smooth';
    };
    
    const handleMouseLeave = () => {
      isPaused = false;
      container.style.scrollBehavior = 'auto';
      requestAnimationFrame(animate);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-x-hidden py-8 relative scrolling-cards-container"
    >
      <div 
        ref={contentRef}
        className="flex w-max space-x-6 px-4 scrolling-cards-track"
      >
        {cards.map((card) => (
          <Card 
            key={card.id} 
            className="w-80 flex-shrink-0 p-8 bg-white text-black border-gray-200 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden scrolling-card"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]" />
            {card.icon}
            <h3 className="text-xl font-bold mb-3 pl-2">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4 pl-2">
              {card.description}
            </p>
            <div className="space-y-2 pl-2">
              {card.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
