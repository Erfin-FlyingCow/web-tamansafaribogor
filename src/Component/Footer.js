import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-4 text-green-900">
        <div className="flex flex-row justify-between">
          <div className="cotainer text-center content-center  space-x-4 space-y-2">
            <div className="text-s font-medium">Sosmed Kami</div>
            <div className="flex">
              <a
                href="https://www.facebook.com/tamansafaribogor"
                target="blank"
                className="mr-4"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/1096614485231423568/1124640813067022367/fb_logo.png"
                  alt="Facebook"
                  className="h-6 w-6 hover:scale-110"
                />
              </a>
              <a
                href="https://www.instagram.com/taman_safari/"
                target="blank"
                className="mr-4"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/1096614485231423568/1124642719579504650/ig_logo.png"
                  alt="Instagram"
                  className="h-6 w-6 hover:scale-110"
                />
              </a>
              <a
                href="https://twitter.com/TSI_Bogor"
                target="blank"
                className="mr-4"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/1096614485231423568/1124925137087631420/logo_twt.png"
                  alt="Twitter"
                  className="h-6 w-6 hover:scale-110"
                />
              </a>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <div>
                <a href="https://goo.gl/maps/tgTXzY8gTnYchtsN6" target="blank">
                <div className="px-4 py-2 rounded-lg hover:bg-gray-100">
                  <div>Alamat Kami:</div>
                  <div>Jl. Kapten Harun Kabir No.724,</div>
                  <div>Cibeureum, Kec. Cisarua,</div>
                  <div>Kabupaten Bogor, Jawa Barat 16750</div>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container text-center content-center items-center mx-auto">

            <p>&copy; Taman Safari Bogor 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
