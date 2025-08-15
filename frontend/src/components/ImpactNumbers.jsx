export default function ImpactNumbers() {
    const impactedNumbers = [
        { value: "$2M", sign: "+", label: "Ad Revenue Generated" },
        { value: "300", sign: "+", label: "Successful Campaigns" },
        { value: "500", sign: "%", label: "Increase in Organic Traffic" }
    ];

    return (
        <section className="flex flex-wrap justify-between gap-8 px-12 py-10">
            {impactedNumbers.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center text-center w-full sm:w-auto gap-2"
                >
                    <div className="flex items-start justify-center">
                        <span
                            className="text-[48px] sm:text-[60px] leading-none font-extrabold tracking-[-0.02em]"
                            style={{ fontFamily: "Manrope" }}
                        >
                            {item.value}
                        </span>
                        <span
                            className="text-[48px] sm:text-[60px] leading-none font-extrabold tracking-[-0.02em] text-yellow-400"
                            style={{ fontFamily: "Manrope" }}
                        >
                            {item.sign}
                        </span>
                    </div>
                    <span className="text-lg sm:text-2xl opacity-60 mt-2 max-w-[200px] text-start">
                        {item.label}
                    </span>
                </div>
            ))}
        </section>
    );
}
