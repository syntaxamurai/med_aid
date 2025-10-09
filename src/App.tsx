import HeroImage from "./assets/hero.jpg";
import EstherPhoto from "./assets/esther.jpg";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center h-[70vh] text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* dark overlay */}
        <div className="relative text-white flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Help Support Esther's Surgery
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mx-auto">
            Join us in raising awareness and funds to help Esther undergo her surgery.
          </p>
          {/* Donate Now Button */}
          <a
            href="#donation"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-8 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Her Story</h2>
        <p className="text-gray-700 leading-relaxed max-w-lg mx-auto">
          Esther has been facing a medical challenge that requires surgery in the coming month. 
          We are coming together to support her and ensure she gets the care she needs. 
          Every contribution brings her closer to recovery.
        </p>
      </section>

      {/* About Section */}
      <section className="px-6 py-8 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Esther</h2>
        <img
          src={EstherPhoto}
          alt="Esther"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <p className="text-gray-700 leading-relaxed max-w-lg mx-auto">
          Esther is a wonderful person with a bright spirit. This surgery will not only improve 
          her health but also allow her to continue pursuing her dreams without limitations. 
          Your support means the world to her and her family.
        </p>
      </section>

      {/* Donation Section */}
      <section id="donation" className="px-6 py-8 bg-white flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
        <p className="text-gray-700 mb-6 text-center max-w-md">
          Enter your details below to contribute. You will receive an STK push to your device.
        </p>
        <form className="w-full max-w-md flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Amount (KES)"
            className="p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Donate
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-6 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Support Esther. All rights reserved.
      </footer>
    </div>
  );
}
