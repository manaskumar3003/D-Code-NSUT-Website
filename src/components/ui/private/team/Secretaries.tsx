function Secretaries() {
  return (
    <div className="">
      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-5 sm:gap-7 md:gap-10">
        <Card
          name="Piyush Tiwari"
          position="Managing Director"
          img="https://media.licdn.com/dms/image/D4D03AQHaLVj3vfPsJQ/profile-displayphoto-shrink_100_100/0/1701797211812?e=1722470400&v=beta&t=uUZIK4CrgIlqrEwWhSbfxYhG-LlxioEnMpoQbTPHDKw"
          link="https://www.linkedin.com/in/piyushtiwari14?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACmEkq8Bl0CoeXH7yP9R1EtFkJcUp2nuxuk&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BGNSAnt70TiyUNW%2BfbsUiXw%3D%3D"
        />
        <Card
          name="Aditi"
          position="General Secretary"
          img="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"
          link="https://www.linkedin.com/in/aditi-21ab1724b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD3sdXYBHvao5Ba26Bhwxg_CTW6XY7Xq9Mg&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B3SQoPT%2FKQzaKdGR8Yzg2kg%3D%3D"
        />
        <Card
          name="Ashmita"
          position="General Secretary"
          img="https://media.licdn.com/dms/image/D5603AQHIX9F4nYi9_Q/profile-displayphoto-shrink_200_200/0/1712589063808?e=1722470400&v=beta&t=P_r4QcazE6sEF6otSs2A3iI7XqUP8cFr3zyIVV8zWSQ"
          link="https://www.linkedin.com/in/ashmita-luthra-01b91b203?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADPtd1cBfqj96LPvXZsCDiB-kisOF4ox458&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Brfy4m%2B2lS2So74hb76VPzw%3D%3D"
        />
        <Card
          name="Garima"
          position="General Secretary"
          img="https://media.licdn.com/dms/image/D5603AQHm0nkMAc9Mow/profile-displayphoto-shrink_200_200/0/1700246692604?e=1722470400&v=beta&t=rqBQumFLY-dyArs3rsv0yeS1n75QWkS1oonDakxgtyo"
          link="https://www.linkedin.com/in/garimasingh225/"
        />
      </div>
    </div>
  );
}

function Card({
  name,
  position,
  img,
  link,
}: {
  name: string;
  position: string;
  img: string;
  link: string;
}) {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <img
          className="w-28 h-28 rounded-full sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
          src={img}
          alt="woman"
          loading="lazy"
        />
        <div className="flex-1 flex flex-col items-center">
          <a href={link} target="_blank" className="text-xl font-bold">
            {name}
          </a>
          <p className="text-lg text-foreground/80 text-center">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default Secretaries;
