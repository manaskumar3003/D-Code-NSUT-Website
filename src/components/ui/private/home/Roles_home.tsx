import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Roles_home() {
  return (
    <div>
      <div className="max-w-[85rem] px-8 sm:px-12 md:px-14 lg:px-20 mx-auto">
        <div className="relative p-6 md:p-16">

          <Tabs defaultValue="DSA" className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">

            <div className="lg:col-span-6 lg:col-start-8 lg:order-2">
              <div className="flex flex-col gap-5 justify-center">

                <a href="/roadmap" className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
                  Roadmaps
                </a>

                <TabsList className="flex lg:flex-col sm:px-3 h-full ">

                  <TabsTrigger value="DSA" className="w-full sm:text-lg text-left text-wrap rounded-2xl p-2 md:p-4">
                    <div className="flex flex-col gap-2 m-2">
                      <h1 className="text-center sm:text-left sm:text-xl text-gray-800 dark:text-neutral-200 font-bold">Data Structures & Algorithm</h1>
                      <h1 className="hidden sm:inline text-sm sm:text-base text-gray-800 dark:text-neutral-200">A step-by-step guide to mastering algorithms and data structures, from beginner to advanced levels.</h1>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="WebDev" className="w-full sm:text-lg text-left text-wrap rounded-2xl p-2 md:p-4">
                    <div className="flex flex-col gap-2 m-2">
                      <h1 className="text-center sm:text-left sm:text-xl text-gray-800 dark:text-neutral-200 font-bold">Web Development</h1>
                      <h1 className="hidden sm:inline text-sm sm:text-base text-gray-800 dark:text-neutral-200">Learn to build dynamic and responsive websites with HTML, CSS, JavaScript, and popular frameworks.</h1>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="ML" className="w-full sm:text-lg text-left text-wrap rounded-2xl p-2 md:p-4">
                    <div className="flex flex-col gap-2 m-2">
                      <h1 className="text-center sm:text-left sm:text-xl text-gray-800 dark:text-neutral-200 font-bold">Machine Learning</h1>
                      <h1 className="hidden sm:inline text-sm sm:text-base text-gray-800 dark:text-neutral-200">Understand the fundamentals of machine learning and neural networks, and apply them to real-world problems.</h1>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">

                <TabsContent value="DSA">
                  <Image unoptimized className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://media.licdn.com/dms/image/C5612AQEz0hpmCQQ9xA/article-cover_image-shrink_600_2000/0/1645599766887?e=2147483647&v=beta&t=bofydXF-Sf5Q_t5T8xX0Cz1Yuk4uSLma4sUb61WhogY" alt="Image Description" height={1240} width={987} />
                </TabsContent>
                <TabsContent value="WebDev">
                  <Image unoptimized className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg" alt="Image Description" height={1240} width={987} />
                </TabsContent>
                <TabsContent value="ML">
                  <Image unoptimized className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://editor.analyticsvidhya.com/uploads/70332https___specials-images.forbesimg.com_dam_imageserve_966248982_960x0.jpg" alt="Image Description" height={1240} width={987} />
                </TabsContent>

                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                    <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                    <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                  </svg>
                </div>

              </div>
            </div>

          </Tabs>

          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
          </div>

        </div>
      </div>


    </div>
  );
}