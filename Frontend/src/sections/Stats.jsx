export default function Stats() {
  return (
    <section className="py-16 px-6 bg-gray-50" aria-label="Stats">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* $2M+ Ad Revenue Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-4xl font-extrabold text-accent mb-2">$2M+</h2>
            <p className="text-gray-600 font-medium">Ad Revenue Generated</p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-accent rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>
          
          {/* 300+ Campaigns Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-4xl font-extrabold text-accent mb-2">300+</h2>
            <p className="text-gray-600 font-medium">Successful Campaigns</p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-accent rounded-full" style={{width: '95%'}}></div>
            </div>
          </div>
          
          {/* 500% Traffic Increase Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-4xl font-extrabold text-accent mb-2">500%</h2>
            <p className="text-gray-600 font-medium">Increase in Organic Traffic</p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-accent rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


