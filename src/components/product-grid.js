import productData from '../private/data-product.json';
import { Heart, Filter, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function ProductGrid(){
    const formatRupiah = (nominal)=>{
        return new Intl.NumberFormat("id-ID",{
            style:"currency",
            currency:"IDR",
            minimumFractionDigits:0
        }).format(nominal);
    };

    return (
        <div className='w-full'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 '>
                
                {/* 1. Tambahkan parameter 'index' di sini */}
                {productData.map((product, index)=> (
                    
                    <Link 
                        key={product.id} 
                        href={`/produk/${product.id}`} 
                        // 2. Logika penyembunyian: Jika urutan ke-4 (index 3) ke atas, sembunyikan di HP (hidden) tapi tampilkan di Laptop (md:flex)
                        className={`group cursor-pointer flex-col shadow-sm rounded-sm p-2 hover:shadow-md transition-shadow ${
                            index >= 6 ? 'hidden md:flex' : 'flex'
                        }`}
                    >
                        <div className='relative aspect-[4/5] bg-gray-50 mb-4 overflow-hidden rounded-lg'>
                            <img 
                                src={product.images[0]} 
                                alt={product.name} 
                                className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        <h3 className='text-sm lg:text-sm text-gray-600 mb-4 line-clamp-2'>{product.name}</h3>
                        <p className='text-sm lg:text-sm text-red-600 mb-4 font-bold mt-auto'>
                            {formatRupiah(product.price)}
                        </p>
                    </Link>
                    
                ))}

            </div>
        </div>
    )
}