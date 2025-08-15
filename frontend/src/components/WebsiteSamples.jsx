import emailmarketing from "../assets/services/emailmarketing.png";
import eventscalendar from "../assets/services/eventscalendar.png";
import laptop from "../assets/services/laptop.png";
import localmarketing from "../assets/services/localmarketing.png";
import timemanagement from "../assets/services/timemanagement.png";
import samplesites from "../assets/samplesites.png";

export default function WebsiteSamples() {
    const services = [
        { image: laptop, title: "Responsive Site" },
        { image: timemanagement, title: "Speed" },
        { image: eventscalendar, title: "Booking Software Integration" },
        { image: emailmarketing, title: "Easy Enquiry System" },
        { image: localmarketing, title: "Map Integration" },
    ];

    return (
        <section className="px-12 py-8 max-w-7xl mx-auto text-center">
            {/* Top Heading */}
            <p className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold mb-10" style={{ fontFamily: "Plus Jakarta Sans" }}>
                We get your business—so we build what works.
            </p>

            {/* Icons Grid */}
            <div className="flex flex-wrap justify-between gap-8">
                {services.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-36 sm:w-40">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-30 h-30 object-contain mb-3"
                        />
                        <span className="font-semibold" style={{ fontFamily: "Plus Jakarta Sans" }}>
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-16 space-y-6 text-center">
                <p className="text-[32px] sm:text-[40px] lg:text-[44px] font-semibold mb-10" style={{ fontFamily: "Plus Jakarta Sans" }}>
                    High-Converting Tourism Website Design by Globalwebix
                </p>
                <span className="text-lg sm:text-xl max-w-8xl mx-auto leading-relaxed">
                    With over 10 years of hands-on experience in the tourism industry and a deep analysis
                    of 12,000+ travel websites, I understand what makes a tourism website truly work.
                    At Globalwebix, I use this expertise to design high-converting travel and tour
                    websites that not only look great but drive real results—helping tour operators
                    attract more bookings and grow online.
                </span>
            </div>
            <img src={samplesites} alt="samplesites" />
            <p className="text-[32px] sm:text-[40px] lg:text-[44px] font-semibold mb-10" style={{ fontFamily: "Plus Jakarta Sans" }}>
                We Build Websites for Every Corner of the Tourism Industry
            </p>
            <span className="text-lg sm:text-xl max-w-8xl mx-auto leading-relaxed">
                At Globalwebix, we specialize in websites for vacation properties, hotels, and tourism activities.
                With global experience across all types of travel businesses, we create custom sites that attract more
                guests and boost bookings—no matter your niche.
            </span>
        </section>
    );
}
