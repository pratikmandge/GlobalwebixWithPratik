import { ChevronDown, Bell } from "lucide-react";
import GlobalWeBixLogo from "../assets/GlobalWeBixLogo.png";

const menuItems = ["Services", "WeCare", "AboutUs", "Blog", "Contact"];

export default function Header() {
  return (
    <header className="w-full text-white flex items-center justify-between px-8 py-4">
      {/* Logo + Name */}
      <div className="flex items-center space-x-2 gap-4">
        <div className="flex items-center space-x-2">
          <img
            src={GlobalWeBixLogo}
            alt="GlobalWeBix Logo"
          />
          <span className="font-manrope font-bold text-[24px] tracking-[-0.05em]"
            style={{ color: "#05525B" }}>
            GlobalWeBix
          </span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-6 gap-4">
          {menuItems.map((item) => (
            <div
              key={item}
              className="flex items-center space-x-1 font-plusJakarta font-semibold text-[14px]"
              style={{ color: "#05525B" }}
            >
              <span>{item}</span>
              <ChevronDown size={14} />
            </div>
          ))}
        </nav>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button
          className="rounded-full border border-[#313439] px-4 py-1 font-manrope font-bold text-[16px] leading-[140%] tracking-[-0.02em] bg-transparent"
          style={{ color: "#05525B" }}
        >
          Get Started
        </button>
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white">
          <Bell size={18} color="white" />
        </div>
      </div>
    </header>
  );
}
