import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

        {/* Judul utama */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Temukan Buku Impianmu
        </h1>

        {/* Deskripsi */}
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Jelajahi ribuan buku bekas dari berbagai genre. Temukan buku favoritmu dengan harga bersahabat!
        </p>

        {/* Call to Action */}
        <div className="flex justify-center">
          <Link
            to="/books"
            className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 focus:outline-none dark:focus:ring-indigo-800"
          >
            Jelajahi Buku
          </Link>
        </div>
      </div>
    </section>
  );
}
