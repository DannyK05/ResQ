import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header className="flex justify-between align-center border-b border-inherit w-full p-2 bg-white  mb-4">
      <Link to="/">
        {" "}
        <h1 className="text-xl">
          Res<span className="text-blue">Q</span>
        </h1>
      </Link>{" "}
      {/*Change Link address to home when Login page is ready*/}
      <Link to="/notification" aria-label="notifications">
        <ion-icon name="notifications-outline"></ion-icon>
      </Link>
    </header>
  );
};

export default HomeHeader;
