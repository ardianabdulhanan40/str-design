"use client";
import FooterMain from "@/components/foot-main/app";
import Sidebar from "@/components/sidebar";

export default function PanduanUkuran() {
    return (
        <>
        <Sidebar/>
        <div className="min-h-screen bg-white p-6 md:p-12">
            
            {/* Bagian Judul: Hapus 'mx-auto' agar rata kiri */}
            <div className="max-w border-b-2 border-red-600 pb-2 mb-4">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                    Panduan Ukuran
                </h1>
            </div>
            <p className="text-black font-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="max-w lg:max-w-12xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="relative group overflow-hidden rounded-xl shadow-xl border border-gray-200">
                    <img 
                        src="https://3second.co.id/images/support/standar-3second-2-ladies.webp" 
                        alt="Tabel Panduan Ukuran Ladies" 
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-xl border border-gray-200">
                    <img 
                        src="https://3second.co.id/images/support/3second-t-shirt.webp" 
                        alt="Tabel Panduan Ukuran T-shirt" 
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-xl border border-gray-200">
                    <img 
                        src="https://3second.co.id/images/support/3second-t-shirt.webp" 
                        alt="Tabel Panduan Ukuran T-shirt" 
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Catatan Tambahan: Hapus 'mx-auto' dan 'text-center' */}
            <div className="max-w-4xl mt-6 text-gray-500 text-sm italic text-left">
                * Ukuran dalam centimeter (cm).
            </div>
        </div>
        <FooterMain/>

    </>
    )    
}