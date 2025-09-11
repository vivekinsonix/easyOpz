"use client";

const feedback = [
    {
        quote: "EasyOpz saved us 20+ hours a week by automating our workflows!",
        name: "Sarah L.",
        role: "Operations Manager",
        company: "TechFlow Inc.",
    },
    {
        quote:
            "The collaboration dashboards helped keep our remote team perfectly aligned.",
        name: "James T.",
        role: "Team Lead",
        company: "BrightWorks",
    },
    {
        quote:
            "Affordable, scalable, and secure – EasyOpz was a game changer for our startup.",
        name: "Priya K.",
        role: "Founder",
        company: "NextGen Startups",
    },
];

export default function Clients() {
    return (
        <section className="bg-primary text-white py-20 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {feedback.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white/10 p-6 rounded-lg shadow-md hover:scale-105 transition"
                        >
                            <p className="italic before:content-['“'] after:content-['”']">
                                {t.quote}
                            </p>
                            <h4 className="mt-4 font-semibold">{t.name}</h4>
                            <p className="text-sm">
                                {t.role}, {t.company}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
