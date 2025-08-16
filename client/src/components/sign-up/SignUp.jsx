import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import usersApi from '../../api/user-api';
import { AuthContext } from '../../context/AuthContext';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const newUser = await usersApi.signUp(email, password);

            signIn(newUser);

            navigate('/');
        } catch (err) {
            console.error(err);
            alert(err.message || 'Something went wrong');
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="newuser@example.com"
                            className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-indigo-600 text-white font-semibold py-2.5 rounded-md shadow-md"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
