// components/Services.js
"use client";

const plans = [
    { name: "Starter", price: "$9/mo", features: ["Basic task management", "1 Dashboard", "Email support"], highlight: false },
    { name: "Pro", price: "$29/mo", features: ["Advanced analytics", "Unlimited dashboards", "Team collaboration", "Priority support"], highlight: true },
    { name: "Enterprise", price: "Custom", features: ["Custom workflows", "Dedicated support", "Enhanced security", "Scalable solutions"], highlight: false }
];



export default function Services() {
    return (
        <section id="pricing" className="container mx-auto py-20 px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <div key={i} className={`rounded-lg p-6 shadow-md ${plan.highlight ? "bg-secondary text-white border-2 border-highlight" : "bg-white text-gray-900"}`}>
                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                        <h2 className="text-3xl font-bold mt-2">{plan.price}</h2>
                        <ul className="mt-4 space-y-2">
                            {plan.features.map((f, j) => (
                                <li key={j}>✔ {f}</li>
                            ))}
                        </ul>
                        <button className={`mt-6 px-6 py-2 rounded-md font-semibold ${plan.highlight ? "bg-highlight text-black hover:bg-yellow-500" : "bg-secondary text-white hover:bg-teal-600"}`}>
                            {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                        </button>
                    </div>
                ))}
            </div>
        </section>

    );
}
