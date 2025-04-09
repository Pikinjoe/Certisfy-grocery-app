import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getUserById, updateUser } from './services/api'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Store logged in user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Check if user is already logged in from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  //Login function
  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  //Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = async (updatedUser) => {
    try {
      const serverUser = await updateUser(user.id, updatedUser);
      setUser(serverUser.data);
      localStorage.setItem("user", JSON.stringify(serverUser.data));
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
      console.error("Error updating user:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
