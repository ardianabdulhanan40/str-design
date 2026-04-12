import { MessageCircle, ArrowDown, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gray-900 w-full overflow-hidden">
      
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop" 
          alt="Latar Belakang Konveksi" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center z-10">
        
        <span className="text-red-500 bg-white-500/10 border border-red-500 px-8 py-1.5 rounded-full text-sm font-medium mb-8 tracking-wide">
          # PUSAT KONVEKSI TERPERCAYA
        </span>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Pusat Produksi Pakaian & Desain <br className="hidden md:block" />
          <span className="text-red-500">Berkualitas</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-16 text-sm text-gray-300 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" /> Jahitan Super Rapi
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" /> Tepat Waktu
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" /> Gratis Konsultasi Desain
          </div>
        </div>

      </div>
    </div>
  );
}