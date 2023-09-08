import React, { useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
const SideNav = () => {
  const navItems = [
    {
      label: "US Population Table",
      route: "/",
      iconClass: "fa-solid fa-table mr-2",
    },
    {
      label: "US Population Chart",
      route: "/chart",
      iconClass: "fa-solid fa-chart-column mr-2",
    },
    {
      label: "About",
      route: "/about",
      iconClass: "fa-solid fa-address-card mr-2",
    },
  ];

  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div className="w-full h-[90vh] flex">
      <div className="w-[30%] bg-slate-600">
        <ul className="w-full text-white text-lg container mx-auto cursor-pointer">
          {navItems.map((el) => {
            return (
              <NavLink
                key={el.route}
                to={el.route}
                activeClassName="active-link"
              >
                <li
                  className={`py-2 px-2 hover:bg-black ${
                    location.pathname === el.route ? "bg-black" : ""
                  }`}
                >
                  <i className={el.iconClass}></i>
                  {el.label}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className="w-[70%] h-full flex item-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default SideNav;
