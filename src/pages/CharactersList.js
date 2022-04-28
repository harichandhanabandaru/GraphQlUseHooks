import React from 'react'
// import {useQuery,gql} from '@apollo/client';
import {useCharacters} from "../hooks/useCharacters";
import './CharactersList.css';
import {
  Link,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";

// const GET_CHARACTERS =gql`
// query{
//     characters{
//         results{
//             id
//             name
//             image
//         }
//     }
// }
// `

export default function CharactersList(){
    // const {error,data,loading} =useQuery(GET_CHARACTERS);
    // console.log({error,data,loading})

    const {error,loading,data} =useCharacters();

    if(loading) return <div>spinner ...</div>
    if(error) return <div>something went wrong</div>
    return <div className="CharacterList">
        {data.characters.results.map(character =>{
            return <Link  to={`/${character.id}`}>
                <img src={character.image} alt="image"/>
                <h1>{character.name}</h1>
            </Link>
        })}
    </div>;
}