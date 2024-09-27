import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="flex flex-col lg:flex-row bg-[#074643] items-start justify-center min-h-screen px-10 py-36 relative overflow-hidden">
        <div className="flex flex-col z-20"> 
          <h1 className="text-4xl font-bold text-white">
            HELLO I AM <br />
            <span className="text-6xl">M KASHAN MALIK AWAN</span>
          </h1>
          <p className="mt-4 text-white">
            GENERATIVE AI CHATBOT, FLUTTER MOBILE APP & MERN STACK WEB Developer
          </p>

          <div className="flex mt-6 space-x-4">
            <a
              href="https://github.com/SitesByKashan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/kashan-malik-47374422a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/sites_by_kashan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com/kashanmalik.kashanmalik.9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaFacebook size={30} />
            </a>
          </div>
          <div className="flex mt-6 space-x-4">
            <Link
              href="/assets/KASHAN_MALIK_RESUME.pdf"
              className="inline-flex px-6 py-2 bg-white text-[#074643] rounded-full border border-[#074643] hover:bg-[#074643] hover:text-white transition duration-300"
            >
              <span className="mr-2">Download CV</span>
              <FaDownload size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex px-6 py-2 bg-white text-[#074643] rounded-full border border-[#074643] hover:bg-[#074643] hover:text-white transition duration-300"
            >
             <span className="mr-2">Contact Us</span>
             <FaPhone size={20} />
            </Link>
          </div>
        </div>

        <section className="relative mt-12 lg:mt-0 lg:ml-12 flex-shrink-0 z-20">
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


        <div className="absolute top-0 left-0 w-full flex justify-center z-10">
          <Image
            width={1000}
            height={1000}
            src={"/assets/Vector 3.png"}
            alt="Vector"
            className="md:mt-64 mt-[1100px] w-[100%] object-contain"
          />
        </div>
      </main>
    </>
  );
}
