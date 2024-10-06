// React Imports
import { useRef, useState } from "react";

// Router Dom
import { Link, Outlet, useLocation } from "react-router-dom";

// Thirdparty
import { cn } from "@configs/cn";

// Type
import { navigation, type SidenavItem } from "@src/navigation";
import { FiAlignJustify, FiArrowUp, FiX } from "react-icons/fi";

const AdminLayout = () => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(true);
  const toggleSideNav = () => setOpen((prev) => !prev);

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-e-[1px] ${
          open ? "-translate-x-full" : "translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full p-4 overflow-y-auto gap-7 bg-gray-50">
          <div className="absolute top-0 right-0 p-1">
            <button onClick={toggleSideNav} className="sm:hidden">
              <FiX className="w-4 h-4" />
            </button>
          </div>
          <Link id="navbar-brand" to={"/"}>
            <div className="flex items-center justify-center shrink-0">
              <span className="text-2xl font-extrabold ms-3">
                Dian & Delisa
              </span>
            </div>
          </Link>
          <nav>
            <ul className="space-y-2">
              {navigation.map((nav, idx) => (
                <li key={idx + 1}>
                  {nav.isHeader ? (
                    <SidenavMenuHeader title={nav.title} href={nav.href} />
                  ) : nav.subMenu ? (
                    <SidenavSubmenu pathname={pathname} {...nav} />
                  ) : (
                    <SidenavMenuItem active={nav.href === pathname} {...nav} />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      <div className="h-screen bg-black sm:ml-64">
        <header className="p-4 border-b-[1px]">
          <div className="flex justify-between">
            <div>
              <button
                onClick={toggleSideNav}
                className="p-2 border rounded-md text-gold border-gold sm:hidden"
              >
                <FiAlignJustify />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-xs text-gold text-end">username</p>
                <p className="text-sm font-semibold text-white text-end">
                  Full Name
                </p>
              </div>
            </div>
          </div>
        </header>
        <main className="p-4 bg-black h-min-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;

const SidenavMenuHeader = ({ title }: SidenavItem) => {
  return <h4 className="text-xs font-bold text-gray-400">{title}</h4>;
};

const SidenavMenuItem = ({
  active,
  title,
  href,
}: SidenavItem & { active: boolean }) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center px-3 leading-10 rounded-full group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-200",
        {
          "bg-primary text-white": active,
        }
      )}
    >
      <span className="font-semibold ms-3 group-hover:text-white">{title}</span>
    </Link>
  );
};

const SidenavSubmenuItem = ({
  active,
  title,
  href,
}: SidenavItem & { active: boolean }) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center px-3 leading-10 rounded-full group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-200",
        {
          "bg-primary text-white": active,
        }
      )}
    >
      <span className="font-semibold ms-3 group-hover:text-white">{title}</span>
    </Link>
  );
};

const SidenavSubmenu = ({
  href,
  title,
  pathname,
  subMenuItems,
}: SidenavItem & { pathname: string }) => {
  // ** State
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleSidenavSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-1 rounded-full">
      <button
        onClick={toggleSidenavSubMenu}
        className={cn(
          "w-full flex items-center px-3 leading-10 rounded-full group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-200",
          {
            "bg-primary text-white": href.includes("pathname"),
          }
        )}
      >
        <span className="font-semibold ms-3 group-hover:text-white">
          {title}
        </span>

        <FiArrowUp
          className={cn(
            "w-6 h-6 group-hover:text-white ms-auto transition-transform duration-200",
            {
              "rotate-180": isOpen,
            }
          )}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
      >
        <ul>
          {subMenuItems?.map((nav, idx) => (
            <li key={idx + 1}>
              <SidenavSubmenuItem active={nav.href === pathname} {...nav} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
