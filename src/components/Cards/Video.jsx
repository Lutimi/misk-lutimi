import React from "react";

function Video(props) {
  return (
    <div className="Video-Crd drop-shadow-2xl bg-white p-4 rounded-2xl space-x-8 flex flex-row ">
      <iframe
        className=" w-2/4 rounded-2xl aspect-video  "
        src= {props.url}
      ></iframe>

      <div className="Video-Text flex flex-col py-4  text-base w-full text-black justify-between">
        <h1 className="title font-medium">{props.title}</h1>
        <h1 className="text-gray-700 font-light">Updated Time: {props.time}</h1>
        <h1 className="font-medium">Channel title: {props.channel}</h1>
        <h1 className="text-gray-700 font-light">{props.description}</h1>
      </div>
    </div>
  );
}

export default Video;
