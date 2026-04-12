"use client";

import { LeftPanel } from "./LeftPanel";
import { Navigation } from "./Navigation";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 lg:p-6 gap-4 lg:gap-6 relative">
      {/* Dynamic Luminous Gradient Background */}
      <div className="fixed inset-0 bg-background transition-colors duration-1000 -z-30 pointer-events-none" />
      <div className="fixed top-[-10%] left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-muted-foreground/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -z-20 opacity-40" />
      <div className="fixed bottom-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-muted-foreground/3 blur-[60px] md:blur-[100px] rounded-full pointer-events-none -z-20 opacity-20" />

      {/* Sticky Left Panel / Mobile Hero */}
      <div className="w-full lg:w-[45%] h-[45vh] lg:h-[calc(100vh-3rem)] lg:sticky top-6 flex-shrink-0 z-20">
        <LeftPanel />
      </div>

      {/* Scrolling Right Content */}
      <div className="w-full lg:w-[55%] flex flex-col min-h-screen">
        {/* Navigation - Always at the top of content section */}
        <div className="sticky top-0 z-40 lg:relative lg:bg-transparent lg:backdrop-blur-none mt-2 lg:mt-0">
          <Navigation />
        </div>
        
        {/* Page content */}
        <div className="flex-1 px-4 lg:px-12 pb-24 relative lg:mt-0">
          {children}
        </div>
      </div>
    </div>
  );
}
