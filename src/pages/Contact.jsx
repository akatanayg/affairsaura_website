import React from "react";

export default function Contact() {
  return (
    <main
      className="py-20 min-h-screen flex items-center justify-center bg-[#fdf9f0]"
      style={{ backgroundColor: "#fd9f0" }}
    >
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl w-full text-center">
        <h1 className="font-serif text-4xl text-[#5b3a2e] mb-6">Contact Us</h1>

        <p className="text-[#8b857b] mb-8">
          We’d love to hear from you! Whether you have questions, feedback, or
          simply want to connect, reach out to us anytime.
        </p>

        <div className="space-y-4 text-lg">
          <p className="text-[#5b3a2e] font-semibold">📍 Address</p>
          <p className="text-[#8b857b]">
            123, Kala Kuan,
            <br />
            Alwar, India – 301001
          </p>

          <p className="text-[#5b3a2e] font-semibold mt-6">📞 Phone</p>
          <p className="text-[#8b857b]">+91 9461405888</p>

          <p className="text-[#5b3a2e] font-semibold mt-6">✉️ Email</p>
          <p className="text-[#8b857b]">
            <a href="mailto:hello@affairsaura.com" className="underline">
              hello@affairsaura.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
