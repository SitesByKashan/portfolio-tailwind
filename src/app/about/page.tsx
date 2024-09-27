import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="flex flex-col lg:flex-row bg-[#074643] items-start justify-center min-h-screen px-10 py-36 relative overflow-hidden">
      <div className="col-md-6 bg-white p-6 rounded-lg shadow-md -mt-28">
  <h2 className="md:text-3xl text-2xl font-bold text-[#074643]">
    Hello! I’m <span className="text-[#398E8A]">M. KASHAN MALIK AWAN</span>
    <div className="md:text-2xl text-xl mt-2 ">and I’m a Passionate</div>
    <img 
      className="mt-4 w-full font-bold " 
      src="https://readme-typing-svg.herokuapp.com/?lines=Flutter+Mobile+App+Developer;GenAI+Chatbot+Developer;Full+Stack+Web+Developer;NLP+and+Web+Developer;Mern+Stack+Web+Developer&font=Roboto&size=32&duration=3500&pause=500&center=false&width=500&height=50&color=398E8A" 
      alt="Typing Effect"
    />
  </h2>

  <p className="mt-4">
    I am a skillful Mobile App & Web developer and expert in Dialogflow tools for building chatbots and voice
    applications. I am a quick learner and a team worker who gets the
    job done. I can easily capitalize on low-hanging fruits and quickly maximize timely deliverables for
    real-time schemas.
  </p>

  <div className="mt-6">
    <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
      <div>
        <div className="font-semibold">Age:</div>
        <div className="font-bold text-[#398E8A]">19</div>
      </div>
      <div>
        <div className="font-semibold">Email:</div>
        <div className="font-bold text-[#398E8A] break-words">sitesbykashan@gmail.com</div>
      </div>
      <div>
        <div className="font-semibold">Phone:</div>
        <div className="font-bold text-[#398E8A]">+92311-0206125</div>
      </div>
      <div>
        <div className="font-semibold">Address:</div>
        <div className="font-bold text-[#398E8A]">Karachi, Pakistan</div>
      </div>
      <div>
        <div className="font-semibold">Status:</div>
        <div className="font-bold text-[#398E8A]">Available</div>
      </div>
    </div>
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
            className="md:mt-64 mt-[1190px] w-[100%] object-contain"
          />
        </div>
      </main>
    </>
  );
}
