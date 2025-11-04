import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>

      <div className="relative z-10 py-24 px-6 mx-auto max-w-screen-xl text-center lg:py-40">
        <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">
          Koleksi Buku Terbaik
        </p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg">
          Temukan Buku Impianmu di <span className="text-indigo-400">BookStore</span>
        </h1>

        {/* Deskripsi */}
        <p className="mb-10 text-lg font-light text-gray-200 max-w-2xl mx-auto">
          Jelajahi ribuan buku dari berbagai genre. Dapatkan pengalaman membaca yang menginspirasi dan harga yang bersahabat.
        </p>

        
        <div className="flex justify-center gap-4">
          <Link
            to="/books"
            className="text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-base px-8 py-3 shadow-lg hover:scale-105"
          >
            Jelajahi Buku
          </Link>
          <Link
            to="/about"
            className="text-indigo-600 bg-white hover:bg-gray-100 transition-all duration-300 font-medium rounded-full text-base px-8 py-3 shadow-lg hover:scale-105"
          >
            Tentang Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
