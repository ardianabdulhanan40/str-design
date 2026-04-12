export default function Footer() {
  return (
    <footer className="bg-[#111625] text-gray-300 py-12 mt-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="flex flex-col justify-center space-y-3">
            <h3 className="text-2xl font-bold text-white mb-2">
              Kontak Kami
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Alamat: Chicago, Illinois, Amerika Serikat
            </p>
            
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Telpon: +1 (555) 123-4567
            </p>

            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Email: info@strdesign.com
            </p>
            

            <div className="pt-2">
              <div className="flex space-x-5">
                <a href="https://instagram.com/akun_kamu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
                  </svg>
                </a>

                <a href="https://tiktok.com/@akun_kamu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">TikTok</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5.63 5.63 0 0 1-1.04-.1z"/>
                  </svg>
                </a>

                <a href="https://facebook.com/akun_kamu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957611.3107326438!2d-87.6825462221129!3d41.896541542527906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20Illinois%2C%20Amerika%20Serikat!5e0!3m2!1sid!2sid!4v1775986287289!5m2!1sid!2sid" 
              width="100%" 
              height="280" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor STR DESIGN"
              className="w-full"
            ></iframe>   
          </div>

        </div>

        <div className="mt-4 border-t border-gray-800/50 text-center text-gray-500 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} STR DESIGN. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}