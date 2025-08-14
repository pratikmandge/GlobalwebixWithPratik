export default function Hero() {
  return (
    <section className="relative text-white py-32 px-6" aria-label="Hero">
      {/* TODO: Hero Background Image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img src={null} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Two Horizontal Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Tourism Website Design That Increases Bookings and Boosts Sales
              </h1>
              <p className="mt-4 text-neutral-100">
                we build SEO-optimized travel websites that boost bookings for tour operators and travel agencies.
              </p>
              <a
                href="#"
                className="inline-block mt-6 bg-accent text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Schedule Call"
              >
                Schedule Call
              </a>
            </div>
            
            {/* Section 2 - Client Logos */}
            <div>
              <p className="text-sm text-neutral-200 mb-4">Trusted by leading travel companies</p>
              {/* TODO: Client Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-90">
                <img src={null} alt="Client logo 1" className="h-8 w-auto" />
                <img src={null} alt="Client logo 2" className="h-8 w-auto" />
                <img src={null} alt="Client logo 3" className="h-8 w-auto" />
                <img src={null} alt="Client logo 4" className="h-8 w-auto" />
              </div>
            </div>
          </div>
          
          {/* Right Column - Two Vertical Sections */}
          <div className="space-y-6">
            {/* Section 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-accent mb-3">230+</h3>
              <p className="text-neutral-100">
                some big companies that we work with, and trust us very much
              </p>
            </div>
            
            {/* Section 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-3">
                Drive more traffic and product sales
              </h3>
              {/* TODO: Chart/Graph placeholder */}
              <div className="h-24 bg-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-accent font-medium">Chart Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


