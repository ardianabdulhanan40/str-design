"use client";
import productData from '../../private/data-product.json';
import Link from 'next/link';
import Sidebar from '@/components/sidebar';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import FooterMain from '@/components/foot-main/app';
export default function Katalog(){
    const [currentPage, setCurrentPage]= useState(1);
    const itemPerPage = 8;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = productData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(productData.length / itemPerPage);

    const formatRupiah = (nominal)=>{
        return new Intl.NumberFormat("id-ID",{
            style:"currency",
            currency:"IDR",
            minimumFractionDigits:0
        }).format(nominal);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
        <Sidebar/>
        <div className='max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen'>
            
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 uppercase tracking-widest">
                <Link href="/" className="hover:text-red-600">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-gray-800 font-medium truncate">Katalog</span>
            </nav>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
                
                {currentItems.map((product)=> (
                    <Link 
                        key={product.id} 
                        href={`/produk/${product.id}`} 
                        className={'group bg-white cursor-pointer flex flex-col shadow-sm rounded-xl p-3 border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300'}
                    >
                        <div className='relative aspect-[4/5] bg-gray-50 mb-4 overflow-hidden rounded-lg'>
                            <img 
                                src={product.images[0]} 
                                alt={product.name} 
                                className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        <h3 className='text-sm lg:text-sm text-gray-600 mb-4 line-clamp-2'>{product.name}</h3>
                        <p className='text-sm lg:text-sm text-red-600 mb-2 font-bold mt-auto'>
                            {formatRupiah(product.price)}
                        </p>
                    </Link>
                ))}

            </div>

            {/* 4. KONTROL NAVIGASI PAGINATION */}
            {totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-8">
                    <span className="text-sm text-gray-500 mb-4 sm:mb-0">
                        Menampilkan <span className="font-bold text-gray-900">{indexOfFirstItem + 1}</span> - <span className="font-bold text-gray-900">{Math.min(indexOfLastItem, productData.length)}</span> dari <span className="font-bold text-gray-900">{productData.length}</span> produk
                    </span>

                    <div className="flex items-center gap-2">
                        {/* Tombol Sebelumnya */}
                        <button 
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                                currentPage === 1 
                                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" 
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            }`}
                        >
                            <ChevronLeft className="w-4 h-4" /> Prev
                        </button>

                        {/* Indikator Halaman */}
                        <div className="px-4 py-2 text-sm font-bold text-gray-900">
                            {currentPage} / {totalPages}
                        </div>

                        <button 
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                                currentPage === totalPages 
                                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" 
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            }`}
                        >
                            Next <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
        <FooterMain/>
        </>
    )
}