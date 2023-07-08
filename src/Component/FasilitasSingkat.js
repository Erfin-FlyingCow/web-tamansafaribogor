
import React from 'react';
import { Link } from 'react-router-dom';


export default function FasilitasSingkat() {
  return (
    <div className="bg-white mb-10 text-green-900 hover:text-green-950 text-center font-serif">
      <div className="container mx-auto">
        <div className=" text-2xl font-bold m-6">
          <h1>Fasilitas</h1>
        </div>
        <div className="flex flex-row space-x-20">
          <div className="w-1/3 hover:scale-110 bg-gray-300 hover:bg-gray-400 relative rounded-lg hover:rounded-lg">
            <Link to="/Facility">
              <img
                className="rounded-t-lg"
                src="https://cdn.discordapp.com/attachments/1096614485231423568/1124903651492757616/Screenshot_2023-07-01_131709.png"
                alt="Gambar Fasilitas"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h1 className="p-3">Wisata Hewan</h1>
            </Link>
          </div>


          <div className="w-1/3 hover:scale-110 bg-gray-300 hover:bg-gray-400 relative rounded-lg hover:rounded-lg">
            <Link to="/Facility">
              <img
                className="rounded-t-lg"
                src="https://cdn.discordapp.com/attachments/1096614485231423568/1124934281244966932/wahana_Permainan.png"
                alt="Gambar Fasilitas"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h1 className=" p-3">Wahana Permainan</h1>
            </Link>


          </div>
          <div className="w-1/3 hover:scale-110 bg-gray-300 hover:bg-gray-400 relative rounded-lg hover:rounded-lg">
            <Link to="/Facility">
              <img
                className="rounded-t-lg"
                src="https://cdn.discordapp.com/attachments/1096614485231423568/1124943236348248126/Safari_Lodge.png"
                alt="Gambar Fasilitas"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h1 className="p-3">Hotel</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
