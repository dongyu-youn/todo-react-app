import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

import PictureCard from "../components/PictureCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return fetch(`/videos/${keyword ? "picture" : "picture"}.json`)
      .then((res) => res.json())
      .then((data) => data);
  });
  return (
    <>
      <div>Videos {keyword ? `🔎${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <PictureCard Card key={video.id} video={video}></PictureCard>
          ))}
        </ul>
      )}
    </>
  );
}
