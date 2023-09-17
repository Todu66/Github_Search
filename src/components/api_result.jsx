import React, { useState } from "react";
import "../../src/index.css"
function apiResult() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchData = () => {
    // Make a GET request to the GitHub API
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error and display a message to the user
      });
  };

  return (
    <div className="flex flex-col">
      <div className="gap-5">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 px-7 bg-[#F6F8FF] rounded-xl text-center"
        />
        <button onClick={fetchData} className="p-2 bg-[#0079FF] rounded-xl text-white">Search</button>

      </div>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          {/* <p>joined: {userData.avatar_url}</p> */}
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>created: {userData.created_at}</p>
          <p>bio: {userData.bio}</p>
          <p>following: {userData.following}</p>
          <p>location: {userData.location}</p>
          {/* Add more data as needed */}
        </div>
      )}
    </div>
  );
}

export default apiResult;
