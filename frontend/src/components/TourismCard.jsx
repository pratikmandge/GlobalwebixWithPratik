export default function TourismCard({ spot, image, icon, index }) {
  // Condition: make small if not in the first row
  const cardSizeHeightClass = index < 3 ? 'h-64' : 'h-48';

  return (
    <div className={`relative w-full ${cardSizeHeightClass} rounded-xl overflow-hidden shadow-md group transition-all duration-300`}>
      {/* Background Image */}
      <img
        src={image}
        alt={spot}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Icon Box Top Left */}
      <div className="absolute top-4 left-4 bg-[#FFAC0B] w-10 h-10 rounded-sm flex items-center justify-center shadow z-10">
        <img src={icon} alt="icon" className="w-5 h-5" />
      </div>

      {/* Centered Spot Text */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <h3 className="text-white text-lg font-bold px-4 text-center">{spot}</h3>
      </div>
    </div>
  );
}
