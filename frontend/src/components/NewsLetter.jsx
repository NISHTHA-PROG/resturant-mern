import { useState } from "react";

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = () => {
        if (!email.trim()) {
            setMessage("⚠️ Please enter your email address.");
            return;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setMessage("⚠️ Please enter a valid email address.");
            return;
        }

        setMessage("🎉 Thank you for subscribing to Velvet Spoon!");
        setEmail("");

        // Hide success message after 3 seconds
        setTimeout(() => {
            setMessage("");
        }, 3000);
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

                *{
                    font-family:'Poppins',sans-serif;
                }
            `}</style>

            <div className="w-full bg-black px-4 py-20 flex flex-col items-center justify-center text-center">

                <p className="text-purple-500 font-semibold text-3xl tracking-wide uppercase">
                    🍽️ Velvet Spoon
                </p>

                <h1 className="max-w-2xl mt-3 text-4xl font-bold text-white leading-tight">
                    Stay Updated with Velvet Spoon
                </h1>

                <p className="max-w-2xl mt-5 text-gray-400 text-base leading-7">
                    Subscribe to our newsletter to receive exclusive offers,
                    new menu updates, seasonal specials, and reservation
                    announcements directly in your inbox.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center mt-10 bg-gray-900 border border-gray-700 rounded-full p-2 max-w-xl w-full shadow-lg focus-within:ring-2 focus-within:ring-white transition-all">

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none px-5 py-3 w-full"
                    />

                    <button
                        onClick={handleSubscribe}
                        className="mt-3 sm:mt-0 bg-purple-500 hover:bg-purple-400 transition-all duration-300 text-white font-medium rounded-full px-8 py-3 shadow-md"
                    >
                        Subscribe Now
                    </button>

                </div>

                {/* Success / Error Message */}
                {message && (
                    <div
                        className={`mt-5 px-6 py-3 rounded-lg text-white font-medium shadow-lg transition-all duration-300 ${
                            message.includes("Thank")
                                ? "bg-green-600"
                                : "bg-red-600"
                        }`}
                    >
                        {message}
                    </div>
                )}

                <p className="mt-5 text-sm text-gray-500">
                    No spam. Unsubscribe anytime.
                </p>

            </div>
        </>
    );
}