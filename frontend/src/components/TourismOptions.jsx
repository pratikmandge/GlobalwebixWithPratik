import TourismCard from "./TourismCard";
import crue from "../assets/tour/crue.svg";
import Ship from "../assets/tour/Ship.svg";
import boat from "../assets/tour/boat.svg";
import culture from "../assets/tour/culture.jpg";
import nature from "../assets/tour/nature.jpg";
import restaurant from "../assets/tour/restaurant.jpg";
import tour from "../assets/tour/tour.jpg";
import sport from "../assets/tour/sport.jpg";
import vacational from "../assets/tour/vacational.jpg";

export default function TourismOptions() {
    const vacationsOptions = [
        { spot: "HOTELS & RESTAURANT", image: restaurant, icon: Ship },
        { spot: "VACATIONAL PROPERTIES", image: vacational, icon: crue },
        { spot: "TOUR OPERATORS", image: tour, icon: boat },
        { spot: "SPORTS TOURS", image: sport, icon: crue },
        { spot: "NATURE TOUR", image: nature, icon: crue },
        { spot: "CULTURE TOUR", image: culture, icon: crue }
    ];

    return (
        <section className="px-12 py-12 max-w-7xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-semibold mb-6 font-plusJakarta">
                We Build Websites for Every Corner of the Tourism Industry
            </h2>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-gray-700">
                At Globalwebix, we specialize in websites for vacation properties, hotels, and tourism activities.
                With global experience across all types of travel businesses, we create custom sites that attract more
                guests and boost bookings—no matter your niche.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {vacationsOptions.map((option, index) => (
                    <TourismCard
                        key={index}
                        spot={option.spot}
                        image={option.image}
                        icon={option.icon}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
