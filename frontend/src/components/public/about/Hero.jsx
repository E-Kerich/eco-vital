export default function AboutHero() {
  return (
    <div className="relative min-h-[30vh] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/durfnwa3k/image/upload/v1769672541/ChatGPT_Image_Jan_29_2026_10_41_56_AM_a9fdrg.png"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[30vh] flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Strategic advisory and sustainability consulting for African markets
          </p>
        </div>
      </div>
    </div>
  );
}