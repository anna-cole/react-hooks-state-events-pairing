import React, {useState} from "react";

function VideoDetails({ video }) {
  let [upVote, setUpVote] = useState(video.upvotes) 
  let [downVote, setDownVote] = useState(video.downvotes)

  function increaseVote() {
    setUpVote(upVote + 1)
  }

  function decreaseVote() {
    setDownVote(downVote + 1)
  }
  
 return (
   <div>
    <h1>{video.title}</h1>
    <p>{`${video.views} Views | Uploaded ${video.createdAt}`}</p>
    <button onClick={increaseVote}>{upVote} 👍</button> 
    <button onClick={decreaseVote}>{downVote} 👍</button>
   </div>              
  )
}

export default VideoDetails