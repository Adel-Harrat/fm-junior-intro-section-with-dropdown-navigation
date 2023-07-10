import { useState } from "react";

const Header = ({ links, auth_links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <header className="px-5 py-10 lg:px-16">
      <section className="flex justify-between items-center text-center gap-10">
        <a href="#">
          <img src="./images/logo.svg" alt="logo" />
        </a>

        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <img src="./images/icon-menu.svg" alt="icon open menu" />
        </button>

        <ul className="hidden md:flex items-center flex-1 gap-10">
          {links.map((link) => (
            <li key={link.id}>
              {link.sub ? (
                <div className="relative">
                  <button
                    className={`flex items-center justify-between gap-2 ${
                      link.id === active ? "text-tw-black" : "text-tw-gray"
                    } hover:text-tw-black transition duration-300`}
                    onClick={() =>
                      setActive((a) => (link.id === a ? null : link.id))
                    }
                  >
                    <span>{link.value}</span>

                    <img
                      src={`./images/icon-arrow-${
                        link.id === active ? "up" : "down"
                      }.svg`}
                      alt="arrow up"
                    />
                  </button>

                  <ul
                    className={
                      link.id === active
                        ? "absolute top-12 w-60 bg-white py-5 rounded-2xl drop-shadow-2xl space-y-3"
                        : "hidden"
                    }
                  >
                    {link.sub.map((sub_link) => (
                      <li key={sub_link.id}>
                        <a
                          href={sub_link.href}
                          className="flex items-center gap-3 text-tw-gray px-5"
                        >
                          {sub_link.icon && (
                            <span className="">
                              <img src={sub_link.icon} alt="icon" />
                            </span>
                          )}
                          <span>{sub_link.value}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a
                  href={link.href}
                  className="text-tw-gray hover:text-tw-black transition duration-300"
                >
                  {link.value}
                </a>
              )}
            </li>
          ))}
        </ul>

        <ul className="hidden md:flex items-center gap-5">
          {auth_links.map((link) => (
            <li
              key={link.id}
              className="last:border-2 last:border-tw-gray last:rounded-2xl hover:last:border-tw-black transition duration-300"
            >
              <a
                className="text-tw-gray hover:text-tw-black transition duration-300 px-5 py-2 inline-block"
                href={link.href}
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <nav
        className="fixed top-0 bottom-0 right-0 bg-white z-20 transition-all duration-500 drop-shadow-xl w-2/3"
        style={{ transform: isOpen ? "translateX(0%)" : "translateX(100%)" }}
      >
        <div className="flex items-center justify-end mt-6">
          <button className={`p-5`} onClick={() => setIsOpen(false)}>
            <img src="./images/icon-close-menu.svg" alt="close menu icon" />
          </button>
        </div>

        <ul className="px-8 flex flex-col space-y-3 mt-5">
          {links.map((link) => (
            <li key={link.id} className="text-tw-gray">
              {link.sub ? (
                <div>
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() =>
                      setActive((a) => (link.id === a ? null : link.id))
                    }
                  >
                    <span>{link.value}</span>

                    <img
                      src={`./images/icon-arrow-${
                        link.id === active ? "up" : "down"
                      }.svg`}
                      alt="arrow up"
                    />
                  </div>
                  <ul
                    className={`px-8 mt-2 mb-3 ${
                      link.id === active ? "block" : "hidden"
                    }`}
                  >
                    {link.sub.map((sub_link) => (
                      <li key={sub_link.id}>
                        <a
                          href={sub_link.href}
                          className="flex items-center gap-3 py-2"
                        >
                          {sub_link.icon && (
                            <span>
                              <img src={sub_link.icon} alt="icon" />
                            </span>
                          )}
                          <span>{sub_link.value}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a href={link.href}>{link.value}</a>
              )}
            </li>
          ))}
        </ul>

        <ul className="px-8 mt-10 space-y-2">
          {auth_links.map((link) => (
            <li
              className="last:border-2 last:border-tw-gray last:rounded-2xl"
              key={link.id}
            >
              <a
                className="text-tw-gray block w-full text-center py-2 "
                href={link.href}
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        onClick={() => setIsOpen(false)}
        className="fixed bg-tw-black/50 inset-0 z-10 w-100 transition ease-in-out duration-0"
        style={
          isOpen
            ? { transform: "translateX(0%)" }
            : { transform: "translateX(100%)" }
        }
      />
    </header>
  );
};

export default Header;
