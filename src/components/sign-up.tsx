import axios from "axios";

const endPoint = process.env.REACT_APP_BASE_URL + "/auth/sign-up";

const SignUp = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = {};
    axios.post(endPoint, data);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <input type='email' id='email' />
        <input type='password' id='password' />
        <button>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
