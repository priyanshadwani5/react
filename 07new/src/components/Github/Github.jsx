import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <p>GitHub Followers: {data.followers}</p>
      <img
        src={data.avatar_url}
        width={300}
        alt="GitHub Avatar"
        className="mx-auto rounded-full mt-4"
      />
    </div>
  );
}

export default Github;

// ✅ Fixed loader with GitHub API
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/priyanshadwani5");

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user data");
  }

  return response.json();
};
