import Link from 'next/link';
import {  FaDownload } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="text-[#FFFFFF] body-font bg-[#398E8A]">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={'/'} className="flex title-font font-medium items-center  mb-4 md:mb-0">
                    <span className="ml-3 text-2xl md:text-4xl">M KASHAN MALIK AWAN</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={'/'} className="mr-5 hover:text-[#398E8A] hover:bg-[#FFFFFF] p-2 rounded-3xl hover:px-6 hover:text-lg">Home</Link>
                    <Link href={'/about'} className="mr-5 hover:text-[#398E8A] hover:bg-[#FFFFFF] p-2 rounded-3xl hover:px-6 hover:text-lg">About</Link>
                    <Link href={'/contact'} className="mr-5 hover:text-[#398E8A] hover:bg-[#FFFFFF] p-2 rounded-3xl hover:px-6 hover:text-lg">Contact</Link>
                </nav>
                <a href="/assets/KASHAN_MALIK_RESUME.pdf" download>
                    <button className="inline-flex items-center py-2 px-4 text-base mt-4 md:mt-0  hover:text-[#398E8A] hover:bg-[#FFFFFF] border border-white rounded-3xl">
                        <span className="mr-2">Resume</span>
                        <FaDownload size={20} />
                    </button>
                </a>



            </div>
        </header>
    );
}
