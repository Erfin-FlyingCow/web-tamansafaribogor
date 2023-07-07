import React from 'react';

export default function Navbar() {
  return (
    <div>
      <div className='bg-gray-200'>
        <nav className="flex sm:justify-center space-x-10">
          <img src='http://surl.li/ipnrz' alt='logo' className='h-20'></img>
          {[

            ['Home', '/'],
            ['Facilities', '/Facility'],
            ['About Us', '/About'],
            ['Reservation', 'Reservation'],
          ].map(([title, url]) => (
            <a href={url} className="rounded-lg px-3 py-2 text-green-900 font-medium text-2xl hover:bg-green-900 hover:text-white flex items-center justify-center" key={url}>{title}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}


