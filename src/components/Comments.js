import React, {useState} from "react";

function Comments({ video }) {
  let [hideComments, setHideComments] = useState('Hide Comments')

  function hideShowComments() {
    hideComments = !hideComments
    setHideComments(hideComments)
  }

  return (
    <div>
      <button onClick={hideShowComments}>{hideComments ? 'Hide Comments' : 'Show Comments'}</button> 
      <div className={hideComments? '' : 'displayNone'}>
        <h3>{`${video.comments.length} Comments`}</h3>
        {video.comments.map(comment => 
          <div key={comment.id}>
            <strong>{comment.user}</strong>
            <p>{comment.comment}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Comments