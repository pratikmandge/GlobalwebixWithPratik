export default function Navbar() {
  return (
    <nav
      className="absolute top-0 w-full z-20 text-white"
      aria-label="Primary Navigation"
    >
      <div className="bg-gradient-to-b from-black/60 to-transparent">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-2">
            {/* TODO: Logo */}
            <img src={null} alt="GlobalWebix logo" className="h-8 w-8" />
            <span className="font-bold">GlobalWebix</span>
          </div>
          <ul className="hidden md:flex space-x-6" role="menubar">
            <li role="none"><a role="menuitem" href="#" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">Services</a></li>
            <li role="none"><a role="menuitem" href="#" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">WeCare</a></li>
            <li role="none"><a role="menuitem" href="#" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">About Us</a></li>
            <li role="none"><a role="menuitem" href="#" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">Blog</a></li>
            <li role="none"><a role="menuitem" href="#" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">Contact</a></li>
          </ul>
          <a
            href="#"
            className="bg-accent text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Get started"
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  )
}


