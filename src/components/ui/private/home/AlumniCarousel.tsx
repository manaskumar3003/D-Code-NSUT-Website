"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn ,FaGraduationCap} from "react-icons/fa";


const alumni = [
  {
    name: "Anuja Singh",
    position: "SDE at Google",
    img: "https://mighty.tools/mockmind-api/content/human/76.jpg",
    message:
      "Working at Google has been a dream come true. I am grateful to D'code for helping me get here.",
    social: [
      { icon: <FaLinkedinIn />, link: "https://github.com" },
      { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
      { icon: <FaInstagram />, link: "https://instagram.com" },
    ],
  },
  {
    name: "Rohit Sharma",
    position: "SDE at Amazon",
    img: "https://mighty.tools/mockmind-api/content/human/77.jpg",
    message:
      "I am grateful to D'code for helping me get here. I am grateful to D'code for helping me get here.",
    social: [
      { icon: <FaGithub />, link: "https://github.com" },
      { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
      { icon: <FaInstagram />, link: "https://instagram.com" },
    ],
  },
  {
    name: "Rahul Singh",
    position: "SDE at Microsoft",
    img: "https://mighty.tools/mockmind-api/content/human/78.jpg",
    message:
      "I am grateful to D'code for helping me get here. I am grateful to D'code for helping me get here.",
    social: [
      { icon: <FaGithub />, link: "https://github.com" },
      { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
      { icon: <FaInstagram />, link: "https://instagram.com" },
    ],
  },
  {
    name: "Ankita Singh",
    position: "SDE at Facebook",
    img: "https://mighty.tools/mockmind-api/content/human/62.jpg",
    message:
      "I am grateful to D'code for helping me get here. I am grateful to D'code for helping me get here.",
    social: [
      { icon: <FaGithub />, link: "https://github.com" },
      { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
      { icon: <FaInstagram />, link: "https://instagram.com" },
    ],
  },
  {
    name: "Ankit Sharma",
    position: "SDE at Google",
    img: "https://mighty.tools/mockmind-api/content/human/59.jpg",
    message:
      "I am grateful to D'code for helping me get here. I am grateful to D'code for helping me get here.",
    social: [
      { icon: <FaGithub />, link: "https://github.com" },
      { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
      { icon: <FaInstagram />, link: "https://instagram.com" },
    ],
  },
  {
    name: "Rahul Sharma",
    position: "SDE at Amazon",
    img: "https://mighty.tools/mockmind-api/content/human/18.jpg",
    message:
      "I am grateful to D'code for helping me get here. I am grateful to D'code for helping me get here.",
    social: [
      { icon: <FaGithub />, link: "https://github.com" },
      { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
      { icon: <FaInstagram />, link: "https://instagram.com" },
    ],
  },
];

function AlumniCarousel() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center">Alumni</h2>
      <p className="text-center text-foreground/80 mt-2">
        Our alumni have gone on to do great things. Here are some of them.
      </p>
      <div className="mt-8">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
          className="w-full relative"
        >
          <CarouselPrevious className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 text-dark rounded-full p-2 cursor-pointer" />
          <CarouselContent className="">
            {alumni.map((alumnus, index) => (
              <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/5">
                <TeamCards {...alumnus} isAlumni />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 text-dark rounded-full p-2 cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
}

function TeamCards({
  name,
  position,
  img,
  message,
  social,
  isAlumni = false,
}: {
  name: string;
  position: string;
  img: string;
  message: string;
  social: { icon: React.ReactNode; link: string }[];
  isAlumni?: boolean;
}) {
  return (
    <div>
      <div className="mt-4 flex flex-col gap-6 items-center justify-center">
        <div className="relative">
          <Avatar className="w-36 h-36 ring-4 ring-yellow-500	 select-none">
            <AvatarImage src={img} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          {/* {isAlumni && (
              <FaGraduationCap className="absolute bottom-1 right-1 size-8 text-yellow-600" />
          )} */}
        </div>
        <div className="flex-1 flex flex-col items-center">
          <h4 className="text-xl font-bold">{name}</h4>
          <p className="text-lg text-foreground/90">{position}</p>
          <blockquote className="text-foreground/90 mt-1 line-clamp-4 italic">
            &quot;{message}&quot;
          </blockquote>
          <div className="flex gap-4 mt-4">
            {social.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                className="*:size-6"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniCarousel;
