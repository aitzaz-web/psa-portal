function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">
          About the Pakistani Students Association
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          PSA at Cornell is a cultural and social organization that celebrates
          Pakistani heritage, connects students and alumni, and fosters a sense
          of community and inclusion on campus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-gray-800">
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">
            Our Mission
          </h2>
          <p className="leading-relaxed">
            To build a vibrant Pakistani community at Cornell through cultural
            events, meaningful dialogue, and educational opportunities. We aim
            to represent our values and share our identity with the broader
            Cornell community.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">Our Vision</h2>
          <p className="leading-relaxed">
            To create a long-lasting network of Pakistani students and alumni
            who support, uplift, and inspire each other beyond campus —
            empowering leadership, celebrating diversity, and driving positive
            impact.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500">
          Want to get involved? Reach out or come to our next event!
        </p>
      </div>
    </div>
  );
}

export default About;
