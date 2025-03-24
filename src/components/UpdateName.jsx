import { useState } from "react";
import { useAuth } from "../AuthContext";

const UpdateName = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user?.fullName || "");

  const handleUpdateName = () => {
    if (newName.trim() && newName !== user.fullName) {
      updateUser({ ...user, fullName: newName });
      setIsEditing(false);
    }
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      {!isEditing ? (
        <button
          className="bg-primary text-white py-2 px-4 rounded-lg"
          onClick={() => setIsEditing(true)}
        >
          Edit Name
        </button>
      ) : (
        <>
          <h3 className="font-semibold mb-2">Update Name</h3>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Enter new name"
          />
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400"
              onClick={() => {
                setIsEditing(false);
                setNewName(user.fullName);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-primary text-white py-2 px-4 rounded-lg hover:opacity-80"
              onClick={handleUpdateName}
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UpdateName;
