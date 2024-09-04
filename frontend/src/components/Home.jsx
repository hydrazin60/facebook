import React from "react";
import Post from "./Post";
import POsts from "./POsts";

export default function Home() {
  return (
    <div className="mt-16 w-[35%] mx-auto flex flex-col gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 6].map((data) => (
        <POsts key={data} />
      ))}
    </div>
  );
}
