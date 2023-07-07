import React from 'react';
export default function Dokumentasi() {
    const images = [
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126378175614701619/images_1686034328806-picsay.png',
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126378175614701619/images_1686034328806-picsay.png',
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126378175614701619/images_1686034328806-picsay.png',
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126378175614701619/images_1686034328806-picsay.png',
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126378175614701619/images_1686034328806-picsay.png',
        'https://cdn.discordapp.com/attachments/1096614485231423568/1126378175614701619/images_1686034328806-picsay.png',
        // Tambahkan URL gambar lainnya di sini
      ];
    

    return(
        <div className='mb-10'>
            <h1 className="text-center text-3xl text-green-900 font-bold underline mb-10">Dokumentasi</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-12 mx-auto w-3/5 ">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`${index + 1}`}/>
                ))}

            </div>
        </div>
    )

}