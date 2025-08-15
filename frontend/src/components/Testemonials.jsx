import ceo from "../assets/ceo.jpg";
import Scroller from "./Scroller";

export default function Testimonials() {
    const testimonials = [
        {
            content:
                "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
            user: "Sara Jones",
            designation: "CEO of XYZ Company",
            icon: ceo,
        },
        {
            content:
                "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
            user: "Sara Jones",
            designation: "CEO of XYZ Company",
            icon: ceo,
        },
        // You can add more testimonials here
    ];

    return (
        <section className="py-10 px-12 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
            <Scroller testimonials={testimonials} />
        </section>
    );
}
