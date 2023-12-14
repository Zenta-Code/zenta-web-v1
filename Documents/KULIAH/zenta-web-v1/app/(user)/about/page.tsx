
export const metadata = {
  title: 'About Us | Tensai Mono',
  description: 'Tensai Mono is a website about programming 🧑‍💻 . I will be posting about my programming progress, good and bad days and more. Also, I might have some videos of me coding 🎥 . ',
}
function About() {

  return (
    <div className="flex flex-col lg:flex-row lg:mb-20 ">
      {/* Left column with floating gradient text */}
      <div className="mx-auto text-5xl lg:text-8xl lg:w-1/6 font-bold flex items-center justify-center py-12 px-4 lg:-skew-x-12 lg:writing-mode-vertical lg:transform lg:-rotate-90 ">
        <h1>🤘</h1>
        <h1 className=' font-cubano font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-fuchsia-400 to-violet-700'>caming sun</h1>
      </div>

      {/* Middle column with content
      <div className=" max-w-md lg:max-w-5xl mx-auto flex-grow flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-end gap-12">
          <div className="  space-y-4 items-center lg:w-96 px-6 py-7 bg-pink-900 rounded-3xl">
            <div className="flex items-center justify-center w-full h-14 py-4  bg-red-900 rounded-full">
              <p className="text-2xl font-bold ">rahmat hidayatullah</p>
            </div>
            <img className="w-full h-80 rounded-3xl" src="https://via.placeholder.com/321x321" />
            <p className="w-full text-justify text-base ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the </p>
          </div>
          <div className="  space-y-4 items-center lg:w-96 px-6 py-7 bg-pink-900 rounded-3xl">
            <div className="flex items-center justify-center w-full h-14 py-4  bg-red-900 rounded-full">
              <p className="text-2xl font-bold ">violia ruana n.s.</p>
            </div>
            <img className="w-full h-80 rounded-3xl" src="https://via.placeholder.com/321x321" />
            <p className="w-full text-justify text-base ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the </p>
          </div>
        </div>
      </div>
*/}
      {/* Right column with list of contents */}
      <div className="mx-auto text-5xl lg:text-8xl lg:w-1/6 font-bold flex items-center justify-center py-4 px-4  ">
        <h1></h1>
        <h1 className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'></h1>
      </div>
    </div>
  );
}

export default About;
