import { useNavigate } from "react-router-dom";
import usersApi from "../../api/user-api";
import useForm from "../../hooks/useForm";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = async ({ email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await usersApi.signUp(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong");
    }
  };

  const { values, handleChange, handleSubmit } = useForm(
    { email: "", password: "", confirmPassword: "" },
    handleSignUp
  );

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="newuser@example.com"
              className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
              value={values.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
              value={values.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
              value={values.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="w-full mt-4 bg-indigo-600 text-white font-semibold py-2.5 rounded-md shadow-md">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
