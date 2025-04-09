import { useState } from "react";
import { useAuth } from "../AuthContext";

const UpdatePhoto = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null);

  const handleUpdatePhoto = async () => {
    if (newPhoto) {
      try {
        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append("photo", newPhoto);

        // Send the file to the server
        const response = await fetch(`http://localhost:8000/user/${user.id}/upload-photo`, {
          method: "POST", // or PUT, depending on your API
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to upload photo");
        }

        const updatedUser = await response.json(); // Expect the server to return the updated user with a new photoUrl
        updateUser(updatedUser); // Update the user with the server response
        setNewPhoto(null);
        setIsEditing(false);
      } catch (error) {
        console.error("Error uploading photo:", error);
      }
    }
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      {!isEditing ? (
        <button
          className="bg-primary text-white py-2 px-4 rounded-lg"
          onClick={() => setIsEditing(true)}
        >
          Edit Photo
        </button>
      ) : (
        <>
          <h3 className="font-semibold mb-2">Update Profile Photo</h3>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewPhoto(e.target.files[0])}
            className="w-full p-2 border rounded-md mb-4"
          />
          {newPhoto && (
            <img
              src={URL.createObjectURL(newPhoto)}
              alt="Preview"
              className="h-20 w-20 rounded-full mb-4"
            />
          )}
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400"
              onClick={() => {
                setIsEditing(false);
                setNewPhoto(null);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-primary text-white py-2 px-4 rounded-lg hover:opacity-80"
              onClick={handleUpdatePhoto}
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UpdatePhoto;
