import SignLayout from "../containers/signLayout";
import LoginForm from "../components/login";

const LoginPage = ({ setAuthenticated }) => {
  return (
    <SignLayout>
      <LoginForm setAuthenticated={setAuthenticated} />
    </SignLayout>
  );
};
export default LoginPage;
