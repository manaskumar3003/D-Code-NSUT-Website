import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";


function WallOfWidom() {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="text-foreground/80 text-lg text-justify">
          We are the official D&apos;Code NSUT. Our mission is to build a robust competitive programming culture at NSUT and help students become better problem solvers, foster learning and focus on the development of all individuals in terms of their technical knowledge.
        </p>
        <p className="text-foreground/80 text-lg text-justify">
          We conduct various activities such as live sessions on challenging competitive programming problems, post contest discussion, and organize our very own competitions to facilitate learning and raise awareness about the importance of competitive programming and problem solving in our professional and everyday life.
        </p>
        <p className="text-foreground/80 text-lg text-justify md:hidden xl:block">
          Our society collaborates with industry experts and alumni to provide mentorship, workshops, and guest lectures, ensuring that our members stay updated with the latest trends and technologies.
        </p>
      </div>
      <div className="">
        <PORCards
          name="Anshul Goyal"
          position="President"
          img="/president.jpg"
          message="Always ready to help you out. It may be a small issue or a big one, I am always there for you."
          social={[
            { icon: <FaGithub />, link: "https://github.com" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
            { icon: <FaInstagram />, link: "https://instagram.com" },
          ]}
        />
      </div>
    </div>
  );
}

function PORCards({
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
      <div className="flex flex-col">
        <div className="mt-4 ml-5 flex flex-row gap-6 flex-wrap sm:flex-nowrap">
          <div className="w-36 h-36 rounded-full overflow-hidden relative">
            <Avatar className="w-36 h-36 select-none scale-125">
              <AvatarImage src={img} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          </div>
          <div className="items-start flex flex-col justify-center">
            <h4 className="text-xl font-bold">{name}</h4>
            <p className="text-lg text-foreground/80">{position}</p>
            <div className="flex gap-4">
              {social.map(({ icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="*:size-5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <blockquote className="mt-4 border-l-2 pl-4 italic">&quot;{message}&quot;</blockquote>
          <div><p className="text-foreground/80 text-lg text-justify">
            Welcome to D'Code NSUT! I am Anshul Goyal, President of this vibrant society. Our goal is to create a collaborative environment for tech enthusiasts to learn and grow. With departments in Competitive Programming, Web Development, AI & ML, and Content & Design, we offer diverse opportunities to enhance your skills. Join us in our journey of innovation and excellence. Let's work together to achieve great things and make a lasting impact.
          </p></div>
        </div>
      </div>
      <hr className="my-4 border-foreground/20" />
    </div>
  );
}

export default WallOfWidom;
