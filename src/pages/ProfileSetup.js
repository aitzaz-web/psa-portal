import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../AuthContext";
import { db } from "../firebase";

function ProfileSetup() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    role: "Student",
    gradYear: "2026",
    major: "",
    location: "",
    jobTitle: "",
    company: "",
    industry: "",
    linkedin: "",
    website: "",
    openToMentorship: false,
    openToInternships: false,
    openToReferrals: false,
    bio: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        ...form,
        email: user.email,
        uid: user.uid,
        timestamp: new Date(),
      });

      console.log("✅ Profile saved");
      navigate("/network");
    } catch (err) {
      console.error("❌ Error saving profile:", err);
      setError("Could not save profile. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
          Complete Your Profile
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
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
          placeholder="Graduation Year"
          value={form.gradYear}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="text"
          name="major"
          placeholder="Major"
          value={form.major}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="text"
          name="jobTitle"
          placeholder="Current Job Title"
          value={form.jobTitle}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="text"
          name="industry"
          placeholder="Industry"
          value={form.industry}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="text"
          name="location"
          placeholder="Location (e.g., Ithaca, NY)"
          value={form.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={form.linkedin}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="url"
          name="website"
          placeholder="Personal Website (optional)"
          value={form.website}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="openToMentorship"
              checked={form.openToMentorship}
              onChange={handleChange}
            />
            Open to Mentorship
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="openToInternships"
              checked={form.openToInternships}
              onChange={handleChange}
            />
            Open to Internships
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="openToReferrals"
              checked={form.openToReferrals}
              onChange={handleChange}
            />
            Open to Referrals
          </label>
        </div>

        <textarea
          name="bio"
          placeholder="Tell us a bit about yourself..."
          value={form.bio}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          rows={3}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Save Profile
        </button>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      </form>
    </div>
  );
}

export default ProfileSetup;
