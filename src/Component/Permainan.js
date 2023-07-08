import React from "react";

export default function Wahanapermainan() {
    return(
        <div id="wahana-permainan" className="mx-auto max-w-full bg-gray-100 p-2 mb-6">
        <div className="flex justify-center items-center">
          <img
            src="https://cdn.discordapp.com/attachments/1096614485231423568/1126434542681604106/climbing.png"
            alt="hewan"
            className="rounded-xl shadow-xl"
            style={{ height: '400px', width: '700px' }}
          />
        </div>

        <h1 className="text-center text-4xl font-bold m-4 text-gray-500">Wahana Permainan</h1>
        <h1 className="text-2xl text-justify mx-20">
          Taman Safari Bogor juga memiliki wahana permainan lainnya seperti Kora-Kora dan Tornado.
          Kora-Kora adalah kapal ayun raksasa yang mengguncangdan memberikan sensasi seperti berlayar di lautan lepas.
          Sementara itu, Tornado adalah wahana berputar cepat yang memberikan adrenalin dan membuat perut terasa bergoyang.
          Wahana-wahana ini cocok bagi Anda yang menyukai sensasi dan kegembiraan.
        </h1>
      </div>
    );
}