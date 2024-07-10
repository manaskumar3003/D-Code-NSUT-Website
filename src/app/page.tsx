import AlumniCarousel from "@/components/ui/private/home/AlumniCarousel";
import Roles_home from "@/components/ui/private/home/Roles_home";
import WallOfWidom from "@/components/ui/private/home/WallOfWidom";
import Card_section from "@/components/ui/private/home/card_section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="light pt-3 flex flex-col gap-20">
      <div className="container px-6 sm:px-8 lg:px-10 ">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="flex flex-col justify-center w-full h-full">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Competitive society of NSUT{" "}
              <span className="text-blue-600">D&apos;code</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              Batch of 2024-2025
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Starting soon
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5"></div>
          </div>

          <div className="relative ms-4">
            <Image
              className="w-full rounded-md"
              src="/group.jpeg"
              alt="Image Description"
              width={1440}
              height={960}
              unoptimized
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

          </div>
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-12">
        <WallOfWidom />
      </div>

      <div className="px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-3">
          <div className="flex flex-col items-center lg:items-start lg:gap-1">
            <div className="flex lg:flex-col gap-2 md:gap-3">
              <h1 className="text-4xl sm:text-5xl xl:text-7xl font-semibold">Our</h1>
              <h1 className="text-4xl sm:text-5xl xl:text-7xl font-semibold">Departments</h1>
            </div>
            <blockquote className="text-lg xl:text-xl mt-4 xl:pl-4 italic">&quot;Dedicated teams, diverse expertise.&quot;</blockquote>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 lg:gap-6 xl:gap-8 items-center">
            <a href="/team">
              <Card_section
                title="CP"
                contents="Sharpen your problem-solving skills with coding challenges and algorithmic puzzles. Compete and collaborate with fellow enthusiasts."
              />
            </a>
            <a href="/team">
              <Card_section
                title="Web Dev"
                contents="Learn HTML, CSS, JavaScript, and modern frameworks. Build responsive websites and applications, and collaborate on real-world projects."
              />
            </a>
            <a href="/team">
              <Card_section
                title="AI & ML"
                contents="Discover neural networks, data processing, and predictive analytics. Engage in projects, competitions, and workshops to boost your skill."
              />
            </a>
            <a href="/team">
              <Card_section
                title="Content & Design"
                contents="Master graphic design, UI/UX principles, and content strategy. Create compelling content and designs to build a standout portfolio."
              />
            </a>
          </div>
        </div>
      </div>

      <Roles_home />

      <div className="px-16">
        <AlumniCarousel />
      </div>

      <div className="mx-auto px-3 md:px-5 max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">

        <div className="text-5xl font-semibold pb-10 text-center"><a className="hover:underline hover:underline-offset-3" href="\event">Events</a></div>

        <div className="grid grid-cols-6 gap-2">
          <div className=" overflow-hidden rounded-xl col-span-6 sm:col-span-3 max-h-60 sm:max-h-80">
            <img className="h-full w-full object-cover "
              src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt="" />
          </div>
          <div className=" overflow-hidden rounded-xl col-span-6 sm:col-span-3 max-h-60 sm:max-h-80">
            <img className="h-full w-full object-cover  "
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
              alt="" />
          </div>
          <div className=" overflow-hidden rounded-xl col-span-2 max-h-52">
            <img className="h-full w-full object-cover "
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="" />
          </div>
          <div className=" overflow-hidden rounded-xl col-span-2 max-h-52">
            <img className="h-full w-full object-cover "
              src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="" />
          </div>
          <div className=" overflow-hidden rounded-xl col-span-2 max-h-52">
            <img className="h-full w-full object-cover "
              src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="" />
          </div>
        </div>
      </div>

    </main>
  );
}
