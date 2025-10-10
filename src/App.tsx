import { useState, useEffect } from "react";
import HeroImage from "./assets/hero.jpg";
import AboutImage from "./assets/esther.jpg";
import EstherStoryVideo from "./assets/estherstory.mp4";

function App() {
  // Countdown timer to 30th Nov 2025
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-10-30T00:00:00") - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [showMore, setShowMore] = useState(false);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  // Placeholder STK Push function
  const triggerSTKPush = () => {
    alert("STK Push triggered! Connect to your Daraja API here.");
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center h-[70vh] text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-white flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Help Support Esther's Surgery
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mx-auto">
            Join us in raising awareness, and funds to help Esther undergo her surgery.
          </p>
          <a
            href="#donation"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* About Esther */}
      <section className="px-6 py-8 bg-white flex flex-col items-center text-center">
        <img
          src={AboutImage}
          alt="Esther"
          className="w-36 h-36 rounded-full mb-4 object-cover"
        />
        <h2 className="text-2xl font-semibold mb-2">About Esther</h2>
        <p className="text-gray-700 max-w-md">
          Esther Obote is a vibrant daughter, mother, sister and friend whose life has been impacted by a brain tumor. She needs a second surgery to restore her health and
          continue pursuing her dreams.
        </p>
      </section>

      {/* Her Story */}
      <section className="px-6 py-8 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">Her Story</h2>
        <p className="text-gray-700 max-w-lg mx-auto leading-relaxed mb-6">
          Esther’s journey has been challenging, and her family and friends have been doing everything possible to support her. The upcoming surgery is a critical
          step, and with your help, we can make it possible.
        </p>

        {/* Direct Video Embed */}
        <h3 className="text-xl font-semibold mb-2">Know Esther in a Minute</h3>
        <video
          src={EstherStoryVideo}
          controls
          className="mx-auto w-full max-w-md rounded shadow"
        >
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Surgery Details */}
      <section className="px-6 py-8 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Surgery Details</h2>
        <p className="text-gray-700 max-w-lg mx-auto mb-4 leading-relaxed">
          <span className="font-semibold">Diagnosis:</span> Low grade glioma
          <br />
          <span className="font-semibold">Procedure:</span> Neuronavigation assisted brain tumor craniotomy
          <br />
          Treatment Cost: <span className="font-semibold"> Kshs 2.5 Million</span>
          <br />
        </p>

        {/* Collapsible Cost Details */}
        <div className="text-gray-700 max-w-md mx-auto mb-4 text-left">
          <button
            onClick={() => setShowMore((prev: boolean) => !prev)}
            className="text-blue-600 font-semibold mb-3"
          >
            {showMore ? "Show Less ▲" : "Show More ▼"}
          </button>

          {showMore && (
            <div className="transition-all duration-300 ease-in-out">
              <p className="mb-3">
                <span className="font-bold">Cost breakdown:</span>
              </p>
              <p className="mb-3">
                <span className="font-semibold">Hospital Cost:</span> approximately KES 1,000,000 comprising of:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Theatre Fee: KES 550,000</li>
                <li>Accommodation: KES 204,000 for 10 days (2 days ICU, 2 days HDU, 6 days ward)</li>
                <li>Pharmacy: KES 90,000</li>
                <li>MRI (pre & post-surgery): KES 80,000</li>
                <li>Lab Tests: KES 40,000</li>
                <li>Physiotherapy: KES 30,000</li>
              </ul>
              <p className="mb-3">
              </p>
              <p className="mb-3">
                <span className="font-semibold">Doctors & Anaesthetist:</span> KES 770,000 — including KES 400,000 procedure fee, KES 120,000 ward care, and KES 250,000 for anaesthetist.
              </p>
              <p className="mb-3">
                <span className="font-semibold">Post-care:</span> Not yet included, which is why the total target is <span className="font-bold">KES 2.5 Million</span>.
              </p>
              *These costs may increase depending on additional services or items the hospital provides.
            </div>
          )}
        </div>

        {/* Countdown Timer */}
        <div className="flex flex-col items-center justify-center mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Countdown to Surgery
          </h3>

          <div className="flex justify-center gap-4 text-center flex-wrap">
            {[
              { label: "Days", value: timeLeft.days ?? 0 },
              { label: "Hours", value: timeLeft.hours ?? 0 },
              { label: "Minutes", value: timeLeft.minutes ?? 0 },
              { label: "Seconds", value: timeLeft.seconds ?? 0 },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-blue-50 hover:bg-blue-100 transition p-5 rounded-2xl shadow-md w-24 sm:w-28"
              >
                <span className="block text-3xl font-extrabold text-blue-700">
                  {item.value}
                </span>
                <span className="text-gray-600 text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-gray-600 text-sm">
            Surgery scheduled for{" "}
            <span className="font-semibold text-blue-700">30th October 2025</span>
          </p>
        </div>
      </section>


      {/* Donation Section */}
      <section
        id="donation"
        className="px-6 py-8 bg-gray-50 text-center flex flex-col items-center"
      >
        <h2 className="text-2xl font-semibold mb-6">Donate</h2>

        <div className="mb-6 space-y-2">
          <p className="text-gray-700 text-lg">
            Paybill:{" "}
            <span className="font-bold text-gray-900">8024418</span>
          </p>
          <p className="text-gray-700 text-lg">
            Account No:{" "}
            <span className="font-bold text-gray-900">
              ESTHER MEDICAL FUND
            </span>
          </p>
          <p className="text-gray-700 text-lg">
            Phone:{" "}
            <a
              href="tel:+254711179412"
              className="text-blue-600 hover:underline"
            >
              +254 711 179 412
            </a>
          </p>
        </div>

        <button
          onClick={triggerSTKPush} // Connect your Daraja API here
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold transition"
        >
          Donate Online (M-Pesa)
        </button>
      </section>

      {/* Share Section */}
      <section className="px-6 py-8 text-center">
        <button
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: "Help Esther Fund Her Surgery",
                  text: "Let's support Esther in her upcoming surgery. Every contribution counts!",
                  url: window.location.href,
                })
                .catch((error) => console.log("Error sharing:", error));
            } else {
              // Fallback: copy URL to clipboard
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard! Share it with your friends.");
            }
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
        >
          Share Esther's Story
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Support Esther. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
