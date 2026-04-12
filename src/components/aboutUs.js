"use client"; // <-- Tambahkan baris ini di paling atas!

import { Award, Users, Clock, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const features = [
    {
      icon: <ThumbsUp className="w-6 h-6 text-red-500" />,
      title: "Kualitas Premium",
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Tepat Waktu",
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Tim Berpengalaman",
    },
    {
      icon: <Award className="w-6 h-6 text-red-500" />,
      title: "Harga Kompetitif",
     
    }
  ];

  return (
    <section id="tentang-kami" className="py-16 lg:py-24 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Posisi awal: tembus pandang & geser ke kiri 50px
            whileInView={{ opacity: 1, x: 0 }} // Saat terlihat: muncul & kembali ke posisi asli
            transition={{ duration: 0.8, ease: "easeOut" }} // Durasi animasi 0.8 detik
            viewport={{ once: true, margin: "-100px" }} // Animasi jalan 1x saja saat elemen masuk layar 100px
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              LOREM IPSUM<br/> 
              <span className="text-gray-600">LOREM</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 bg-red-50 rounded-lg h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">{feature.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BAGIAN KANAN: Gambar (Animasi masuk dari kanan) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Posisi awal: tembus pandang & geser ke kanan 50px
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // delay 0.2 detik agar masuknya bergantian dengan teks
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Gambar Utama */}
            <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2070&auto=format&fit=crop" 
                alt="Proses Menjahit di Konveksi" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-red-500/20 rounded-2xl z-0 hidden sm:block"></div>
            <div className="absolute -bottom-8 -left-6 lg:-left-8 lg:p-4 sm:bottom-8 sm:-left-12 bg-white p-2 rounded-xl shadow-xl z-14 border border-gray-100 flex items-center gap-6 animate-bounce-slow">
              <div className="bg-red-100 p-3 rounded-full text-red-600">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="lg:text-2xl text-xl font-extrabold text-gray-900">500+</p>
                <p className="text-sm text-gray-500 font-medium">Klien Percaya</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}