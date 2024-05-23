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
        We will be conducting various activities such as live sessions on challenging competitive programming problems, discussion of CodeChef challenge solutions, and organize our very own CodeChef competitions to facilitate learning and raise awareness about the importance of competitive programming and problem solving in our professional and everyday life.
        </p>
      </div>
      <div className="">
        <PORCards
          name="Vishu Aasliya"
          position="President"
          img="https://media.licdn.com/dms/image/D4D03AQFGnRpvmfFeog/profile-displayphoto-shrink_800_800/0/1715753501333?e=1721865600&v=beta&t=1kiFLKUW4dpgfo_Ah9gmdY2HaCjxOOLeX5jEfa7g51s"
          message="Always ready to help you out. It may be a small issue or a big one, I am always there for you."
          social={[
            { icon: <FaGithub />, link: "https://github.com" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/vishu-aasliya-3b302b22b/" },
            { icon: <FaInstagram />, link: "https://instagram.com" },
          ]}
        />
          <PORCards
          name="Ankita Aggarwal"
          position="President"
          img="https://media.licdn.com/dms/image/D4D35AQGlo3zY86wGNg/profile-framedphoto-shrink_200_200/0/1684496930519?e=1717027200&v=beta&t=5zUWAJG2CvpXn-S0yJgk3gtQJVblVy4i-Gy-uRKNG1E"
          message="Don't wait for the opportunity, create it. I am here to help you in creating your own opportunities."
          social={[
            { icon: <FaGithub />, link: "https://github.com" },
            { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
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
      <div className="mt-4 flex flex-row gap-6 flex-wrap sm:flex-nowrap items-center justify-center">
        <div className="w-36 h-36 rounded-full overflow-hidden relative">
          <Avatar className="w-36 h-36 select-none">
            <AvatarImage src={img} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 flex flex-col items-center sm:items-baseline ">
          <h4 className="text-xl font-bold">{name}</h4>
          <p className="text-lg text-foreground/80">{position}</p>
          <blockquote className="mt-4 border-l-2 pl-4 italic">&quot;{message}&quot;</blockquote>
          <div className="flex gap-4 mt-4 ps-4">
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
      <hr className="my-4 border-foreground/20" />
    </div>
  );
}

export default WallOfWidom;
