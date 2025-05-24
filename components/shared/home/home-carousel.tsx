"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCarousel = ({
  items,
}: {
  items: {
    image: string;
    url: string;
    title: string;
    buttonCaption: string;
  }[];
}) => {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true, // This helps with mouse interactions
    })
  );

  return (
    <div className="relative">
      <Carousel
        dir="ltr"
        className="w-full mx-auto"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true, // Enable infinite loop
        }}
      >
        <CarouselContent className="-ml-1">
          {items.map((item, index) => (
            <CarouselItem key={`${item.title}-${index}`} className="pl-1 basis-full">
              <Link href={item.url} className="block">
                <div className="relative aspect-[16/6] overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority={index === 0} // Only prioritize first image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full max-w-md ml-8 md:ml-16 lg:ml-32">
                      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                        {item.title}
                      </h2>
                      <Button 
                        className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="lg"
                      >
                        {item.buttonCaption}
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation arrows */}
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
        
        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
              onClick={() => {
                // You can implement scroll to specific slide here if needed
                // This would require accessing the carousel API
              }}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;