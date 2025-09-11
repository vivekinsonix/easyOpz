// components/About.js
"use client";


const features = [
    { title: "Zero Training Required", desc: "Super easy to use via progressive web app interface that runs without need for any installation" },
    { title: "Collaboration", desc: "Keep internal employees aligned with user-based dashboards" },
    { title: "Track Performance", desc: "Meaningful analytics that allow you to take the right decisions" },
    { title: "Scalable, Secure & Affordable", desc: "Grow without effort with flexible models at unbeatable prices" },
    { title: "Next Level Satisfaction", desc: "Offer convenience, rewards, and more to your customers" }
];

export default function About() {


    return (
        <section id="features" className="container mx-auto py-20 px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Why EasyOpz?</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-primary">{f.title}</h3>
                        <p className="mt-2 text-gray-700">{f.desc}</p>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">

                <div

                    className="relative h-full rounded-xl overflow-hidden group p-3 shadow-lg"
                    style={{
                        backgroundImage: `url(/blog1.jpeg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                        <h3 className="text-2xl font-bold mb-2">Scalable, Secure & Affordable </h3>
                        <p className="text-sm opacity-80">Grow without effort with flexible models at unbeatable prices</p>

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

                <div

                    className="relative h-100 rounded-xl overflow-hidden group shadow-lg"
                    style={{
                        backgroundImage: `url(/blog2.jpeg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                        <h3 className="text-2xl font-bold mb-2">Zero Training Required </h3>
                        <p className="text-sm opacity-80">Super easy to use via progressive web app interface that runs without need for any installatio</p>

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

                <div

                    className="relative h-100 rounded-xl overflow-hidden group shadow-lg"
                    style={{
                        backgroundImage: `url(/blog4.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                        <h3 className="text-2xl font-bold mb-2">Collaboration </h3>
                        <p className="text-sm opacity-80">Keep internal employees aligned with user-based dashboards</p>

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
                <div

                    className="relative h-100 rounded-xl overflow-hidden group shadow-lg"
                    style={{
                        backgroundImage: `url(/blog5.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                        <h3 className="text-2xl font-bold mb-2">Next Level Satisfaction </h3>
                        <p className="text-sm opacity-80">Offer convenience, rewards, and more to your customers</p>

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

    );
}
