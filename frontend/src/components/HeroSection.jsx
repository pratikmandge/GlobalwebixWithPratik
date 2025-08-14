import { ArrowRight, TrendingUp } from "lucide-react";
import backgroundImg from "../assets/backgroundImg.jpg"
import salesbanner from "../assets/salesbanner.png"
import brand1 from "../assets/brands/afterpay.svg"
import brand2 from "../assets/brands/basecam.svg"
import brand3 from "../assets/brands/maze.svg"

export default function HeroSection() {
    return (
        <section
            className="bg-cover bg-center text-white px-8 py-16"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-3 items-center pt-16">
                {/* Left Side */}
                <div className="w-full">
                    <h1 className=" font-medium text-[62px] leading-[110%] tracking-[-0.03em]" style={{ fontFamily: "Plus Jakarta Sans" }}>
                        Tourism Website Design That Increases Bookings and Boosts Sales
                    </h1>
                    <p className="mt-6 font-plusJakarta font-bold text-[16px] leading-[180%]">
                        We build SEO-optimized travel websites that boost bookings for tour
                        operators and travel agencies.
                    </p>

                    <button className="mt-8 flex items-center space-x-2 text-white px-6 py-3 rounded-full font-manrope font-bold"
                        style={{ backgroundColor: "#313439" }}>
                        <span>Schedule Call</span>
                        <ArrowRight size={20} />
                    </button>

                    <div className="flex flex-wrap items-center gap-4 mt-6">
                        <p className="text-sm font-medium whitespace-nowrap">
                            Trusted by the world's biggest brands
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <img src={brand1} alt="Brand1" className="h-6" />
                            <img src={brand2} alt="Brand2" className="h-6" />
                            <img src={brand3} alt="Brand3" className="h-6" />
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-6">

                    {/* Top: Pie + Stat box (same height) */}
                    <div className="flex justify-between gap-6">

                        {/* Pie Card */}

                        <div className="relative rounded-2xl flex items-end justify-center h-full min-h-[210px]">
                            {/* SVG Pie Slice */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 303 250"
                                fill="#6982FC"
                                style={{ height: "210px", width: "210px" }}
                            >
                                <path
                                    d="M0 269.608C0 120.708 120.708 0 269.608 0h27.451A5.94 5.94 0 0 1 303 5.941V235c0 18.856 0 28.284-5.858 34.142S281.856 275 263 275H5.392A5.39 5.39 0 0 1 0 269.608"
                                    fill="#6982FC"
                                />
                            </svg>

                            {/* Trending icon at top-right corner with a small offset */}
                            <div
                                className="absolute top-1 right-8 w-16 h-16 rounded-full flex items-center justify-center shadow-md z-10"
                                style={{ backgroundColor: "#05525B" }}
                            >
                                <TrendingUp size={28} style={{ color: "#A8D67B" }} />
                            </div>
                        </div>

                        {/* Stat Box — same height as Pie Card */}
                        <div className="rounded-2xl bg-white text-black p-6 flex flex-col justify-between h-full min-h-[210px]">
                            <div className="rounded-2xl bg-white text-black flex flex-col justify-start h-full">
                                <div className="text-[60px] leading-none font-extrabold tracking-[-0.02em]" style={{fontFamily: "Manrope"}}>230+</div>
                                <p className="mt-2 text-sm max-w-[211px] opacity-60">
                                    some big companies that we work with, and trust us very much.
                                </p>
                            </div>
                            <div className="flex w-full h-[6.65px] rounded overflow-hidden">
                                <div className="w-[70%] bg-[#E4FAFC]" />
                                <div className="w-[30%] bg-[#D9D9D9]" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Blue graph card with overlay text */}
                    <div className="relative rounded-2xl overflow-hidden min-h-[220px] flex items-end">
                        {/* Background image (blue + chart). Put your actual asset at /public/traffic-bg.jpg */}

                        <div className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${salesbanner})` }} />
                        {/* Blue tint to match PDF feel */}
                        {/* Text */}
                        <div className="relative z-10 p-6 text-white font-plusJakarta font-semibold text-lg">
                            Drive More Traffic and Sales
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
