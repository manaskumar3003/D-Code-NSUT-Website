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

                <h1 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
                  Roadmaps
                </h1>

                <TabsList className="flex lg:flex-col sm:px-3 h-full ">

                  <TabsTrigger value="DSA" className="w-full sm:text-lg text-left text-wrap rounded-2xl p-2 md:p-4">
                    <div className="flex flex-col gap-2 m-2">
                      <h1 className="text-center sm:text-left sm:text-xl text-gray-800 dark:text-neutral-200 font-bold">Data Structures & Algorithm</h1>
                      <h1 className="hidden sm:inline text-sm sm:text-base text-gray-800 dark:text-neutral-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ullam!</h1>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="WebDev" className="w-full sm:text-lg text-left text-wrap rounded-2xl p-2 md:p-4">
                    <div className="flex flex-col gap-2 m-2">
                      <h1 className="text-center sm:text-left sm:text-xl text-gray-800 dark:text-neutral-200 font-bold">Web Development</h1>
                      <h1 className="hidden sm:inline text-sm sm:text-base text-gray-800 dark:text-neutral-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, reprehenderit!</h1>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="ML" className="w-full sm:text-lg text-left text-wrap rounded-2xl p-2 md:p-4">
                    <div className="flex flex-col gap-2 m-2">
                      <h1 className="text-center sm:text-left sm:text-xl text-gray-800 dark:text-neutral-200 font-bold">Machine Learning</h1>
                      <h1 className="hidden sm:inline text-sm sm:text-base text-gray-800 dark:text-neutral-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sapiente.</h1>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">

                <TabsContent value="DSA">
                  <Image unoptimized className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" height={1240} width={987} />
                </TabsContent>
                <TabsContent value="WebDev">
                  <Image unoptimized className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" height={1240} width={987} />
                </TabsContent>
                <TabsContent value="ML">
                  <Image unoptimized className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" height={1240} width={987} />
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