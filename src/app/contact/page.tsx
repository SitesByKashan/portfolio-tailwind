import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="flex flex-col lg:flex-row bg-[#074643] items-start justify-center min-h-screen px-10 py-36 relative overflow-hidden">
        <div className="col-md-6 w-full bg-white p-6 pt-1 rounded-lg shadow-md -mt-28">
          <div className="bg-white flex flex-col md:ml-auto w-full md:py-8">
            <h2 className="text-[#074643] text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-[#398E8A]">We value your feedback! Please share your thoughts below.</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-[#398E8A]">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#0e6b66] focus:ring-2 focus:ring-[#0e6b66] text-base outline-none text-[#398E8A] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-[#398E8A]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#0e6b66] focus:ring-2 focus:ring-[#0e6b66] text-base outline-none text-[#398E8A] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-[#398E8A]">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#0e6b66] focus:ring-2 focus:ring-[#0e6b66] h-32 text-base outline-none text-[#398E8A] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-[#0e6b66] border-0 py-2 px-6 focus:outline-none hover:bg-[#0e6b66]/90 rounded text-lg">Submit</button>
            <p className="text-xs text-[#398E8A] mt-3">Your feedback is important to us.</p>
          </div>
        </div>

        <section className="relative mt-12 lg:mt-16 lg:ml-24 flex-shrink-0 z-20">
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                width={2000}
                height={2000}
                src="/assets/Profile.jpg"
                alt="Profile"
                className="w-96 h-96 rounded-full object-cover border-4 border-white"
              />
            </div>
          </div>
        </section>

        <div className="absolute top-0 left-0 w-full flex justify-center z-0 pointer-events-none">
          <Image
            width={1000}
            height={1000}
            src={"/assets/Vector 3.png"}
            alt="Vector"
            className="md:mt-96 mt-[1030px] w-full object-contain"
          />
        </div>
      </main>
    </>
  );
}
