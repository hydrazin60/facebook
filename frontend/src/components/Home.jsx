import React from "react";
import Post from "./Post";
import POsts from "./POsts";

export default function Home() {
  return (
    <div className="mt-16 w-[35%] mx-auto flex flex-col gap-4">
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          laboriosam ipsam iusto perspiciatis nam enim iste magni velit dolorum,
          cupiditate hic est quam dolores eum fuga vitae veniam voluptas ipsa!
        </p>
      </div>
      <div>
        {[1, 2, 3, 4, 5].map((data) => (
          <>
            <POsts key={data} />
          </>
        ))}
      </div>
    </div>
  );
}
