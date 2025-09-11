export default function Hero() {
    return (
        <section className="bg-primary text-white text-center py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Simplify Operations.<br />Maximize Efficiency.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto">
                EasyOpz helps businesses streamline workflows, reduce complexity, and focus on growth.
            </p>
            <div className="mt-6 space-x-4">
                <button className="bg-secondary px-6 py-3 rounded-md font-semibold hover:bg-teal-600">
                    Start Free Trial
                </button>
                <button className="bg-highlight text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500">
                    See Demo
                </button>
            </div>
        </section>

    );
}
