const features = [
  {
    title: 'Responsive Site',
    description: 'Mobile-first design that works perfectly on all devices and screen sizes.'
  },
  {
    title: 'Speed',
    description: 'Lightning-fast loading times to keep your visitors engaged and reduce bounce rates.'
  },
  {
    title: 'Booking Software Integration',
    description: 'Seamless integration with popular booking platforms and payment systems.'
  },
  {
    title: 'Easy Inquiry System',
    description: 'Simple contact forms and inquiry systems to capture more leads.'
  },
  {
    title: 'Map Integration',
    description: 'Interactive maps and location services to showcase destinations and properties.'
  }
]

export default function Features() {
  return (
    <section className="py-16 px-6 bg-gray-50" aria-label="Features">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-accent"
            >
              {/* TODO: Feature Icon */}
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <img src={null} alt={feature.title} className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-secondary mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
