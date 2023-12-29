import { headerLogo } from "../assets/images";
import Image from "next/image";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

export const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="nike logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="font-montserrat leading-normal text-slate-gray"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="hamburger" width={25} height={25}></Image>
        </div>
      </nav>
    </header>
  );
};
