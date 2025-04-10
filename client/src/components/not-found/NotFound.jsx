export default function NotFound() {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-500">404</p>
                <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-7xl">
                    Page not found
                </h1>
                <p className="mt-6 text-lg text-gray-400">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button
                        onClick={() => window.location.href = "/"}
                        className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500"
                    >
                        Go back home
                    </button>
                    <button className="text-sm font-semibold text-white hover:underline">
                        Contact support →
                    </button>
                </div>
            </div>
        </div>
    );
}
