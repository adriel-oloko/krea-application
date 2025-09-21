"use client";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import { GenerateCards, ScrollBar } from "@/components/reUsable";
import { useThemeStore } from "@/store/store";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
    const [visible, setVisible] = useState<number | null>(null);
    //const [theme, setTheme] = useState<string>('dark');
    //const changeTheme = () => setTheme((prev) => (prev === 'light'? 'dark': 'light'))

    const scrollContainer = useRef<HTMLDivElement>(null)

    const theme = useThemeStore((state) => state.theme)
    //const container = document.querySelector('.snap-x-mandatory');

    const nextClick = () => {
        scrollContainer.current?.scrollBy({
            left: 100,//scrollContainer.current.scrollWidth,
            behavior: 'smooth',
        })
    }

    const prevClick = () => {
        scrollContainer.current?.scrollBy({
            left: -100,//scrollContainer.current.scrollWidth,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <Header  />
            <section className="px-6 w-full md:px-8 md:pt-36 rounded-2xl bg-white dark:bg-black">
                <div ref={scrollContainer} className="relative w-full flex gap-8 justify-start overflow-x-auto h-fit snap-x snap-mandatory rounded-2xl">
                    <HeroSection id={1} image={"/announce-wan-2-2-image.webp"} title="WAN 2.2 Image generation" text="Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures." height={1067} onVisible={ setVisible } />
                    <HeroSection id={2} image={"/OSSKreaFlux1_poster.webp"} title="FLUX.1 Krea" text="We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image." height={1440} onVisible={ setVisible } />
                    <HeroSection id={3} image={"/quick-action-hold-product.webp"} title="Realtime Video - Open Beta" text="Our ground-breaking Realtime Video is now accessible to all paid plans. Try it in the Realtime tool." height={1067}  onVisible={ setVisible } />

                    <HeroSection id={4} image={"/e06d7a87-e1de-4910-9083-7be5986b45f0_512.webp"} title="Seedream 4.0" text="Try the brand new and record-breaking image generation model Seedream 4.0 by ByteDance." height={1440}  onVisible={ setVisible } />
                    <HeroSection id={5} image={"/3c1008da-78a1-486e-8cb4-60484c37016a.webp"} title="Real-Time Video Generation" text="Announcing Realtime Video. Generate videos in real-time. Fully frame-consistent, controllable video clips." height={1067}  onVisible={ setVisible } />
                    <HeroSection id={6} image={"/quick-action-remove-text.webp"} title="Introducing Motion Transfer" text="Bring motion into your characters. Upload any image, record a video of yourself, and make your characters smile, talk, and dance. Powered by Runway Act 2." height={1440}  onVisible={ setVisible } />
                    <HeroSection id={7} image={"/seedream-4-announcement.webp"} title="WAN 2.2 Image generation" text="Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures." height={1067}  onVisible={ setVisible } />
                    <HeroSection id={8} image={"/astronautshirt.jpeg"} title="FLUX.1 Krea" text="We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image." height={1440}  onVisible={ setVisible } />
                </div>
            </section>

            <div className="relative mt-4">
                <ScrollBar curr={visible} />
                <div className="absolute right-12 -top-2 grid grid-cols-2 w-fit gap-2">
                    <button title="chevron left" onClick={ prevClick } type="button" className="w-fit p-0.5 rounded-full bg-primary-150 text-black"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000" className="translate-x-0.25"><path d="m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z"/></svg></button>
                    <button title="chevron rigt" onClick={ nextClick } type="button" className="w-fit p-0.5 rounded-full bg-primary-150 text-black"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000" className="translate-x-0.25"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg></button>
                </div>
            </div>

            <section className="pb-12 relative px-4 lg:px-8 mt-24">
                <h2 className="text-2xl text-black font-semibold dark:text-white mb-8">Generate</h2>

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-16">
                    <GenerateCards image={"image.svg"} title={"Image"} text={"Generate images with custom styles in flux and ideogram"} isNew={true} />
                    <GenerateCards image={"video.svg"} title={"Video"} text={"Generate images with custom styles in flux and ideogram"} isNew={false} />
                    <GenerateCards image={"realtime.svg"} title={"Realtime"} text={"Generate images with custom styles in flux and ideogram"} isNew={false} />
                    <GenerateCards image={"enhancer.svg"} title={"Enhancer"} text={"Generate images with custom styles in flux and ideogram"} isNew={true} />
                    <GenerateCards image={"edit.svg"} title={"Edit"} text={"Generate images with custom styles in flux and ideogram"} isNew={true} />
                    <GenerateCards image={"video-lipsync.svg"} title={"Video Lipsync"} text={"Generate images with custom styles in flux and ideogram"} isNew={true} />
                    <GenerateCards image={"motion-transfer.svg"} title={"Motion Transfer"} text={"Generate images with custom styles in flux and ideogram"} isNew={true} />
                </div>
            </section>
        </>
    );
}
