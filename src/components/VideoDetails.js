import React, {useState} from "react";

function VideoDetails({ video, onClickButton, hideComments }) {
  let [upVote, setUpVote] = useState(0) 
  let [downVote, setDownVote] = useState(0)

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
    <button onClick={decreaseVote}>{downVote} 👍</button><br></br>
    <button onClick={onClickButton}>{hideComments ? 'Hide Comments' : 'Show Comments'}</button> {/*aumentar o espaco entre linhas aqui*/}
   </div>              
  )
}

export default VideoDetails