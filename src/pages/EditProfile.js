import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "../AuthContext";
import { db } from "../firebase";

function EditProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;

    const loadProfile = async () => {
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        setForm(docSnap.data());
      }
    };

    loadProfile();
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !form) return;

    try {
      await setDoc(doc(db, "users", user.uid), {
        ...form,
        uid: user.uid,
        email: user.email,
      });
      navigate("/network");
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Could not update profile. Try again.");
    }
  };

  if (!form) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
          Edit Your Profile
        </h2>

        {/* Form Fields */}
        <input
          type="text"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Full Name"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="Student">Student</option>
          <option value="Alumni">Alumni</option>
        </select>

        <input
          type="text"
          name="gradYear"
          value={form.gradYear || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Graduation Year"
        />

        <input
          type="text"
          name="major"
          value={form.major || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Major"
        />

        <input
          type="text"
          name="jobTitle"
          value={form.jobTitle || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Current Job Title"
        />

        <input
          type="text"
          name="company"
          value={form.company || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Company"
        />

        <input
          type="text"
          name="industry"
          value={form.industry || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Industry"
        />

        <input
          type="text"
          name="location"
          value={form.location || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Location"
        />

        <input
          type="url"
          name="linkedin"
          value={form.linkedin || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="LinkedIn URL"
        />

        <input
          type="url"
          name="website"
          value={form.website || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Personal Website"
        />

        <div className="flex flex-col gap-2">
          <label>
            <input
              type="checkbox"
              name="openToMentorship"
              checked={form.openToMentorship || false}
              onChange={handleChange}
            />
            Open to Mentorship
          </label>
          <label>
            <input
              type="checkbox"
              name="openToInternships"
              checked={form.openToInternships || false}
              onChange={handleChange}
            />
            Open to Internships
          </label>
          <label>
            <input
              type="checkbox"
              name="openToReferrals"
              checked={form.openToReferrals || false}
              onChange={handleChange}
            />
            Open to Referrals
          </label>
        </div>

        <textarea
          name="bio"
          value={form.bio || ""}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Tell us a bit about yourself..."
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Update Profile
        </button>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      </form>
    </div>
  );
}

export default EditProfile;
