import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Lead() {
  return (
    <div className="">
      <section className="pt-12 md:pt-14 lg:pt-16">
        <div className="flex flex-wrap gap-5 gap-y-16 sm:gap-10 sm:gap-y-20 md:gap-y-24 justify-center sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
              <Card
                name="Pranshu Lakhotia"
                position="CP Lead"
                img="https://mighty.tools/mockmind-api/content/human/22.jpg"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/pranshu-lakhotia-41b201254?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD6toRcBMRZ3d0oVSivrUfH4tROkyFR_viU&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bh9WeZja3SQuVgnK86RD6%2BQ%3D%3D" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Anshul Goyal"
                position="Web Dev Lead"
                img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Aarushi Sinha"
                position="Design Lead"
                img="https://mighty.tools/mockmind-api/content/human/43.jpg"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/aarushi-sinha-4a25a32a7?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEnyrPoBqeX_D_J_DnlNWugd-OtHZTIvM74&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BDBCeuFo1R%2FGxS9%2BFv8c6Ow%3D%3D" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Maithri Sti Meda"
                position="Content Lead"
                img="https://mighty.tools/mockmind-api/content/human/9.jpg"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/maithri-meda/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Ashwajeet Bhatia"
                position="Content Lead"
                img="https://media.licdn.com/dms/image/D4D03AQHz8wT2g6NR5A/profile-displayphoto-shrink_100_100/0/1675617088965?e=1723075200&v=beta&t=QrbLkUgSqHO8ihy2AgskgLP5KAe77JYzHgtYEe91nuM"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/ashwajeetbhatia/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Gaurav Sahu"
                position="Outreach Lead"
                img="https://media.licdn.com/dms/image/D4D03AQEGyZQo2YnSGA/profile-displayphoto-shrink_200_200/0/1700306410217?e=1723075200&v=beta&t=JC6MTKSWJ35Aq8A5O0jTGleQR1BfrLyTLKfJKXU5Gc0"
                social={[
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/gaurav-sahu-24369424b/" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                ]}
              />
              <Card
                name="Yashika"
                position="Outreach Lead"
                img="https://mighty.tools/mockmind-api/content/human/6.jpg"
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
                      min-w-40 sm:min-w-44 lg:min-w-56 pb-3 md:pb-4 lg:pb-5 bg-[#686D76] gap-3 text-[#0f0f10]">
        <img alt="Picture" className="w-20 h-20 -mt-10 sm:w-24 sm:h-24 sm:-mt-12 md:w-28 md:h-28 md:-mt-14 lg:w-32 lg:h-32 lg:-mt-16 rounded-full" src={img} />
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
              target="_blank"
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
