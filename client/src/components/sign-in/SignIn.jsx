import { useNavigate } from "react-router-dom";
import usersApi from "../../api/user-api";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function SignIn() {
    const navigate = useNavigate();
    const { signIn: setAuthUser } = useContext(AuthContext);

    const handleSignIn = async ({ email, password }) => {
        try {
            const user = await usersApi.signIn(email, password);
            setAuthUser(user);
            navigate("/");
        } catch (err) {
            console.error(err);
            alert(err.message || "Invalid credentials");
        }
    };

    const { values, handleChange, handleSubmit } = useForm(
        { email: "", password: "" },
        handleSignIn
    );

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="user@example.com"
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
                            autoComplete="current-password"
                        />
                    </div>

                    <button type="submit" className="w-full mt-4 bg-indigo-600 text-white font-semibold py-2.5 rounded-md shadow-md">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
