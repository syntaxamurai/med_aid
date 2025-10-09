import { useState, useEffect } from "react";
import HeroImage from "./assets/hero.jpg";
import AboutImage from "./assets/esther.jpg";
import EstherStoryVideo from "./assets/estherstory.mp4";

function App() {
  // Countdown timer to 30th Nov 2025
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-11-30T00:00:00") - +new Date();
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
            Join us in raising awareness and funds to help Esther undergo her
            surgery.
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
          Esther is a vibrant young woman whose life has been impacted by a
          medical condition. She needs surgery to restore her health and
          continue pursuing her dreams.
        </p>
      </section>

      {/* Her Story */}
      <section className="px-6 py-8 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">Her Story</h2>
        <p className="text-gray-700 max-w-lg mx-auto leading-relaxed mb-6">
          Esther’s journey has been challenging, and her family has been doing
          everything possible to support her. The upcoming surgery is a critical
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
        <p className="text-gray-700 max-w-lg mx-auto mb-4">
          Diagnosis: GRADE 2 BRAIN TUMOR
          <br />
          Procedure: [Insert procedure]
          <br />
          Total Amount Needed: <span className="font-bold">KES 2,500,000</span>
        </p>
        <div className="text-gray-700 mb-6 max-w-md mx-auto">
          <h3 className="font-semibold mb-2">Fundraising Breakdown:</h3>
          <ul className="list-disc list-inside">
            <li>Hospital Fees: KES 2,300,000</li>
            <li>Medication & Supplies: KES 100,000</li>
            <li>Post-Surgery Care: KES 100,000</li>
          </ul>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-3 text-center mb-4 flex-wrap">
          <div className="bg-gray-100 p-4 rounded shadow w-20">
            <span className="block text-2xl font-bold">{timeLeft.days ?? 0}</span>
            <span className="text-gray-500 text-sm">Days</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow w-20">
            <span className="block text-2xl font-bold">{timeLeft.hours ?? 0}</span>
            <span className="text-gray-500 text-sm">Hours</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow w-20">
            <span className="block text-2xl font-bold">{timeLeft.minutes ?? 0}</span>
            <span className="text-gray-500 text-sm">Minutes</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow w-20">
            <span className="block text-2xl font-bold">{timeLeft.seconds ?? 0}</span>
            <span className="text-gray-500 text-sm">Seconds</span>
          </div>
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
              href="tel:+2547XXXXXXX"
              className="text-blue-600 hover:underline"
            >
              +254 7XX XXX XXX
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
