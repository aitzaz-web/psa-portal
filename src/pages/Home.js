function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-5xl font-extrabold text-green-700 mb-4">
        Welcome to PSA at Cornell
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6 leading-relaxed">
        The Pakistani Students Association is a space for connection,
        celebration, and community. Join us as we uplift culture, build
        networks, and create lasting impact together.
      </p>
      <a
        href="/about"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-200"
      >
        Learn More
      </a>

      {/* Optional: What We Do Section */}
      <div className="mt-16 max-w-4xl">
        <h2 className="text-2xl font-bold text-green-800 mb-4">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-1">🎉 Cultural Events</h3>
            <p>
              Celebrate Eid, Independence Day and more with fun and community.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">🤝 Networking</h3>
            <p>
              Connect with alumni and mentors from Cornell’s Pakistani
              community.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">
              📚 Educational Dialogues
            </h3>
            <p>
              Engage in meaningful conversations around identity, culture, and
              growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
