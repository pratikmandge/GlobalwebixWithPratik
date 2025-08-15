export default function Footer() {
    return (
        <footer className="bg-[#EF4C4C] text-white py-6 px-12">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-sm">
                    &copy; {new Date().getFullYear()} Globalwebix. All rights reserved.
                </p>
            </div>
        </footer>
    );
}