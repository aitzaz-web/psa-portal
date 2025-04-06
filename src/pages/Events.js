import { useState } from "react";

function Events() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event submitted (but not saved yet!)");
    // Later: Send image + description to backend/Firebase
  };

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Submit a PSA Event
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-green-50 p-6 rounded-xl shadow-md space-y-4"
        >
          <label className="block text-gray-700 font-medium">Event Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded-md"
          />

          <label className="block text-gray-700 font-medium">
            Event Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full border p-2 rounded-md"
            placeholder="Write something about the event..."
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Post Event
          </button>
        </form>

        {image && (
          <div className="mt-8 text-center">
            <h2 className="text-lg font-semibold mb-2">Preview:</h2>
            <img
              src={image}
              alt="Preview"
              className="w-full max-w-sm mx-auto rounded-md shadow-md mb-4"
            />
            <p className="text-gray-700">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
