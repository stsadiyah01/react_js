export default function TestimoniSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Testimoni Pelanggan
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Testimoni 1 */}
          <div className="p-6 bg-gray-50 rounded-2xl shadow dark:bg-gray-800">
            <div className="flex items-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Avatar"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Sarah Ann
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mahasiswi
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              “Buku-bukunya lengkap banget dan pengirimannya cepat! Saya suka
              pelayanan toko ini.”
            </p>
          </div>

          {/* Testimoni 2 */}
          <div className="p-6 bg-gray-50 rounded-2xl shadow dark:bg-gray-800">
            <div className="flex items-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Avatar"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Rizky Ahmad
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Karyawan Swasta
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              “Tampilan websitenya keren dan mudah digunakan. Bakal jadi
              langganan deh!”
            </p>
          </div>

          {/* Testimoni 3 */}
          <div className="p-6 bg-gray-50 rounded-2xl shadow dark:bg-gray-800">
            <div className="flex items-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Avatar"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Aulia Fadilah
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Guru</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              “Harga bukunya terjangkau dan kualitasnya bagus banget.
              Recommended!”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
