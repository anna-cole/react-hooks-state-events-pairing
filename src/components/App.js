import video from "../data/video.js";
import Video from "./Video.js";
import VideoDetails from "./VideoDetails.js";
import Comments from "./Comments";

function App() {
  //console.log("Here's your data:", video);
  
  return (
   <div className="App">
    <Video video={video}/>
    <VideoDetails video={video}/>
    <Comments video={video}/>
   </div>
  )
}

export default App;
