"use client";

import { useState } from "react";
import Link from "next/link"; 
import { Menu, X, ChevronRight, Flame } from "lucide-react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const listMenu = [
        { label: "Beranda", href: "/", hasArrow: false },
        { label: "Katalog Produk", href: "/katalog", hasArrow: true, icon: <Flame className="w-5 h-5 text-red-500" /> },
        { label: "Jasa Desain", href: "/jasa-desain", hasArrow: false },
        { label: "Panduan Ukuran", href: "/panduan-ukuran", hasArrow: false },
        { label: "Cara Pesan", href: "/cara-pesan", hasArrow: false },
    ];

    return (
        <>
            <div className="w-full flex items-center p-4 bg-white shadow-sm border-b">
                <button 
                    onClick={() => setIsOpen(true)}
                    className="p-2 mr-3 rounded-md focus:outline-none hover:bg-gray-100 transition-colors"
                    aria-label="Buka Menu"
                >
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>
                <h1 className="text-lg font-extrabold text-red-600 tracking-wider">STR DESIGN</h1>
            </div>

            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40" 
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div 
                className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex-1 flex justify-center">
                        {/* Mengubah placeholder LOGO dengan nama brand agar konsisten */}
                        <span className="text-xl font-bold text-red-600 tracking-wide">STR DESIGN</span>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
                    >
                        <X className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                <div className="flex flex-col overflow-y-auto h-[calc(100%-73px)] pb-20">
                    {listMenu.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.href}
                            className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                            onClick={() => setIsOpen(false)} 
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800 font-medium">{item.label}</span>
                                {item.icon}
                            </div>
                            {item.hasArrow && (
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}