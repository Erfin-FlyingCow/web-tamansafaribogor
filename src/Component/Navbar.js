import React from 'react';

export default function Navbar() {
  return (
    <div className='relative'>
      <div className='bg-zinc-400'>
        <nav className="flex sm:justify-center space-x-10">
          <img src='http://surl.li/ipnrz' alt='logo' className='h-20'></img>
          {[

            ['Home', '/'],
            ['Facilities', '/Facility'],
            ['About Us', '/About'],
            ['Reservation', 'Reservation'],
          ].map(([title, url]) => (
            <a href={url} className="rounded-lg px-3 py-2 text-slate-100 font-medium text-2xl hover:bg-lime-400 hover:text-slate-900 flex items-center justify-center" key={url}>{title}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}


