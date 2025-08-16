export default function SignUp() {
    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Create Account
                </h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="newuser@example.com"
                            className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
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
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full mt-4 bg-indigo-600 text-white font-semibold py-2.5 rounded-md shadow-md cursor-not-allowed opacity-50"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}