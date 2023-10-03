import React, {useState} from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import VideoDetails from "./VideoDetails.js";
import Comments from "./Comments";

function App() {
  //console.log("Here's your data:", video);
  let [hideComments, setHideComments] = useState('Hide Comments')

  function toggleHideComments() {
    hideComments = !hideComments
    setHideComments(hideComments)
  }

  return (
   <div className="App">
    <Video video={video}/>
    <VideoDetails video={video} onClickButton={toggleHideComments} hideComments={hideComments}/>
    <Comments video={video}/>
   </div>
  )
}

export default App;
