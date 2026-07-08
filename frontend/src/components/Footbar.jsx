export default function Footer() {
  return (
    <div className="pt-16">
      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-black">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
          
          {/* Logo & Brand */}
          <a href="/">
            <div className="flex items-center gap-3">
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V12M8 12C8 13.657 6.657 15 5 15C3.343 15 2 13.657 2 12V2M8 12H2M15 2V22M19 2C20.657 2 22 3.343 22 5V9C22 10.657 20.657 12 19 12H15V2H19Z"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div>
                <h2 className="text-2xl font-bold text-purple-500">
                  Velvet Spoon
                </h2>
                <p className="mt-2 max-w-xs text-gray-400">
                  Enjoy delicious meals with easy online food ordering and
                  hassle-free table reservations.
                </p>
              </div>
            </div>
          </a>

          {/* Quick Links */}
          <div>
            <p className="text-slate-100 font-semibold">Quick Links</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-purple-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-purple-500 transition">
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/reservation"
                  className="hover:text-purple-500 transition"
                >
                  Book a Table
                </a>
              </li>
              <li>
                <a
                  href="/order"
                  className="hover:text-purple-500 transition"
                >
                  Order Food
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-slate-100 font-semibold">Support</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/contact" className="hover:text-purple-500 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-purple-500 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-purple-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-purple-500 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-60">
            Reserve your favorite table, order freshly prepared meals, and
            enjoy a seamless dining experience with Velvet Spoon.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-3">
            <a href="#" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-5 hover:text-purple-500"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
              </svg>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-5 hover:text-purple-500"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" />
              </svg>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-5 hover:text-purple-500"
              >
                <path d="M22 4L13 13" />
                <path d="M22 20L13 11" />
                <path d="M2 4l9 9" />
                <path d="M2 20l9-9" />
              </svg>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-6 hover:text-purple-500"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                <path d="M10 15l5-3-5-3v6z" />
              </svg>
            </a>
          </div>

          <p className="mt-3 text-center">
            © 2026{" "}
            <a href="/" className="hover:text-purple-500 transition">
              Velvet Spoon
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}