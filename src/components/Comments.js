
function Comments({ video }) {
  return (
    <div>
      <h3>{`${video.comments.length} Comments`}</h3>
      {video.comments.map(comment => 
        <div key={comment.id}>
          <strong>{comment.user}</strong>
          <p>{comment.comment}</p>
        </div>
      )}
    </div>
  )
}

export default Comments