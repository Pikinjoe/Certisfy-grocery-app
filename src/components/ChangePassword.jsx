import { useState } from "react";
import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = () => {
    if (newPassword && newPassword === confirmPassword) {
      updateUser({ ...user, password: newPassword });
      setNewPassword("");
      setConfirmPassword("");
      setIsEditing(false);
    } else {
      toast.info("Passwords must match and cannot be empty.");
    }
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      {!isEditing ? (
        <button
          className="bg-primary text-white py-2 px-4 rounded-lg"
          onClick={() => setIsEditing(true)}
        >
          Edit Password
        </button>
      ) : (
        <>
          <h3 className="font-semibold mb-2">Change Password</h3>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
            placeholder="New password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Confirm password"
          />
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400"
              onClick={() => {
                setIsEditing(false);
                setNewPassword("");
                setConfirmPassword("");
              }}
            >
              Cancel
            </button>
            <button
              className="bg-primary text-white py-2 px-4 rounded-lg hover:opacity-80"
              onClick={handleUpdatePassword}
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChangePassword;
