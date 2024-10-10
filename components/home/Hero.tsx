import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="w-52 h-52 mb-10 object-cover object-center rounded-full border-2 border-blue-50 shadow-lg shadow-blue-600/30 dark:saturate-50"
          alt="Aris Arisandi"
          src="/images/me.webp"
          width={208}
          height={208}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200">
            Aris Arisandi
          </h1>
          <h2 className="title-font sm:text-xl text-medium mb-4 font-medium text-blue-600 dark:text-blue-200">
            Full Stack Developer
          </h2>
          <p className="mb-8 leading-relaxed dark:text-gray-200">
            Hello, I am Aris Arisandi, A{' '}
            <span className="text-blue-600 dark:text-blue-200">
              Full Stack Developer
            </span>{' '}
            based in Jakarta, Indonesia. I have rich experience in web
            development especially at web backend developer. I am energetic
            Technology Enthusiast always looking for something new to learn
          </p>
          <div className="flex justify-center">
            <Button className="mr-4">Download CV</Button>
            <Button variant={'secondary'}>Contact Me</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
