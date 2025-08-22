import { Link } from "react-router-dom";
const ActionLayout = (props) => {
  return (
    <main className="h-[100vh] lg:flex lg:items-center p-2 lg:shadow-lg lg:justify-center">
      <div className="lg:w-2/5 shadow-lg lg:rounded-lg h-full">
        {" "}
        <header className="flex justify-between items-center mx-1 pl-[5px] pr-[40%]">
          <Link to="/" aria-label="back-arrow">
            <span className="active:text-black">
              <ion-icon size="large" name="arrow-back-outline"></ion-icon>
            </span>
          </Link>
          <h1 className="text-blue">{props.name}</h1>{" "}
          {/*Change Link address to home when Login page is ready*/}
        </header>
        {props.children}
      </div>
    </main>
  );
};

export default ActionLayout;
