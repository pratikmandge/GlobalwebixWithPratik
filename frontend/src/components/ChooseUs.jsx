import checklist from "../assets/checklist.svg";
import circle from "../assets/circle.svg";
import search from "../assets/search.svg";
import star from "../assets/star.svg";

export default function ChooseUs() {
    const choices = [
        {
            image: star,
            title: "Design",
            boldText: "Mobile-First, Fast-Loading,",
            description: "Ensure your site looks perfect and loads fast on every device."
        },
        {
            image: circle,
            title: "Integrated Calender",
            boldText: "Optimized for Bookings,",
            description: "Turns visitors into bookings with a smooth flow."
        },
        {
            image: search,
            title: "Cost Effective",
            boldText: "Cost Effective",
            description: "Scalable pricing that fits small tour businesses to growing hotel brands."
        },
        {
            image: checklist,
            title: "Ongoing Support",
            boldText: "",
            description: "Keep your site up-to-date without the need for a full rebuild."
        },
    ];

    return (
        <section className="bg-[#FFF0E2] py-12">
            <div className="container mx-auto px-4">
                <div className="bg-[#FFFFFF] container mx-auto px-4">
                    {/* Title Section */}
                    <div className="text-center mb-10">
                        <p className="text-3xl font-bold py-8">Why Choose Globalwebix?</p>
                        <span className="text-xl">
                            With over 10 years in tourism and 12,000+ travel websites analyzed,
                            we know what works. We build cost-effective, high-converting websites
                            for hotels, vacation rentals, and tour operators—optimized for mobile,
                            designed to drive bookings, and easy to update.
                        </span>
                    </div>

                    {/* Choices List Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {choices.map((option, index) => (
                            <div key={option.id} className="flex flex-col items-start bg-white p-6 rounded-lg space-y-4">
                                {/* Icon and Title */}
                                <div className="space-x-3">
                                    <img src={option.image} alt={option.title} className="w-12 h-12" />
                                    <p className="text-xl font-semibold">{option.title}</p>
                                </div>

                                {/* Description */}
                                <div className="space-y-2">
                                    <span className="font-bold">{option.boldText} </span>
                                    <span className="text-base text-gray-600">{option.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
