"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

const useCarouselData = () => {
  return [
    {
      index: 1,
      title: "Trophy 1",
      imageUrl: "/banner.jpg",
    },
    {
      index: 2,
      title: "Trophy 2",
      imageUrl: "/img.jpg",
    },
    {
      index: 3,
      title: "Trophy 3",
      imageUrl: "/img2.jpg",
    },
  ];
};

export default function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const carouselData = useCarouselData();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!carouselData) return null;

  return (
    <section className="text-slate-800 relative">
      <Carousel
        setApi={setApi}
        className="w-full" // h-[calc(100vh-6rem)]"
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="">
          {carouselData.map((item, index) => (
            <CarouselItem key={index}>
              <div
                className="w-full h-[calc(100vh)]"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "white",
                }}
              >
                {/* {item.image} */}
                {/* <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover"/> */}
                <div className="flex flex-col items-center text-center justify-center h-full z-10 w-full bg-black/50">
                  <h1 className="text-white text-5xl md:text-6xl font-bold leading-[1.5] p-4">
                    {/* India&apos;s */}
                    <br />
                    <span className="text-6xl md:text-8xl text-cyan-400">
                      Rentopia
                    </span>
                    <br />
                     A Rented Hub
                  </h1>

                  <button className="bg-cyan-400 hover:bg-cyan-500 font-bold text-slate-700 text-xl mt-12 p-4 px-8 rounded-full">
                    <Link href="/all-pg">Find PG/Flat</Link>
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
      </Carousel>

      {/* <h2 className="text-8xl text-cyan-400 font-bold absolute bottom-8 right-8">
        {current}
      </h2> */}
    </section>
  );
}
