import Hero from "@/components/hero";
import Sidebar from "../components/sidebar";
import ProductGrid from "@/components/product-grid";
import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer/app";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
    <header className="shadow-sm flex items-center border-b top-0 z-30">
        <Sidebar />
    </header>
    <Hero />
    <AboutUs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <h2 className="text-3xl font-bold mb-4 font-extrabold text-black">LOREM IPSUM</h2>
        <span className="text-gray-600 text-lg mb-8 block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <ProductGrid />
      </div>
      <Footer />
    </main>
  );
}