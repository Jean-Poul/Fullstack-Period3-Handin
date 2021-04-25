import React, { useState } from "react";

import { gql, useQuery } from '@apollo/client';

import DogPhoto from './DogPhoto'


const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

export default function Queries({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
    <DogPhoto />
    </div>
  );
}
// <p>Add code for the <a href="https://www.apollographql.com/docs/react/data/queries/">Apollo Queries Examples (Dog)</a> </p>

// Whenever Apollo Client fetches query results from your server, it automatically caches those results locally. This makes subsequent executions of the same query extremely fast.