import React, { useState, useEffect } from "react";
import './SlideShowImage.css';

export default function SlideShowImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://cdn.discordapp.com/attachments/1096614485231423568/1125417190502441071/Screenshot_2023-07-01_132045.png",
    "https://cdn.discordapp.com/attachments/1046012810972373012/1125424447843741736/3.png",
    "https://cdn.discordapp.com/attachments/1096614485231423568/1124593896819785748/Screenshot_2023-07-01_131923.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="ImageSlide">
      <img className="Images brightness-50"
        src={images[currentImageIndex]}
        alt="Gambar slide show"
      />
      <div className="TextOnImage">
        <h2 className="visi-misi">Visi</h2>
        <p className="content-visi-misi">
            "Menjadi salah satu theme park berbasis konservasi satwa yang terdepan di dunia dan menginspirasi pelestarian alam"
        </p>
        <br />
        <h2 className="visi-misi">Misi</h2>
        <p className="content-visi-misi mx-9">
        "Bersemangat melestarikan alam dan satwa liar serta menyajikan edutainment untuk menciptakan pengalaman keluarga yang tak terlupakan" 
        </p>
      </div>
    </div>
  );
}
