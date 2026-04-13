"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import productData from "../../../private/data-product.json";
// Tambahkan ikon Loader2 untuk animasi berputar
import { MessageCircle, ArrowLeft, ChevronRight, ChevronLeft, ShieldCheck, Truck, Clock, Loader2 } from "lucide-react";
import Sidebar from "../../../components/sidebar";
import Link from "next/link";
import FooterMain from "@/components/foot-main/app";

export default function DetailProduk() {
  const params = useParams();
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCustom, setIsCustom] = useState(false);
  const [customNote, setCustomNote] = useState("");
  
  // STATE BARU: Untuk melacak apakah tombol sedang loading
  const [isLoading, setIsLoading] = useState(false);

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

  const catatanTambahan = isCustom && customNote.trim() !== "" ? `\n\n*Catatan Custom:*\n${customNote}` : "";
  const tipePesanan = isCustom ? "CUSTOM" : "STANDAR";
  
  const pesanWA = `Halo STR DESIGN, saya tertarik untuk memesan produk:\n\n*${produk.name.toUpperCase()}*\n*Tipe Pesanan:* ${tipePesanan}${catatanTambahan}`;
  const linkWA = `https://wa.me/6285755984218?text=${encodeURIComponent(pesanWA)}`;

  const nextImage = () => setCurrentImageIndex((prev) => (prev === produk.images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? produk.images.length - 1 : prev - 1));

  // FUNGSI BARU: Menangani klik tombol kembali
  const handleKembaliKatalog = () => {
    setIsLoading(true); // Nyalakan animasi loading
    router.push("/katalog"); // Arahkan ke halaman katalog
  };

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-white flex items-center border-b sticky top-0 z-30 shadow-sm">
        <Sidebar />
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 uppercase tracking-widest">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-medium truncate">{produk.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden shadow-inner border border-gray-100 group">
              {produk.images.map((imgUrl, index) => (
                <img 
                  key={index}
                  src={imgUrl} 
                  alt={`${produk.name} - Angle ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    currentImageIndex === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                />
              ))}
              
              {produk.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute z-20 left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute z-20 right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

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
            <p className="text-2xl lg:text-3xl font-black text-red-600 mb-6">
              {formatRupiah(produk.price)}
            </p>

            <div className="border-t border-b border-gray-100 py-6 mb-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Detail Produk</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Produk konveksi unggulan STR DESIGN dengan kualitas jahitan standar garment. 
                Cocok untuk kebutuhan komunitas, instansi, maupun penggunaan harian. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-600"><ShieldCheck className="w-5 h-5 text-green-500" /> Garansi Kualitas</div>
                <div className="flex items-center gap-3 text-sm text-gray-600"><Truck className="w-5 h-5 text-blue-500" /> Kirim Seluruh Indonesia</div>
              </div>
            </div>

            <div className="mb-8 rounded-xl">
              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Tipe Pesanan</h3>
              
              <div className="flex gap-4 mb-4">
                <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${!isCustom ? 'border-red-600 bg-red-50 text-red-700 font-bold' : 'border-gray-200 bg-white text-gray-600 hover:border-red-200'}`}>
                  <input 
                    type="radio" 
                    name="orderType" 
                    className="hidden" 
                    checked={!isCustom} 
                    onChange={() => setIsCustom(false)} 
                  />
                  Sesuai Gambar
                </label>
                
                <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${isCustom ? 'border-red-600 bg-red-50 text-red-700 font-bold' : 'border-gray-200 bg-white text-gray-600 hover:border-red-200'}`}>
                  <input 
                    type="radio" 
                    name="orderType" 
                    className="hidden" 
                    checked={isCustom} 
                    onChange={() => setIsCustom(true)} 
                  />
                  Custom Desain
                </label>
              </div>

              {isCustom && (
                <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label htmlFor="customNote" className="block text-sm text-black mb-2">
                    Tulis detail custom Anda (Warna, Tambah Nama, Ubah Lengan, dll):
                  </label>
                  <textarea 
                    id="customNote"
                    rows="3"
                    className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-sm"
                    placeholder="Contoh: Saya mau bajunya warna Navy, lalu di dada kiri ada tambahan tulisan 'Panitia'..."
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                  ></textarea>
                </div>
              )}
            </div>

            <div className="mt-auto space-y-4">
              <a 
                href={isCustom && customNote.trim() === "" ? "#" : linkWA} 
                target={isCustom && customNote.trim() === "" ? "_self" : "_blank"} 
                rel="noopener noreferrer" 
                onClick={(e) => {
                  if (isCustom && customNote.trim() === "") {
                    e.preventDefault();
                    alert("Mohon isi detail custom Anda terlebih dahulu di kotak yang disediakan.");
                  }
                }}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold transition-all shadow-lg ${
                  isCustom && customNote.trim() === "" 
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                  : "bg-gray-900 text-white hover:bg-red-600"
                }`}
              >
                <MessageCircle className="w-6 h-6" /> PESAN VIA WHATSAPP
              </a>

              {/* PERUBAHAN: Tombol Kembali ke Katalog dengan Animasi Loading */}
              <button 
                onClick={handleKembaliKatalog}
                disabled={isLoading} // Nonaktifkan tombol saat sedang loading
                className={`w-full flex items-center justify-center gap-2 py-4 font-medium transition-colors ${
                  isLoading ? "text-red-600 cursor-not-allowed" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sedang Memuat...
                  </>
                ) : (
                  <>
                    <ArrowLeft className="w-5 h-5" /> KEMBALI KE KATALOG
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    <FooterMain/>
    </main>
  );
}