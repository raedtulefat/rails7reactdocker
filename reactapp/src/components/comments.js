import React from 'react'

function Comments(props) {
  return <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      {props.comments.map((comment) => {
        return <div key={comment.id}>
          <h2>{comment.subject}</h2>
          <p>{comment.body}</p>
        </div>
      })}
    </div>;
}

export default Comments
