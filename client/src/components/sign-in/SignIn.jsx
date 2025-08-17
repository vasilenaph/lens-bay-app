import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import usersApi from "../../api/user-api";
import { AuthContext } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";

export default function SignIn() {
    const [error, setError] = useState(""); 
    const navigate = useNavigate();
    const { signIn: setAuthUser } = useContext(AuthContext);

    const handleSignIn = async ({ email, password }) => {
        try {
            const user = await usersApi.signIn(email, password);
            setAuthUser(user);
            navigate("/");
        } catch (err) {
            console.error(err);
            setError(err.message || "Invalid credentials"); 
        }
    };

    const { values, handleChange, handleSubmit } = useForm(
        { email: "", password: "" },
        handleSignIn
    );

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Sign In
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
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

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                            value={values.password}
                            onChange={handleChange}
                            required
                            autoComplete="current-password"
                        />
                        {error && ( 
                            <p className="text-red-500 text-sm mt-1">{error}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-indigo-600 text-white font-semibold py-2.5 rounded-md shadow-md hover:bg-indigo-700 transition"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
