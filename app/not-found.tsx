import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CategoryCards from '@/components/CategoryCards'
import CustomButton from '@/components/CustomButton'

export const metadata = {
    title: '404 - Frequency Not Found | Audiophile',
    description: 'The page or frequency you are looking for has been unplugged or does not exist.',
}

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            {/* 404 Dark Hero Section with Acoustic Theme */}
            <section
                id="not-found-hero"
                className="relative overflow-hidden bg-[#121212] pt-[8.5rem] pb-[5rem] md:pt-[11rem] md:pb-[7rem] lg:pt-[12rem] lg:pb-[8rem] px-[1.5rem] md:px-[2.5rem] lg:px-[10.31rem] text-center"
            >
                {/* Concentric Acoustic Rings Background */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
                >
                    <Image
                        src="/ring-lights.svg"
                        alt=""
                        width={795}
                        height={560}
                        className="scale-125 md:scale-150 animate-pulse"
                        style={{ animationDuration: '6s' }}
                    />
                </div>

                <div className="relative z-10 max-w-[42rem] mx-auto flex flex-col items-center">
                    {/* Badge */}
                    <p className="overline text-[var(--primary)] mb-[1rem] tracking-[0.63em] uppercase">
                        404 ERROR • DEAD AIR
                    </p>

                    {/* Stylized 404 with Audio Equalizer in the Center */}
                    <div className="flex items-center justify-center gap-3 md:gap-5 my-[1rem]">
                        <span className="text-[5rem] md:text-[8rem] lg:text-[9.5rem] font-extrabold leading-none tracking-tighter text-white select-none">
                            4
                        </span>

                        {/* Interactive / Animated Equalizer Bars */}
                        <div
                            aria-label="Audio waveform indicator"
                            className="flex items-end justify-center gap-[0.25rem] md:gap-[0.38rem] h-[3.8rem] md:h-[5.5rem] lg:h-[6.5rem] px-2 py-1 bg-black/40 rounded-lg border border-white/10"
                        >
                            <span className="w-[0.38rem] md:w-[0.55rem] bg-[var(--primary)] rounded-full animate-bounce [animation-delay:-0.3s] h-[40%]" />
                            <span className="w-[0.38rem] md:w-[0.55rem] bg-[var(--muted-primary)] rounded-full animate-bounce [animation-delay:-0.15s] h-[85%]" />
                            <span className="w-[0.38rem] md:w-[0.55rem] bg-[var(--primary)] rounded-full animate-bounce [animation-delay:-0.45s] h-[60%]" />
                            <span className="w-[0.38rem] md:w-[0.55rem] bg-white rounded-full animate-bounce [animation-delay:-0.2s] h-[100%]" />
                            <span className="w-[0.38rem] md:w-[0.55rem] bg-[var(--primary)] rounded-full animate-bounce [animation-delay:-0.35s] h-[50%]" />
                        </div>

                        <span className="text-[5rem] md:text-[8rem] lg:text-[9.5rem] font-extrabold leading-none tracking-tighter text-white select-none">
                            4
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-white text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold uppercase tracking-[var(--letter-spacing2)] leading-tight mt-[0.5rem] mb-[1.25rem]">
                        Lost in the Static?
                    </h1>

                    {/* Description */}
                    <p className="text-[var(--muted-low-white)] text-[0.94rem] md:text-[1rem] leading-[1.6] max-w-[32rem] mb-[2.5rem]">
                        The audio track, product page, or frequency you are tuned into does not exist or has been disconnected. Let&apos;s get you back to high-fidelity sound.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-[1rem] w-full sm:w-auto">
                        <CustomButton
                            text="Back to Home"
                            variant="primary-btn"
                            href="/"
                            className="w-full sm:w-auto min-w-[11rem]"
                        />
                        <Link
                            href="/category/headphones"
                            className="w-full sm:w-auto inline-block px-[1.91em] py-[0.94em] text-[0.81rem] uppercase font-bold text-white bg-transparent border-[0.13rem] border-white hover:bg-white hover:text-black transition-colors cursor-pointer text-center min-w-[11rem]"
                        >
                            Browse Headphones
                        </Link>
                    </div>
                </div>
            </section>

            {/* Category Quick Links Section */}
            <section
                id="not-found-categories"
                className="category-cards-wrapper pt-[4rem] md:pt-[5rem] pb-[2rem]"
            >
                <div className="text-center max-w-[30rem] mx-auto mb-[1rem]">
                    <p className="overline text-[var(--muted-low-white)] tracking-[0.63em] uppercase text-[0.81rem]">
                        Sound Stations
                    </p>
                    <h3 className="uppercase text-[1.5rem] md:text-[1.88rem] mt-[0.5rem]">
                        Explore Our Audio Gear
                    </h3>
                </div>

                <CategoryCards />
            </section>
        </div>
    )
}
