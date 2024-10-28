import FormHeader from "../components/formheader";

const SignLayout = (props) => {
  return (
    <main className="h-[100vh] lg:flex lg:items-center lg:justify-center lg:shadow-lg p-2">
      <div className="w-full lg:w-2/5 lg:rounded-lg">
        <FormHeader />
        {props.children}
      </div>
    </main>
  );
};

export default SignLayout;
