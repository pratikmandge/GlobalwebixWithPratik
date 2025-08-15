import meeting from "../assets/meeting.jpg";
import { ArrowRight } from 'lucide-react';

export default function PricingAndSignUp() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-12 py-8 gap-10">
            {/* Left Section */}
            <div className="lg:w-1/2 space-y-4">
                <p className="text-[#B23A00] text-3xl font-medium py-2 rounded-full">
                    Pricing & Sign Up
                </p>
                <p className="text-5xl font-semibold">Boost Your</p>
                <p className="text-5xl font-semibold">Business with Us</p>
                <p className="text-xl opacity-80">
                    We offer flexible website packages—from Essentials to Premium—designed to fit different budgets and business goals. Even our entry-level package includes all the tools you need to start generating more bookings. Book a free call with us to explore the best features, integrations, and custom options for your hotel, vacation rental, or tour website.
                </p>
                <div className="flex space-x-4 mt-10">
                    <a href="#" className="bg-[#0062B2] text-white py-2 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-[#004e8c] transition duration-300 h-15 w-52">
                        <span>See Offers</span>
                        <ArrowRight />
                    </a>
                    <a href="#" className="bg-[#FD8F12] text-white py-2 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-[#e6790e] transition duration-300 h-15 w-42">
                        <span>Book Call</span>
                        <ArrowRight />
                    </a>
                </div>
            </div>

            {/* Right Section (Image) */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
                <img
                    src={meeting}
                    alt="meeting"
                    className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl lg:rounded-bl-none w-full object-cover"
                />
            </div>
        </section>
    );
}
