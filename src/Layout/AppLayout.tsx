import React from "react";
import { Link, Outlet, NavLink, useLocation } from "react-router-dom";
import {
  ABOUT_MENU,
  MY_SOCIAL_MEDIA,
  PROJECT_NAME,
  SIDE_MENU,
  USER_NAME,
} from "../assets/portfolio";

const AppLayout: React.FC = () => {
  const location = useLocation();

  const scrollToTop: () => void = () => {
    window.scrollTo({top:0, behavior:"smooth"})
  };
  return (
    <div className="flex min-h-screen">
      {/* Large Screen Menu */}
      <div className="hidden md:block md:w-2/6 lg:w-1/6 min-h-full border-r border-gray-200 z-999">
        <div className="h-20 text-xl text-white italic flex items-center justify-left ml-4">
          {PROJECT_NAME}
        </div>

        <ul className="py-20 flex flex-col gap-10 justify-left">
          {SIDE_MENU.map((s_menu) => (
            <li>
              <NavLink
                to={s_menu.to}
                className={`px-6 py-3 text-white hover:bg-gray-800 cursor-pointer flex gap-2 items-center ${
                  location.pathname === s_menu.to && "bg-gray-800"
                }`}
              >
                <s_menu.icon size={30} /> {s_menu.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Large Screen Menu */}

      {/* Small Screen Menu */}
      <div className="w-full fixed bottom-0  border-r border-gray-200 z-999 md:hidden">
       
        <ul className="py-4 flex gap-4 md:justify-center justify-evenly bg-[#475569]">
          {SIDE_MENU.map((s_menu) => (
            <li>
              <NavLink
                to={s_menu.to}
                className={`text-white cursor-pointer flex gap-2 items-center ${
                  location.pathname === s_menu.to && "text-blue-800"
                }`}
                onClick={scrollToTop}
              >
                <s_menu.icon size={25} />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Small Screen Menu */}

      <div className="w-full md:w-4/6 lg:w-5/6 h-full">
        <header className="border-b border-gray-200 py-4 px-6 sm:px-2 flex flex-col sm:flex-row sm:gap-20 items-center">
          <div className="image w-full sm:w-2/6 flex justify-center mb-4 sm:mb-0">
            <img
              className="h-20 w-20 md:h-40 md:w-40 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>

          <div className="about w-full sm:w-4/6 flex flex-col justify-left gap-4">
            <div className="flex gap-4 items-center justify-center mr-0 md:mr-auto">
              <h4 className="text-white text-xl mb-2 sm:mb-0">{USER_NAME}</h4>
              <div className="social-icons flex gap-2">
                {MY_SOCIAL_MEDIA.map((social, inx) => (
                  <Link to={social.LINK} target="_blank" key={inx}>
                    <social.ICON
                      className="cursor-pointer icon"
                      color="white"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center mr-0 md:mr-auto  text-white">
              {ABOUT_MENU.map((me) => (
                <div className="cursor-pointer" key={me.TITLE}>
                  <Link to={me.LINK}>
                    <h6>
                      <span>
                        {me.NUMBER}
                        <sup className="text-green-600 text-xs">
                          {me.TITLE === "Experiences" && <span>yrs</span>}
                          {me.TITLE === "Projects" && <span>Live</span>}{" "}
                        </sup>
                      </span>
                      {me.TITLE}
                    </h6>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </header>
        <div className="mb-[80px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
