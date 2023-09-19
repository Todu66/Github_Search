import React, { useEffect, useState } from "react";
import "../../src/index.css";
import Location from "../assets/location.png";
import Twitter from "../assets/twitter.png";
import Url from "../assets/url.png";
import axios from "axios";

function apiResult() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [octocatData, setOctocatData] = useState(null);

  const apiUrl = `https://api.github.com/users/${username || "octocat"}`;

  const fetchData = () => {
    if (username) {
      axios
        .get(apiUrl)
        .then((response) => {
          // Set user data
          setUserData(response.data);
          console.log("User Data:", response.data);
          setNotFound(false); // Reset notFound state
        })
        .catch((error) => {
          // Handle error and set notFound state if necessary
          console.error("Error fetching data:", error);
          setNotFound(true);
          setUserData(null); // Clear user data on error
        });
    } else {
      // Fetch "octocat" data when the component is mounted or username is empty
      axios
        .get("https://api.github.com/users/octocat")
        .then((response) => {
          // Set "octocat" data
          setOctocatData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching octocat data:", error);
          setOctocatData(null); // Clear "octocat" data on error
        });
    }
  };

  useEffect(() => {
    // Fetch data when the component initially mounts
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-5 relative">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-4 px-2 bg-[#F6F8FF] rounded-xl text-left w-96"
        />
        <button
          onClick={fetchData}
          className="bg-[#0079FF] rounded-xl text-center text-white absolute ml-auto top-2 left-0 right-4 w-1/5 py-2"
        >
          Search
        </button>
      </div>

      {/* Display user information */}
      <div className="mt-6">
        {(username || octocatData) && (
          <div className="flex flex-row justify-around">
            <img
              className="w-20 h-20 rounded-3xl"
              src={(userData || octocatData)?.avatar_url || "Not Available"}
              alt="Profile"
            />
            <div>
              <h3 className="text-black font-semibold">{(userData || octocatData)?.login || "Not Available"}</h3>
              <p className="text-sky-500">@{(userData || octocatData)?.login || "Not Available"}</p>
              <p className="text-neutral-500">
                Joined {new Date((userData || octocatData)?.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
        {/* Additional user information */}
        {(userData || octocatData) && (
          <p className="text-neutral-500">{(userData || octocatData)?.bio || "Not Available"}</p>
        )}
        <div className="flex justify-center gap-5 rounded-lg p-3 bg-slate-100">
          <div className="flex flex-col">
            <p>Repos</p>
            <p>{(userData || octocatData)?.public_repos || "Not Available"}</p>
          </div>
          <div className="flex flex-col">
            <p>Followers</p>
            <p>{(userData || octocatData)?.followers || "Not Available"}</p>
          </div>
          <div className="flex flex-col">
            <p>Following</p>
            <p>{(userData || octocatData)?.following || "Not Available"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <img src={Location} alt="Location" />
            <p>{(userData || octocatData)?.location || "Not Available"}</p>
          </div>
          <div className="flex gap-3">
            <img src={Url} alt="Website" />
            <p>{(userData || octocatData)?.blog || "Not Available"}</p>
          </div>
          <div className="flex gap-3">
            <img src={Twitter} alt="Twitter" />
            <p>{(userData || octocatData)?.twitter_username || "Not Available"}</p>
          </div>
        </div>
      </div>

      {notFound && (
        <div className="text-center mt-6">
          <p className="">No Result</p>
        </div>
      )}
    </div>
  );
}

export default apiResult;
