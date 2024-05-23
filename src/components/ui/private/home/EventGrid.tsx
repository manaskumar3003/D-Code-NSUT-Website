import { cn } from "@/lib/utils";
import Image from "next/image";
import { title } from "process";

const events:EventCardProps[] = [
    {
        title: "Event 1",
        image: "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/319126f9a2eb42cf9392d007ec7ef6da/assets/cover/881.png",
        className: "sm:col-span-2 sm:row-span-2"
    },
    {
        title: "Event 2",
        image: "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/319126f9a2eb42cf9392d007ec7ef6da/assets/cover/881.png"
    },
    {
        title: "Event 2",
        image: "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/319126f9a2eb42cf9392d007ec7ef6da/assets/cover/881.png",
        className: ""
    },
    {
        title: "Event 2",
        image: "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/319126f9a2eb42cf9392d007ec7ef6da/assets/cover/881.png"
    },
    {
        title: "Event 2",
        image: "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/319126f9a2eb42cf9392d007ec7ef6da/assets/cover/881.png"
    },
    {
        title: "Event 2",
        image: "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/319126f9a2eb42cf9392d007ec7ef6da/assets/cover/881.png"
    },
    {
        title: "Event 2",
        image: "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/319126f9a2eb42cf9392d007ec7ef6da/assets/cover/881.png"
    },
]
function EventGrid() {
    return (
        <section className="p-8">
            <h2 className="text-4xl font-bold mb-8 text-center">Events</h2>
            <div className="grid gap-4 auto-rows-fr grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] ">
            {events.map((event:EventCardProps, index) => (
                <EventCard key={index} title={event.title} image={event.image} className={event.className} />
            ))}
            </div>
        </section>
    );
}

interface EventCardProps  {
    title: string;
    image: string;
    className?: string;
}

function EventCard({ title, image, className } : EventCardProps) {
    return (
        <div className={cn("bg-white rounded-lg shadow-md col-span-1 row-span-1 relative overflow-hidden aspect-square ", className)}>
            <Image src={image} alt={title} unoptimized fill />
        </div>
    )
}

export default EventGrid;