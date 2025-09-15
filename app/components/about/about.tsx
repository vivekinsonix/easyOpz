// components/About.js
"use client";
import { FC } from "react";

/* === ICONS === */

// 1. Zero Training Required
const ZeroTrainingIcon: FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        stroke="url(#gradient)" // 👈 use gradient
        strokeWidth="2"
    >
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="10%" stopColor="#de1f26" />   {/* teal-500 */}
                <stop offset="100%" stopColor="#de1f26" /> {/* indigo-500 */}
            </linearGradient>
        </defs>

        <circle cx="32" cy="32" r="28" />
        <text
            x="32"
            y="38"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fontSize="20"
            fill="url(#gradient)" // 👈 also gradient text
        >
            0
        </text>
    </svg>
);

// 2. Collaboration
const CollaborationIcon: FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 64 64"
        className={className}
        stroke="url(#collabGradient)"  // 👈 use gradient here
        strokeWidth="2"
    >
        <defs>
            <linearGradient id="collabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="10%" stopColor="#de1f26" />   {/* teal-500 */}
                <stop offset="100%" stopColor="#de1f26" /> {/* indigo-500 */}
            </linearGradient>
        </defs>

        <circle cx="20" cy="24" r="8" />
        <circle cx="44" cy="24" r="8" />
        <path d="M12 48c0-8 8-12 16-12s16 4 16 12M36 36c8 0 16 4 16 12" />
    </svg>
);

// 3. Track Performance
const PerformanceIcon: FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 64 64"
        className={className}
        stroke="url(#perfGradient)"   // 👈 gradient stroke
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <defs>
            <linearGradient id="perfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="10%" stopColor="#de1f26" />   {/* sky-500 */}
                <stop offset="100%" stopColor="#de1f26" /> {/* indigo-500 */}
            </linearGradient>
        </defs>


        <rect x="6" y="6" width="52" height="52" rx="6" ry="6" />


        <polyline points="14,42 26,30 36,38 50,20" />


        <circle cx="26" cy="30" r="2" fill="url(#perfGradient)" />
        <circle cx="36" cy="38" r="2" fill="url(#perfGradient)" />
        <circle cx="50" cy="20" r="2" fill="url(#perfGradient)" />
    </svg>

);

// 4. Scalable, Secure & Affordable
const ScalableIcon: FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 64 64"
        className={className}
        stroke="url(#secureGradient)"
        strokeWidth="2"
    >
        <defs>
            <linearGradient id="secureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#de1f26" />   {/* cyan-500 */}
                <stop offset="100%" stopColor="#de1f26" /> {/* blue-500 */}
            </linearGradient>
        </defs>

        <path d="M24 48h24a12 12 0 0 0 0-24h-1a16 16 0 0 0-31-4 10 10 0 0 0 8 28z" />
        <rect x="26" y="34" width="12" height="10" rx="2" fill="url(#secureGradient)" />
        <path d="M32 34v-4a4 4 0 0 1 8 0v4" />
    </svg>

);

// 5. Next Level Satisfaction
const SatisfactionIcon: FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 64 64"
        className={className}
        stroke="url(#satisfactionGradient)"
        strokeWidth="2"
    >
        <defs>
            <linearGradient id="satisfactionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />   {/* amber-500 */}
                <stop offset="100%" stopColor="#ffbc0d" /> {/* red-500 */}
            </linearGradient>
        </defs>

        <circle cx="32" cy="32" r="28" />
        <path d="M22 26h2M40 26h2" />
        <path d="M24 40c4 4 12 4 16 0" />
        <path
            d="M32 12l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"
            fill="url(#satisfactionGradient)"
        />
    </svg>

);

// 6. Tailor made options
const TailorIcon: FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className={className}
        stroke="url(#customGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <defs>
            <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="10%" stopColor="#de1f26" /> {/* teal-ish */}
                <stop offset="100%" stopColor="#de1f26" /> {/* indigo */}
            </linearGradient>
        </defs>


        <g transform="translate(38,38) scale(0.9)">
            <circle cx="0" cy="0" r="8" />
            <path d="M10 0 L13 0 M-10 0 L-13 0 M0 10 L0 13 M0 -10 L0 -13 M7 7 L9.5 9.5 M-7 -7 L-9.5 -9.5 M7 -7 L9.5 -9.5 M-7 7 L-9.5 9.5" />
        </g>


        <path d="M16 44c0-8 4-14 12-18 8-4 14-2 18 2l-8 8c-4 4-10 6-22 8z" />
        <path d="M28 18c2 2 4 3 6 3" />

        <path d="M12 52c4 0 6-4 6-4s-2 2-6 2" fill="url(#customGradient)" stroke="none" opacity="0.95" />


        <circle cx="50" cy="14" r="1.6" fill="url(#customGradient)" stroke="none" />
    </svg>




);

