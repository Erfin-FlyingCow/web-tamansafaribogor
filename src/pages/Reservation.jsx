// import Mimage from "../Component/Mimage"

// const Reservation = () => {
//     //tes sementara ini
//     return(
//         <Mimage />
//     )
// }
// export default Reservation;

// import React, { useState } from 'react';

// function Reservation() {
//   const [nama, setNama] = useState('');
//   const [email, setEmail] = useState('');
//   const [notelp, setNoTelp] = useState('');
//   const [jumlahOrang, setJumlahOrang] = useState('');
//   const [tanggalReservasi, setTanggalReservasi] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     alert('Reservasi Berhasil dilakukan');

//     // Mengosongkan nilai-nilai input setelah submit
//     setNama('');
//     setEmail('');
//     setNoTelp('');
//     setJumlahOrang('');
//     setTanggalReservasi('');
//   };

//   const handleReset = () => {
//     setNama('');
//     setEmail('');
//     setNoTelp('');
//     setJumlahOrang('');
//     setTanggalReservasi('');
//   };

//   return (
//     <div>
//       <h1>Form Reservasi Kunjungan Taman Safari</h1>

//       <form onSubmit={handleSubmit}>
//         <label for="nama">Nama:</label>
//         <input type="text" id="nama" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} required /><br /><br />

//         <label for="email">Email:</label>
//         <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

//         <label for="notelp">No. Telepon:</label>
//         <input type="tel" id="notelp" name="notelp" value={notelp} onChange={(e) => setNoTelp(e.target.value)} required /><br /><br />

//         <label for="jumlahOrang">Jumlah Orang:</label>
//         <input type="number" id="jumlahOrang" name="jumlahOrang" value={jumlahOrang} onChange={(e) => setJumlahOrang(e.target.value)} required /><br /><br />

//         <label for="tanggalReservasi">Tanggal Reservasi:</label>
//         <input type="date" id="tanggalReservasi" name="tanggalReservasi" value={tanggalReservasi} onChange={(e) => setTanggalReservasi(e.target.value)} required /><br /><br />

//         <button type="reset" onClick={handleReset}>Reset</button>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Reservation;


import React, { useState } from 'react';

function Reservation() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [notelp, setNoTelp] = useState('');
    const [jumlahOrang, setJumlahOrang] = useState('');
    const [tanggalReservasi, setTanggalReservasi] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Reservasi Berhasil dilakukan');


        // Mengosongkan nilai-nilai input setelah submit
        setNama('');
        setEmail('');
        setNoTelp('');
        setJumlahOrang('');
        setTanggalReservasi('');
    };

    const handleReset = () => {
        setNama('');
        setEmail('');
        setNoTelp('');
        setJumlahOrang('');
        setTanggalReservasi('');
    };

    return (
        <div className="my-6 max-w-2xl mx-auto p-8 rounded-md shadow-2xl bg">
            <h1 className="text-2xl font-bold mb-4">Form Reservasi Kunjungan Taman Safari</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nama" className="block font-bold mb-2">Nama:</label>
                    <input 
                        placeholder='nama lengkap'
                        type="text"
                        id="nama"
                        name="nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-2">Email:</label>
                    <input
                        placeholder=''
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="notelp" className="block font-bold mb-2">No. Telepon:</label>
                    <input
                        type="tel"
                        id="notelp"
                        name="notelp"
                        value={notelp}
                        onChange={(e) => setNoTelp(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="jumlahOrang" className="block font-bold mb-2">Jumlah Orang:</label>
                    <input
                        type="number"
                        id="jumlahOrang"
                        name="jumlahOrang"
                        value={jumlahOrang}
                        onChange={(e) => setJumlahOrang(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="tanggalReservasi" className="block font-bold mb-2">Tanggal Reservasi:</label>
                    <input
                        type="date"
                        id="tanggalReservasi"
                        name="tanggalReservasi"
                        value={tanggalReservasi}
                        onChange={(e) => setTanggalReservasi(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex justify-between">
                    <button
                        type="reset"
                        onClick={handleReset}
                        className="px-4 py-2 bg-gray-300 text-white rounded hover:bg-gray-400"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
  );
}

export default Reservation;
