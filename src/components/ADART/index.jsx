import React from 'react';

export default function ADART() {
  return (
    <section
      id="ad-art"
      className="min-h-screen md:mx-8 flex flex-col justify-center bg-white pt-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">AD / ART</h2>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Anggaran Dasar (AD)</h3>
          <p className="text-gray-700 mb-4">
            Anggaran Dasar adalah dokumen yang memuat ketentuan-ketentuan dasar
            yang mengatur organisasi, termasuk tujuan, visi, misi, dan struktur
            organisasi.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Tujuan Organisasi</li>
            <li>Visi dan Misi</li>
            <li>Struktur Organisasi</li>
            <li>Hak dan Kewajiban Anggota</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">
            Anggaran Rumah Tangga (ART)
          </h3>
          <p className="text-gray-700 mb-4">
            Anggaran Rumah Tangga adalah dokumen yang memuat ketentuan-ketentuan
            lebih rinci mengenai pelaksanaan Anggaran Dasar, termasuk tata cara
            rapat, pemilihan pengurus, dan lain-lain.
          </p>
          <ul className="list-disc pl-6">
            <li>Tata Cara Rapat</li>
            <li>Pemilihan Pengurus</li>
            <li>Keuangan dan Anggaran</li>
            <li>Prosedur Disiplin</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