/* === FEATURES ARRAY === */
const features = [
    {
        title: "Zero Training Required",
        desc: "Super easy to use via progressive web app interface that runs without need for any installation",
        icon: ZeroTrainingIcon,
    },
    {
        title: "Collaboration",
        desc: "Keep internal employees aligned with user-based dashboards",
        icon: CollaborationIcon,
    },
    {
        title: "Track Performance",
        desc: "Meaningful analytics that allow you to take the right decisions",
        icon: PerformanceIcon,
    },
    {
        title: "Scalable, Secure & Affordable",
        desc: "Grow without effort with flexible models at unbeatable prices",
        icon: ScalableIcon,
    },
    {
        title: "Next Level Satisfaction",
        desc: "Offer convenience, rewards, and more to your customers",
        icon: SatisfactionIcon,
    },
    {
        title: "Tailor made options",
        desc: "Custom solution ready to run within minutes depending on your business",
        icon: TailorIcon,
    },
];



export default function About() {


    return (
        <>
            <section id="features" className="container mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-10 max-w-3xl md:px-24 m-auto ">Why EasyOpz?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((f, i) => {
                        const Icon = f.icon; // ✅ assign the correct icon component
                        return (
                            <div key={i} className="bg-white rounded-lg shadow-md p-6">
                                <Icon className="w-12 h-12 text-primary inline-block mb-4" />
                                <h3 className="text-xl font-semibold text-primary">{f.title}</h3>
                                <p className="mt-2 text-gray-700">{f.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section id="features" className="container mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-10 max-w-3xl md:px-24 m-auto ">We are in a business near you. Vocal for Local</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-2 gap-6 mt-12 cursor-pointer">

                    <div className="relative h-[500px] rounded-xl overflow-hidden group shadow-lg">
                        {/* Background Video */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            src="/cafe.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-6">
                            <h3 className="text-2xl font-bold ">Restaurants and cafés</h3>


                            {/* Hidden Button, shown on hover */}
                            <button
                                className="mt-4 px-5 py-2 bg-highlight text-black font-semibold rounded-md opacity-0 
      group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 
      transition-all duration-300"
                            >
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[500px] rounded-xl overflow-hidden group shadow-lg">
                        {/* Background Video */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            src="/boutique.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-6">
                            <h3 className="text-2xl font-bold mb-2">Retail and boutique outlets </h3>
                            {/* <p className="text-sm opacity-80">Super easy to use via progressive web app interface that runs without need for any installatio</p> */}

                            {/* Hidden Button, shown on hover */}
                            <button
                                className="mt-4 px-5 py-2 bg-highlight text-black font-semibold rounded-md opacity-0 
                     group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 
                     transition-all duration-300"
                            >
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[500px] rounded-xl overflow-hidden group shadow-lg">
                        {/* Background Video */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            src="/distributors.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-6">
                            <h3 className="text-2xl font-bold mb-2">Distributors and wholesalers </h3>
                            {/* <p className="text-sm opacity-80">Keep internal employees aligned with user-based dashboards</p> */}

                            {/* Hidden Button, shown on hover */}
                            <button
                                className="mt-4 px-5 py-2 bg-highlight text-black font-semibold rounded-md opacity-0 
                     group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 
                     transition-all duration-300"
                            >
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[500px] rounded-xl overflow-hidden group shadow-lg">
                        {/* Background Video */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            src="/grocery.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-6">
                            <h3 className="text-2xl font-bold mb-2">Grocery and convenience store </h3>


                            {/* Hidden Button, shown on hover */}
                            <button
                                className="mt-4 px-5 py-2 bg-highlight text-black font-semibold rounded-md opacity-0 
                     group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 
                     transition-all duration-300"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
}
