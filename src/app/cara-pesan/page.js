"use client";

import { MessageSquare, FileSignature, Scissors, Truck } from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "@/components/sidebar";
import FooterMain from "@/components/foot-main/app";

export default function HowToOrder() {
  const steps = [
    {
      id: "01",
      title: "Konsultasi & Desain",
      description: "Hubungi admin kami via WhatsApp. Diskusikan desain, jenis bahan, jumlah pesanan, dan target waktu selesainya.",
      icon: <MessageSquare className="w-8 h-8 text-red-600" />
    },
    {
      id: "02",
      title: "Kesepakatan & DP",
      description: "Kami akan berikan invoice detail. Lakukan pembayaran Down Payment (DP) minimal 50% agar pesanan masuk antrean.",
      icon: <FileSignature className="w-8 h-8 text-red-600" />
    },
    {
      id: "03",
      title: "Proses Produksi",
      description: "Pesanan Anda mulai dipotong, disablon/bordir, dan dijahit oleh tim ahli kami dengan standar quality control yang ketat.",
      icon: <Scissors className="w-8 h-8 text-red-600" />
    },
    {
      id: "04",
      title: "Pelunasan & Kirim",
      description: "Setelah barang jadi, kami akan kirimkan foto hasil produksi. Lakukan pelunasan, dan barang siap dikirim ke alamat Anda!",
      icon: <Truck className="w-8 h-8 text-red-600" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Mulai dari bawah dan tembus pandang
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } // Meluncur ke atas
  };

  return (
    <>
    <Sidebar />
    <section id="cara-pesan" className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w mx-auto">
        
        {/* Judul Bagian */}
        <div className="text-start mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Cara <span className="text-red-600">Pemesanan</span>
          </h2>
          <p className="text-black max-w-2xl text-md text-start">
            Hanya butuh 4 langkah untuk melakukan pemesanan.
          </p>
        </div>

        {/* Grid Langkah-langkah dengan Animasi */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 group overflow-hidden"
            >
              {/* Angka Latar Belakang (Transparan/Besar) */}
              <span className="absolute -top-4 -right-2 text-8xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300 pointer-events-none">
                {step.id}
              </span>

              {/* Ikon */}
              <div className="relative z-10 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Teks */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tombol Aksi di Bawah (Call to Action) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
            <a 
                href="https://wa.me/6285755984218" // Ganti dengan nomor WA konveksi Anda (gunakan format 62...)
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300 shadow-lg"
            >
                Mulai Pesan Sekarang
                <MessageSquare className="w-5 h-5" />
            </a>
        </motion.div>

      </div>
    </section>
    <FooterMain/>

    </>
    
  );
}