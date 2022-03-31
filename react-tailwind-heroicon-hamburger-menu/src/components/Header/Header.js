import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Header = () => {
    const [open, setOpen] = useState(false);

    const headerButtons = [
        { id: 1, name: "home", link: "/home" },
        { id: 2, name: "shop", link: "/shop" },
        { id: 3, name: "cart", link: "/cart" },
        { id: 4, name: "offer", link: "/offer" },
        { id: 5, name: "payed", link: "/payed" },
    ]

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open? <XIcon></XIcon> :<MenuIcon></MenuIcon>}
            </div>

            <ul className={`md:flex justify-center absolute duration-500 ease-in ${open? 'top-6' : 'top-[-160px]' }`}>
                {headerButtons.map(button => <li className='ml-5' key={button.id}>{button.name}</li>)}
            </ul>
        </nav>
    );
};

export default Header;