"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import productData from "../../../private/data-product.json";
import { MessageCircle, ArrowLeft, ChevronRight, ChevronLeft, ShieldCheck, Truck, Clock } from "lucide-react";
import Sidebar from "../../../components/sidebar";
import Link from "next/link";

export default function DetailProduk() {
  const params = useParams();
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const produk = productData.find((p) => p.id.toString() === params.id);

  if (!produk) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h2>
        <button onClick={() => router.push("/")} className="text-red-600 flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Kembali ke Katalog
        </button>
      </div>
    );
  }

  const formatRupiah = (nominal) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(nominal);
  };

  const pesanWA = `Halo STR DESIGN, saya tertarik untuk memesan produk: ${produk.name} (ID: ${produk.id})`;
  const linkWA = `https://wa.me/6281234567890?text=${encodeURIComponent(pesanWA)}`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === produk.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? produk.images.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-white flex items-center border-b sticky top-0 z-30 shadow-sm">
        <Sidebar />
        <Link href="/" className="text-lg font-bold ml-2 text-red-600 uppercase">STR DESIGN</Link>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 uppercase tracking-widest">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-medium truncate">{produk.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          <div className="flex flex-col gap-4">
            
            {/* PERBAIKAN: TEKNIK TUMPUKAN KARTU (Stacked Images) */}
            <div className="relative aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden shadow-inner border border-gray-100 group">
              
              {/* Render semua gambar sekaligus dan tumpuk dengan posisi absolute */}
              {produk.images.map((imgUrl, index) => (
                <img 
                  key={index}
                  src={imgUrl} 
                  alt={`${produk.name} - Angle ${index + 1}`} 
                  // Jika ini gambar aktif, buat opacity-100. Jika bukan, opacity-0.
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    currentImageIndex === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                />
              ))}
              
              {/* Tombol Panah */}
              {produk.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute z-20 left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute z-20 right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Kecil */}
            {produk.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {produk.images.map((imgUrl, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-20 h-24 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                      currentImageIndex === index ? "border-red-500 opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase">
              {produk.name}
            </h1>
            <p className="text-2xl lg:text-3xl font-black text-red-600 mb-8">
              {formatRupiah(produk.price)}
            </p>

            <div className="border-t border-b border-gray-100 py-6 mb-8">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Detail Produk</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Produk konveksi unggulan STR DESIGN dengan kualitas jahitan standar garment. 
                Cocok untuk kebutuhan komunitas, instansi, maupun penggunaan harian. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-600"><ShieldCheck className="w-5 h-5 text-green-500" /> Garansi Kualitas</div>
                <div className="flex items-center gap-3 text-sm text-gray-600"><Truck className="w-5 h-5 text-blue-500" /> Kirim Seluruh Indonesia</div>
                <div className="flex items-center gap-3 text-sm text-gray-600"><Clock className="w-5 h-5 text-orange-500" /> Pengerjaan 7-14 Hari</div>
              </div>
            </div>

            <div className="mt-auto space-y-4">
              <a href={linkWA} target="_blank" rel="noopener noreferrer" className="w-full bg-gray-900 text-white flex items-center justify-center gap-3 py-4 rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg">
                <MessageCircle className="w-6 h-6" /> PESAN VIA WHATSAPP
              </a>
              <Link href="/" className="w-full flex items-center justify-center gap-2 py-4 text-gray-500 font-medium hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5" /> KEMBALI KE KATALOG
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}