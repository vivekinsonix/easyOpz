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
        </section>

    );
}
