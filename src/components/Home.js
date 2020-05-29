import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(user);

  return (
    <div>
      {!user && <h1>Welcome Home COOL DUDE!</h1>}
      {user && <h1>Welcome Back {user.name}!</h1>}
    </div>
  );
};

export default Home;
