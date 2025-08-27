import { Link } from "react-router-dom";

const Navbar = ({ className, toggleEmergencyTab, visibility, activeNav }) => {
  return (
    <nav
      className={`${
        className !== undefined ? className : ""
      }  bg-white shadow-xl bottom-0 fixed lg:static px-2 py-3`}
    >
      <ul className="flex w-full justify-between items-center ">
        <li>
          <Link to="/" aria-label="Home">
            <ion-icon name={activeNav ? "home" : "home-outline"}></ion-icon>
          </Link>
        </li>
        {/*Change Link address to home when Login page is ready*/}
        <li>
          {visibility ? (
            <ion-icon
              onClick={toggleEmergencyTab}
              name="close-outline"
            ></ion-icon>
          ) : (
            <div
              onClick={toggleEmergencyTab}
              className=" rounded-full border border-blue p-2"
            >
              <div className=" rounded-full bg-blue p-5 active:bg-[#6db6fa]"></div>
            </div>
          )}
        </li>
        <li>
          <Link to="/profile" aria-label="Profile">
            <ion-icon name={activeNav ? "person-outline" : "person"}></ion-icon>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
