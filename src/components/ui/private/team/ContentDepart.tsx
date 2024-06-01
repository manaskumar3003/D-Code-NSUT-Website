import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function ContentDepartment() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-6 px-4 sm:px-8">
        <p className="max-w-2xl text-gray-700 md:text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsa temporibus beatae maiores vero molestias quas saepe sequi pariatur eum?
        </p>
        <div className="flex flex-wrap gap-5 sm:gap-10 justify-center md:max-w-3xl lg:max-w-5xl">
          <Card
            name="Lorem Lorem"
            position="Position"
            img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
            social={[
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
            ]}
          />
          <Card
            name="Lorem Lorem"
            position="Position"
            img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
            social={[
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
            ]}
          />
          <Card
            name="Lorem Lorem"
            position="Position"
            img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
            social={[
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
            ]}
          />
          <Card
            name="Lorem Lorem"
            position="Position"
            img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
            social={[
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
            ]}
          />
          <Card
            name="Lorem Lorem"
            position="Position"
            img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
            social={[
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
            ]}
          />
          
        </div>
      </div>
    </div>
  );
}


function Card({
  name,
  position,
  img,
  social,
}: {
  name: string;
  position: string;
  img: string;
  social: { icon: React.ReactNode; link: string }[];
}) {
  return (
    <div className="flex gap-3 sm:gap-4 md:gap-5">
      <img className="object-cover w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full" src={img} alt="Person" />
      <div className="flex flex-col justify-center">
        <p className="text-sm md:text-lg font-bold">{name}</p>
        <p className="text-xs md:text-sm text-gray-800">{position}</p>
        <div className="flex gap-2 mt-1">
          {social.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              className="*:size-3 *:sm:size-4"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


export default ContentDepartment;
