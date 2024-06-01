import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Lead() {
  return (
    <div className="">
      <section className="py-12">
        <div className="flex flex-wrap gap-5 gap-y-20 sm:gap-10 sm:gap-y-20 justify-center sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
              <Card
                name="Lorem Lorem"
                position="Department Lead"
                img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Lorem Lorem"
                position="Department Lead"
                img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Lorem Lorem"
                position="Department Lead"
                img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Lorem Lorem"
                position="Department Lead"
                img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Lorem Lorem"
                position="Department Lead"
                img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Lorem Lorem"
                position="Department Lead"
                img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Lorem Lorem"
                position="Department Lead"
                img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />

          </div>
      </section>
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
    <div>
      <div className="flex flex-col justify-center items-center text-center rounded-md 
                      px-5 pb-3 sm:px-7 md:px-8 md:pb-4 lg:px-10 lg:pb-5 bg-gray-400 gap-3">
        <img alt="Picture" className="w-20 h-20 -mt-10 sm:w-24 sm:h-24 sm:-mt-12 rounded-full" src={img} />
          <div>
          <p className="lg:text-xl font-semibold">{name}</p>
          <p className="text-sm lg:text-base">{position}</p>
          </div>
        <div className="flex gap-4">
          {social.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              className="*:md:size-5 *:lg:size-6"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lead;
