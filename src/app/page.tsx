import Footer from "@/components/ui/private/footer";
import Navbar from "@/components/ui/private/navbar";

export default function Home() {
  return (
    <main className="dark">
      <Navbar />
      <div className="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-900 dark:text-white/75 my-8">
            D&#39;Code NSUT
          </h1>

          <p className="text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl dark:text-gray-700">
            Coming Soon
          </p>

          <a
            href="https://www.instagram.com/dcode_nsut/"
            className="mt-6 px-8 inline-block rounded bg-gray-600/50 py-3 text-sm font-medium text-white hover:bg-gray-700/90 focus:outline-none focus:ring"
          >
            Join Us
          </a>
        </div>
        
      </div>
      <Footer />
    </main>
  );
}
