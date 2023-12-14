import Image from 'next/image';
import coverImage from '../public/cover.webp';
import logoTensai from '../public/favicon-128x128.webp';

const Banner = () => {

  return (
    <div className="max-w-7xl mx-auto">
      <div className="inline-flex flex-col space-y-3 items-center overflow-hidden relative w-full drop-shadow-2xl group-hover:scale-105 transition-transform duration-200 ease-out px-5">
        <Image
          className="rounded-3xl object-cover object-center h-72"
          src={coverImage}
          alt="Cover Main Page Tensai Mono"
          priority
        />
        <div className="absolute bottom-0">
          <Image className="w-36 h-36" src={logoTensai} alt="Logo Main Page Tensai Mono" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-cubano font-bold text-center text-4xl">
        Tensai Mono
        </h1>
      </div>
      <div className="mx-auto max-w-4xl px-5">
        <p className="font-Sofia text-xl text-justify py-5">
          Tensai Mono is a website about programming 🧑‍💻. I will be posting about my programming progress, good and bad days and more. Also, I might have some videos of me coding 🎥.
        </p>
        <p className="text-2xl font-cubano font-semibold py-3">Blog Post</p>
      </div>
    </div>
  );
};

export default Banner;