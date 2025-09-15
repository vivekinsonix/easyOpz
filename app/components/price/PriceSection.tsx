"use client";

import { useState } from "react";
import { Card, Badge, ToggleSwitch } from "flowbite-react";

const plans = [
    {
        name: "Starter",
        monthly: 1500,
        yearly: 14400,
        features: [
            "1st 100 customers: 750/PM",
            "1 Store",
            "Customer ordering",
            "Front desk",
            "Inventory",
            "Order management",
            "Flexi-customer payment management",
        ],
        highlighted: false,
    },
    {
        name: "Pro",
        monthly: 3000,
        yearly: 28800,
        features: [
            "1st 100 customers: 1500/PM",
            "Upto 3 stores",
            "Interconnectivity of multiple outlets ",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        monthly: "Custom",
        yearly: "Custom",
        features: [
            "WhatsApp, Email",
            "SMS automation",
            "Customer journey mapping",
            "Custom software development",
            "Integration services",
            "SEO services",
        ],
        highlighted: false,
    },
];

export default function PriceSection() {
    const [yearly, setYearly] = useState(false);

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20" id="pricing">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Simple, Transparent Pricing
                </h2>
                <p className="mt-3 mb-10 text-lg text-gray-600 dark:text-gray-400">
                    Choose a plan that works best for your team. Cancel anytime.
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-3 mb-14">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                        Monthly
                    </span>
                    <ToggleSwitch checked={yearly} onChange={setYearly} label="" color="blue" />
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                        Yearly{" "}
                        <span className="text-green-600 font-semibold">(Save 20%)</span>
                    </span>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <Card
                            key={i}
                            className={`flex cursor-pointer flex-col h-full rounded-2xl py-5  shadow-lg border transition-transform duration-200 hover:scale-105 ${plan.highlighted
                                ? "border-highlight bg-gradient-to-b shadow-2xl from-yellow-50 to-red-50 dark:from-blue-900/20 dark:to-gray-950"
                                : "border-gray-200 dark:border-gray-700"
                                }`}
                        >
                            {/* Card Content (flex column full height) */}
                            <div className="flex flex-col h-full justify-between">
                                {/* Top Section (Title + Price + Features) */}
                                <div>
                                    <div className="flex justify-center items-center gap-3 mb-8">
                                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                            {plan.name}
                                        </h3>
                                        {plan.highlighted && (
                                            <Badge color="info" size="sm">
                                                Most Popular
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Price */}
                                    <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">
                                        {plan.name === "Enterprise" ? (
                                            <>Custom</>
                                        ) : (
                                            <>
                                                ₹{yearly ? plan.yearly : plan.monthly}
                                                <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                                                    {yearly ? "/year" : "/month"}
                                                </span>
                                            </>
                                        )}
                                    </p>

                                    {/* Features */}
                                    <ul className="mt-8 space-y-4 text-left text-gray-700 dark:text-gray-300">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span className="text-green-500">✔</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom Section (CTA Button fixed at bottom) */}
                                <div className="mt-10">
                                    <button
                                        className={`w-full cursor-pointer rounded-xl px-5 py-3 font-semibold transition ${plan.name === "Enterprise"
                                            ? "border-1 border-highlight text-highlight hover:bg-highlight hover:text-black dark:border-highlight dark:hover:text-black dark:text-black dark:hover:bg-highlight"
                                            : plan.highlighted
                                                ? "bg-highlight text-black hover:bg-highlight/80"
                                                : "border-1 border-highlight text-highlight hover:bg-highlight hover:text-black dark:border-highlight dark:hover:text-black dark:text-black dark:hover:bg-highlight"
                                            }`}
                                    >
                                        {plan.name === "Enterprise"
                                            ? "Contact Sales"
                                            : plan.highlighted
                                                ? "Get Started"
                                                : "Choose Plan"}
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
