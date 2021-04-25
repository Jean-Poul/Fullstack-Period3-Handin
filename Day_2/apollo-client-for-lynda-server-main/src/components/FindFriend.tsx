/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client"
import ILyndaFriend from "../interfaces/interfaces"


// interfaces to be able to have typecheck
interface iFriendResult {
  getFriend: ILyndaFriend
}

interface IVariableInput {
  id: string
}

// A named query (getFriend)
const GET_FRIEND = gql`
 query getFriend($id:ID){
  getFriend(id:$id) {
    id
    email
    age
    firstName
    lastName
    gender
  }
}
`

export default function FindFriend() {
  const [id, setId] = useState("")
  // getFriend = callback to use the query, loading = is it loading, called = has it been called(network call), data = will contain the data when it is available
  // LazyQuery because the query has to wait to get executed till when I push the button
  const [getFriend, { loading, called, data }] = useLazyQuery<iFriendResult, IVariableInput>(
    GET_FRIEND,
    { fetchPolicy: "cache-and-network" }
  );

  const fetchFriend = () => {
    alert(`Find friend with id: ${id}`)
    getFriend({ variables: { id: id } }) // shortcut id:id = id
  }

  return (
    <div>
      ID:<input type="txt" value={id} onChange={e => {
        setId(e.target.value)
      }} />
      &nbsp; <button onClick={fetchFriend}>Find Friend</button>
      <br />
      <br />

      {called && loading && <p>Loading...</p>}
      {data && (
        <div>
          <p>{data.getFriend.firstName}</p>
          <p>{data.getFriend.lastName}</p>
        </div>
      )}

      <h2>Fetch a friend using the provided id</h2>

    </div>)
}
