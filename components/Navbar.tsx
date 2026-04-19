'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({ offset: 0 });
    }
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="logo-section" data-aos="zoom-in" data-aos-duration="1200">
        <div className="logo-icon">
          <img 
            src="/tejasslogo.jpeg" 
            alt="Tejas Logo"
            className="logo-img"
          />
        </div>
        <div className="logo" data-aos="zoom-in" data-aos-duration="1200">
          <h2>
            Tejas <span>Ingole</span>
          </h2>
        </div>
      </div>
      <div className="link">
        <ul>
          {navItems.map((item, index) => (
            <li
              key={item.name}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={200 + index * 200}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
