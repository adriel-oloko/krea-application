import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type heroSectionProps = {
    id: number;
    image: string;
    height: number;
    title: string;
    text: string;
    onVisible: (id: number) => void
}



export default function HeroSection ({ id, image, title, text, height, onVisible }: heroSectionProps) {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) onVisible(id)
            },
            { threshold: 0.6 }
        )
        if (ref.current) observer.observe(ref.current)
            return () => observer.disconnect()
    }, [id, onVisible])

    return (
        <div ref={ref} className="relative aspect-[1920/1067] min-w-4/5 lg:min-w-3/5 md:max-w-3/5 snap-start h-fit lg:h-full">
            <Image src={image} className="lg:absolute object-cover object-center rounded-2xl m-0 aspect-[1920/1067]" width={1920} height={height} alt=""/>
            <div className="hidden lg:block absolute inset-0 bg-black/20 z-10 rounded-2xl"></div>

            <div className="lg:absolute bottom-0 py-4 lg:p-4 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-end z-20">
                <div className="text-black dark:text-white lg:text-white lg:w-1/2">
                    <p className="font-bold text-2xl inter">{ title }</p>
                    <p className="text-sm">{ text }</p>
                </div>
                <button className="px-4 py-2 rounded-full bg-blue-500 text-white lg:bg-white dark:bg-primary-850 lg:text-black dark:text-white min-w-fit">Try Wan 2.2</button>
            </div>
        </div>
    )
}