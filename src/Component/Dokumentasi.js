import React from 'react';
export default function Dokumentasi() {
    const images = [
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126853495027417149/logog.png',
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126804056246071327/Taman-Safari-Bogor.jpg',
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126849116824141915/gajah.png',
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126437682734698536/Hotel.jpg',
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126434542681604106/climbing.png',
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126178405797351504/rimau.png',
      ];
    

    return(
        <div className=' max-w-4xl mx-auto bg-zinc-50 opacity-80 pb-10 transition-all '>
            <h1 className="text-center text-3xl text-green-900 font-bold underline mb-10">Dokumentasi</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-12 mx-auto opacity-100">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${index + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ))}

            </div>
        </div>
    )

}