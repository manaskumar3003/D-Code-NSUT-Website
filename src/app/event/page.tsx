import Event_carousel from "@/components/ui/private/events/event_carousel";
import Event_gallery1 from "@/components/ui/private/events/event_gallery1";
import Event_gallery2 from "@/components/ui/private/events/event_gallery2";
import Logo from "@/components/ui/private/includes/Logo";

export default function Event() {
    return (
        <div>
            <Event_carousel />

            <h1 className="mb-4  text-3xl flex justify-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent pr-4 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">OUR PAST</span> EVENTS</h1>



                <Event_gallery1 />
                <Event_gallery2 />
        </div>
    );
}