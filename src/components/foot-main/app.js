export default function FooterMain() {
  return (
    <footer className="bg-[#111625] text-gray-300 py-2 mt-2">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mb-4">
        <div className="mt-4 border-t border-gray-800/50 text-center text-gray-500 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} STR DESIGN. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}