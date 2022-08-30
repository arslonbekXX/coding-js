import axios from "axios";

const endPoint = process.env.REACT_APP_BASE_URL + "/auth/sign-in";

const SignIn = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = {};
    axios.post(endPoint, data);
  };
  return (
    <div>
      <h1>Sign IN</h1>
      <form onSubmit={onSubmit}>
        <input type='email' id='email' />
        <input type='password' id='password' />
        <button>Login</button>
      </form>
    </div>
  );
};

export default SignIn;
