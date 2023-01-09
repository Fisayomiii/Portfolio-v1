import { useState } from 'react';
import { Dialog } from "@headlessui/react";
import { NavLink } from 'react-router-dom';
import Social from '../../Ui/social/Social';
// import Sound from '../../Ui/sound/Sound';

function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", to: "/", classname: "bx bx-home" },
    { name: "About me", to: "/about", classname: "bx bx-user" },
    { name: "Portfolio", to: "/portfolio", classname: "bx bx-briefcase" },
    { name: "Skills", to: "/skills", classname: "bx bx-code" },
    { name: "Contact me", to: "/contact", classname: "bx bx-envelope" },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside>
        <div className="sidebar" ><br />
          <ul>
            <li>
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.to} className="navitem">
                  <i className={item.classname} ></i>
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </li>
          </ul>
          {/* <Sound /> */}
        </div>

        {/* mobilesidebar */}
        <Dialog as="div" className="mobilesidebar" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          {/* nav toggle */}
          <div className="menu-toggle" onClick={() => setMobileMenuOpen(false)}>
            <div className="line-wrapper">
              <span className="line1"></span>
              <span className="line2"></span>
            </div>
          </div>

          <Dialog.Panel as="ul" className="ul">
            <li>
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.to} className="navitem">
                  <i className={item.classname} ></i>
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </li>
          </Dialog.Panel><br />
          {/* <Sound /> */}
        </Dialog>
      </aside>

      {/* hamburger */}
      <div className="menu-toggle">
        <div className="hamburger" onClick={() => setMobileMenuOpen(true)} >
          <input type="checkbox" />
          <div className="hamburgerlines">
            <span className="lines line1"></span>
            <span className="lines line2"></span>
            <span className="lines line3"></span>
          </div>
        </div>
      </div>

      <Social />

    </>
  )
}

export default Sidebar;
