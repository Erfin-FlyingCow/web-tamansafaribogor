import React, { useState, useEffect } from "react";

export default function FasilitasSingkat() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setTimeout(() => {
        setIsHovered(true);
      }, 500); // Waktu penundaan dalam milidetik sebelum teks muncul setelah cursor tidak menyentuh kontainer
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-row space-x-6">
          <div className="w-1/3 p-5 hover:scale-110 relative">
            <img className="rounded-t-lg"
              src="https://cdn.discordapp.com/attachments/1096614485231423568/1124903651492757616/Screenshot_2023-07-01_131709.png"
              alt="Gambar Fasilitas"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            {isHovered && (
              <div className="container align-middle text-center p-3 bg-gray-100 pb rounded-b-lg">
                <h1 className="font-serif text-green-600">Wisata Hewan</h1>
              </div>
            )}
          </div>
          <div className="w-1/3 p-5 hover:scale-110 relative">
            <img className="rounded-t-lg"
              src="https://cdn.discordapp.com/attachments/1096614485231423568/1124934281244966932/wahana_Permainan.png"
              alt="Gambar Fasilitas"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            {isHovered && (
              <div className="container align-middle text-center p-3 bg-gray-100 pb rounded-b-lg">
                <h1 className="font-serif text-green-600">Wahana Permainan</h1>
              </div>
            )}
          </div>
          <div className="w-1/3 p-5 hover:scale-110 relative">
            <img className="rounded-t-lg"
              src="https://cdn.discordapp.com/attachments/1096614485231423568/1124943236348248126/Safari_Lodge.png"
              alt="Gambar Fasilitas"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            {isHovered && (
              <div className="container align-middle text-center p-3 bg-gray-100 pb rounded-b-lg">
                <h1 className="font-serif text-green-600">Hotel</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}