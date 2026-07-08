const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Food Blogger",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    review:
      "The food was absolutely delicious and beautifully presented. Booking a table was quick and hassle-free. Highly recommended!",
    rating: "⭐ 5.0",
  },
  {
    id: 2,
    name: "Aman Verma",
    role: "Regular Customer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    review:
      "Excellent service, cozy ambience, and amazing food. The online ordering system is fast and very convenient.",
    rating: "⭐ 4.9",
  },
  {
    id: 3,
    name: "Priya Gupta",
    role: "Verified Customer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    review:
      "From reservation to dessert, everything was perfect. Velvet Spoon has become my favorite restaurant.",
    rating: "⭐ 5.0",
  },
];

export default function Testimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-semibold text-sm">
            Customer Reviews
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-5">
            What Our Guests Say
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600 leading-7">
            At <span className="font-semibold text-purple-700">Velvet Spoon</span>,
            every meal is crafted with passion and served with excellence.
            Here's what our valued guests have to say about their dining and
            reservation experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-purple-200"
              />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {item.name}
              </h3>

              <p className="text-purple-600 font-medium">{item.role}</p>

              <p className="mt-4 text-gray-600 leading-7">
                "{item.review}"
              </p>

              <div className="mt-6">
                <p className="text-orange-500 text-lg font-semibold">
                  {item.rating}
                </p>

                <div className="text-orange-500 text-xl mt-2">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}