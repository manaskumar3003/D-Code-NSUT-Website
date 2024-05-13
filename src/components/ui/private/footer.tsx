import Image from "next/image";


export default function Footer() {
    return (
        <>
            <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
      
      <p className="my-6 text-gray-500 dark:text-gray-400">NSUT Tech society</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
          </li>
          <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6">About</a>
          </li>
          <li>
              <a href="/event" className="mr-4 hover:underline md:mr-6 ">Events</a>
          </li>
          <li>
              <a href="/blog" className="mr-4 hover:underline md:mr-6">Blogs</a>
          </li>
          <li>
              <a href="/roadmap" className="mr-4 hover:underline md:mr-6">Roadmap</a>
          </li>
          <li>
              <a href="/faq" className="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
              <a href="/contact" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024-2025 <a href="#" className="hover:underline">D'code</a>. All Rights Reserved under NSUT.</span>
  </div>
</footer>
</>
    );
}