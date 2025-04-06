const users = [
  {
    name: "XYZ XYZ",
    role: "Alumni",
    gradYear: "Class of 2021",
    major: "Computer Science",
    location: "New York, NY",
    email: "areeba@example.com",
  },
  {
    name: "ABC ABC",
    role: "Student",
    gradYear: "Class of 2026",
    major: "Economics",
    location: "Ithaca, NY",
    email: "hm456@cornell.edu",
  },
  // Add more people as needed
];

function Networking() {
  return (
    <div className="min-h-screen bg-green-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
          PSA Networking Portal
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Connect with current students and alumni of the Pakistani Students
          Association at Cornell. Whether you're looking for mentorship,
          professional advice, or community — this is your space to reach out.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-200"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-1">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">
                {user.role} • {user.gradYear}
              </p>
              <p className="text-gray-700 mt-2">{user.major}</p>
              <p className="text-gray-500">{user.location}</p>
              <a
                href={`mailto:${user.email}`}
                className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition text-sm font-medium"
              >
                Connect
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Networking;
