import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { useAuth } from "../AuthContext";

function Networking() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProfile, setExpandedProfile] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersList = querySnapshot.docs.map((doc) => doc.data());
        setProfiles(usersList);
        setLoading(false);
      } catch (error) {
        console.error("❌ Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg font-semibold">
        Please log in to view the network.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Loading profiles...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back to Home
          </button>
        </div>
        
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
          PSA Networking Portal
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Connect with current students and alumni of the Pakistani Students
          Association at Cornell. Whether you're looking for mentorship,
          professional advice, or community — this is your space to reach out.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-200"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-1">
                {profile.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {profile.role} • Class of {profile.gradYear}
              </p>
              <p className="text-gray-700">{profile.major}</p>
              {profile.jobTitle && (
                <p className="text-gray-600 italic">
                  {profile.jobTitle} {profile.company && `@ ${profile.company}`}
                </p>
              )}
              {profile.location && (
                <p className="text-gray-500">{profile.location}</p>
              )}
              {profile.bio && (
                <p className="mt-2 text-sm text-gray-600">{profile.bio}</p>
              )}
              
              {/* Contact Information - shown when expanded */}
              {expandedProfile === index && profile.email && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Contact Information:</h4>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Email:</span> {profile.email}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => navigator.clipboard.writeText(profile.email)}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-200 transition duration-200"
                      >
                        Copy Email
                      </button>
                      <a
                        href={`mailto:${profile.email}`}
                        className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700 transition duration-200"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
                  >
                    LinkedIn
                  </a>
                )}
                {profile.email && (
                  <button
                    onClick={() => setExpandedProfile(expandedProfile === index ? null : index)}
                    className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition duration-200"
                  >
                    {expandedProfile === index ? 'Hide Contact' : 'Show Contact'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Networking;
