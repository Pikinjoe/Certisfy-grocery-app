import { useState } from "react";
import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";

const ChangeEmail = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState(user?.email || "");

  const handleUpdateEmail = () => {
    if (
      newEmail.trim() &&
      newEmail !== user.email &&
      /\S+@\S+\.\S+/.test(newEmail)
    ) {
      updateUser({ ...user, email: newEmail });
      setIsEditing(false);
    } else {
      toast.info("Please enter a valid email address.");
    }
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      {!isEditing ? (
        <button
          className="bg-primary text-white py-2 px-4 rounded-lg"
          onClick={() => setIsEditing(true)}
        >
          Edit Email
        </button>
      ) : (
        <>
          <h3 className="font-semibold mb-2">Change Email Address</h3>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
            placeholder="New email address"
          />
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400"
              onClick={() => {
                setIsEditing(false);
                setNewEmail(user.email);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-primary text-white py-2 px-4 rounded-lg hover:opacity-80"
              onClick={handleUpdateEmail}
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChangeEmail;
