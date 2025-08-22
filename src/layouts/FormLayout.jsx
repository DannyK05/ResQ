import { Link } from "react-router-dom";

const SignLayout = (props) => {
  return (
    <main className="h-[100vh] lg:flex lg:items-center lg:justify-center lg:shadow-lg p-2">
      <div className="w-full lg:w-2/5 lg:rounded-lg">
        <header className="flex align-center justify-center">
          <Link to="/home">
            <h1 className="text-xl">
              Res<span className="text-blue">Q</span>
            </h1>
          </Link>
        </header>
        {props.children}
      </div>
    </main>
  );
};

export default SignLayout;
