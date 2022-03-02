import React from 'react'

function Users(props) {
  return <div>
      <h1 className="text-3xl font-bold">
        Current users in the database
      </h1>

      {props.users.map((user) => {
        return <div key={user.id}>
          <h2>id: {user.id}, email: {user.email}</h2>
        </div>
      })}
    </div>;
}

export default Users
