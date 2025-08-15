import blogging from "../assets/blogging.jpg";
import assistant from "../assets/assistant.jpg";
import sitecare from "../assets/sitecare.jpg";
import { ArrowRight } from 'lucide-react';

export default function ExtraServices() {

    const services = [
        { id: 1, service: "Blogging Service", image: blogging, category: "Tech", link: "#" },
        { id: 2, service: "We Care your Site", image: sitecare, category: "Tech", link: "#" },
        { id: 3, service: "Personal Assistant", image: assistant, category: "Tech", link: "#" }
    ];

    return (
        <section className="bg-[#f3f4fe] py-8 px-12">
            <p className="text-2xl font-bold text-center mb-10">
                Boost Your Tourism Sales with Extra Services
            </p>

            <div className="flex flex-wrap justify-center gap-6">
                {services.map((item) => (
                    <div key={item.id} className="relative w-full sm:w-[300px] md:w-[30%]">
                        <img
                            src={item.image}
                            alt={item.service}
                            className="w-full h-54 object-cover rounded-xl z-0"
                        />

                        {/* Bottom Gradient Shadow */}
                        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent rounded-b-xl z-0"></div>

                        {/* Category Label */}
                        <span className="absolute top-3 left-3 bg-[#1364F9] text-white text-sm px-6 rounded-2xl z-10">
                            {item.category}
                        </span>

                        {/* Overlay Text */}
                        <div className="absolute bottom-3 left-3 text-white z-10">
                            <p className="text-lg font-semibold">{item.service}</p>
                            <a
                                href={item.link}
                                className="flex items-center gap-1 text-sm mt-1 hover:underline hover:text-blue-300 transition"
                            >
                                Know More <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
