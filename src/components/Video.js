function Video({ video }) {
 return (
    <iframe
    width="719"
    height="400"
    src={video.embedUrl}
    frameBorder="0"
    allowFullScreen
    title={video.title}
    />               
  )
}

export default Video

