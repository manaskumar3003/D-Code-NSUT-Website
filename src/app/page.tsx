import Footer from "@/components/ui/private/footer";
import Roles_home from "@/components/ui/private/home/Roles_home";
import Card_section from "@/components/ui/private/home/card_section";
import Card_section2 from "@/components/ui/private/home/card_section";
import Teams_home from "@/components/ui/private/home/Alumni_home";
import Navbar from "@/components/ui/private/navbar";
import Alumni_home from "@/components/ui/private/home/Alumni_home";

export default function Home() {
  return (
    <main className="light">
      

<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Competitive society of Nsut <span className="text-blue-600">D'code</span></h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Batch of 2024-2025</p>


      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Starting soon
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
        <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
          Contact Us
        </a>
      </div>
      

 
      <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">

        
        

        
        

          
      
      </div>
     
    </div>
   

    <div className="relative ms-4">
      <img className="w-full rounded-md" src="https://innohacks.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F319126f9a2eb42cf9392d007ec7ef6da%2Fassets%2Fcover%2F881.png&w=1440&q=100" alt="Image Description" />
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

   
      <div className="absolute bottom-0 start-0">
        <svg className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
          <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
          <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
          <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
          <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
          <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
          <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
          <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
          <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
          <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="64" fill="currentColor"/>
          <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
          <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
          <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
        </svg>
      </div>
  
    </div>

  </div>
  


</div>
<div className="p-20">
<div className="flex flex-row">
<div className="basis-1/4"><Card_section title="AIML" /> </div>
<div className="basis-1/4"><Card_section title="Web Dev" /></div>
<div className="basis-1/4"><Card_section title="CPP" /></div>
<div className="basis-1/4"><Card_section title="Content" /></div>
</div>


<Roles_home />
<Alumni_home/>

</div>



      
    </main>
  );
}
