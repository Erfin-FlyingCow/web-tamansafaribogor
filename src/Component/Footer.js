import React from 'react';

function Footer() {
  return (
    <div className="bg-zinc-400">
      <div className="container mx-auto py-4 text-white">
        <div className="flex flex-row justify-between">
          <div>
            <div className="text-xs font-medium">Sosmed Kami</div>
            <div className="flex">
              <a href="https://www.facebook.com/tamansafaribogor" target='blank' className="mr-4">
                <img
                  src="https://cdn.discordapp.com/attachments/1096614485231423568/1124640813067022367/fb_logo.png"
                  alt="Facebook"
                  className="h-6 w-6 text-gray-600 hover:text-gray-800"
                />
              </a>
              <a href="https://www.instagram.com/taman_safari/" target='blank' className="mr-4">
                <img
                  src="https://cdn.discordapp.com/attachments/1096614485231423568/1124642719579504650/ig_logo.png"
                  alt="Instagram"
                  className="h-6 w-6 text-gray-600 hover:text-gray-800"
                />
              </a>
              <a href="https://twitter.com/TSI_Bogor" target='blank' className="mr-4">
                <img
                  src="https://cdn.discordapp.com/attachments/1096614485231423568/1124644107432767488/logo_twt.png"
                  alt="Twitter"
                  className="h-6 w-6 text-gray-600 hover:text-gray-800"
                />
              </a>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <div className="bg-zinc-400">
                <div className="px-4 py-2">
                  <div>Alamat Kami:</div>
                  <div>Jl. Kapten Harun Kabir No.724,</div>
                  <div>Cibeureum, Kec. Cisarua,</div>
                  <div>Kabupaten Bogor, Jawa Barat 16750</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">&copy; Taman Safari Bogor 2023</div>
      </div>
    </div>
  );
}

export default Footer;
