import React, { useContext } from "react";
import { useAuth } from "../providers/auth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
};

export default Profile;
