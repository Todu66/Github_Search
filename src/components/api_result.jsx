import React, { useState } from "react";
import "../../src/index.css";
import Cat from "../assets/Oval.png";
import Location from "../assets/location.png"
import Build from "../assets/build.png"
import Twitter from "../assets/twitter.png"
import Url from "../assets/url.png"



function apiResult() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const fetchData = () => {
    // Make a GET request to the GitHub API
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
          setUserData(null); // Clear any previous user data
          return null;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          setUserData(data);
          setNotFound(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error and display a message to the user
      });
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-5 relative ">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-4 px-2 bg-[#F6F8FF] rounded-xl text-left w-96"
        />
        <button
          onClick={fetchData}
          className="bg-[#0079FF] rounded-xl text-center  text-white absolute ml-auto top-2  left-0 right-4 w-1/5 py-2"
        >
          Search
        </button>
      </div>

      {/* returned header */}
      <div className="flex flex-col gap-3 mt-6 ">
        <div className="flex flex-row justify-around">
          <img src={Cat} />
          {/* The Username @ tag and tie he joined on Github */}
          <div>
            <h3 className="text-black font-semibold">The Octocat</h3>
            <p className="text-sky-500">@octcat</p>
            <p className="text-neutral-500">Joined 25 Jan 2011</p>
          </div>
        </div>
        {/* lorem text */}
        <lorem className="text-neutral-500">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </lorem>

        {/* Repos Followers and Followind */}

        <div className="flex justify-center gap-5 rounded-lg p-3 bg-slate-100">
          <div className="flex flex-col">
            <p>Repos</p>
            <p>8</p>
          </div>
          <div className="flex flex-col">
            <p>Followers</p>
            <p>3938</p>
          </div>
          <div className="flex flex-col">
            <p>Following</p>
            <p>9</p>
          </div>
        </div>
        
        {/* info about location twitter linked */}
        
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <img src={Location} />
            <p>San Francisco</p>
          </div>
          <div className="flex gap-3">
            <img src={Url} />
            <p>https://github.blog</p>
          </div>
          <div className="flex gap-3">
            <img src={Twitter} />
            <p>Not Available</p>
           </div>
          <div className="flex gap-3">
            <img src={Build} />
            <p>Not Available</p>
          </div>
        </div>



      </div>
      {/* {notFound && (
        <div className="text-center">
          <p className="">No Result</p>
        </div>
      )}
      {userData && !notFound && (
        <div>
          <p>Name: {userData.name}</p>
          
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>created: {userData.created_at}</p>
          <p>bio: {userData.bio}</p>
          <p>following: {userData.following}</p>
          <p>location: {userData.location}</p>
          
        </div>
      )} */}
    </div>
  );
}

export default apiResult;
