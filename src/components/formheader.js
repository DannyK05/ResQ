import { Link } from "react-router-dom";

const FormHeader = () => {
  return (
    <header className="flex align-center justify-center">
      <Link to="/home">
        {" "}
        <h1 className="text-xl">
          Res<span className="text-blue">Q</span>
        </h1>
      </Link>
    </header>
  );
};

export default FormHeader;
