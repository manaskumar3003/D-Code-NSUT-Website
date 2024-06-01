import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type RoadmapProps = {
  title: string;
  content: string;
  childern: {
    title: string;
    content: string;
    link: string;
  }[];
};

export default function Roadmap({ data }: { data: RoadmapProps[] }) {
  return (
    <Accordion
      type="multiple"
      className={cn(
        "w-full"
        // "bg-secondary p-4 md:p-8 rounded-lg shadow-md ring-1 ring-secondary-foreground/20"
      )}
    >
      {data.map((roadmap: RoadmapProps, index) => (
        <AccordionItem
          key={roadmap.title.replace(/\s/g, "")}
          value={roadmap.title.replace(/\s/g, "")}
        >
          <AccordionTrigger className="hover:no-underline mt-2 p-4 md:p-4 rounded-lg bg-secondary-foreground/10 hover:bg-secondary-foreground/20">
            <div className="flex flex-col justify-start items-baseline text-left">
              <h2 className="text-xl font-bold">{roadmap.title}</h2>
              <p className="text-gray-600 mt-2">{roadmap.content}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="mt-3 md:mt-4 px-4">
              {roadmap.childern.map((child, index) => (
                <li
                  key={index}
                  className="mb-2 sm:mb-2 bg-secondary-foreground/10 p-4 md:p-4 rounded-lg hover:bg-secondary-foreground/20"
                >
                  <a href={child.link} target="_blank" rel="noreferrer">
                    <h3 className="text-lg font-bold">{child.title}</h3>
                    <p className="text-foreround/80">{child.content}</p>
                  </a>
                  <a
                    href={child.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
