"use client";



export default function Contact() {
    return (

        <section className="relative bg-primary text-white text-center  px-6 overflow-hidden">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/hero2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* Content */}

            <div className="relative z-10 py-32">


                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Ready to simplify
                    <br />
                    your operations?
                </h1>
                <p className="mt-4 max-w-2xl mx-auto">
                    EasyOpz helps businesses streamline workflows, reduce complexity, and focus on growth.
                </p>
                <div className="mt-6 space-x-4">
                    <button className="bg-highlight text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>

    );
}
