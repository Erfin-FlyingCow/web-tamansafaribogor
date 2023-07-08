import React from "react";

export default function Hotel(){
    return (      
    <div id="hotel" className="mx-auto max-w-full bg-white p-2 mb-6">
    <div className="flex justify-center items-center">
      <img
        src="https://cdn.discordapp.com/attachments/1096614485231423568/1126437682734698536/Hotel.jpg"
        alt="hewan"
        className="rounded-xl shadow-xl"
        style={{ height: '400px', width: '700px' }}
      />
    </div>

    <h1 className="text-center text-4xl font-bold m-4 text-gray-500">Hotel</h1>
    <h1 className="text-2xl text-justify mx-20">
      Hotel Safari Lodge merupakan akomodasi yang terletak di Taman Safari Bogor,
      menawarkan pengalaman menginap yang unik di tengah alam dan keindahan satwa liar.
      Hotel ini dirancang dengan konsep yang harmonis dengan lingkungan sekitar,
      menciptakan suasana yang menenangkan dan alami.
    </h1>
  </div>
  );
}