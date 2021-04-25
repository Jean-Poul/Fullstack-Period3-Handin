/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
// When something begins with 'use' it is a hook
import { useQuery, gql } from "@apollo/client"
import ILyndaFriend from "../interfaces/interfaces"

interface IFriends {
  allFriends: ILyndaFriend[]
}

// gql is a function where I pass the query as a parameter
export const ALL_FRIENDS = gql`
query {
  allFriends {
    id
    firstName
    lastName
    gender
    email
    age
  }
}
`

export default function All() {
  const { loading, error, data, refetch } = useQuery<IFriends>(
    ALL_FRIENDS,
    {
      // fetchPolicy: "cache-and-network"
    fetchPolicy: "cache-first"
      //pollInterval: 1000
    }
  )

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error.toString()}</p>

  return (
    <div>

      <table className="table">
        <thead>
          <tr><th>ID</th><th>First name</th><th>Last name</th><th>Gender</th><th>email</th><th>age</th></tr>
        </thead>
        <tbody>
          {data && data.allFriends.map(f => (
            <tr key={f.id}><td>{f.id}</td><td>{f.firstName}</td><td>{f.lastName}</td><td>{f.gender}</td><td>{f.email}</td><td>{f.age}</td></tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => refetch()}>Refetch</button>

    </div>
  )
}