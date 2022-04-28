import React from 'react'
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

function Character(props) {

    const {id} = props.id

   const {data,loading,error} = useCharacter(id);

   console.log({error,loading,data});

   if(error) return <div>Something went wrong</div>

   if(loading) return <div>spinner</div>
  return (
    <div className="Character">
        <img src={data.character.image} width={750} height={75} alt="alt"/>
        <div className=" character-content">
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className="Character-episode">
                {data.charactr.episode.map(episode=>{
                    return <div>
                        {episode.name} - <b>{episode.episode}</b>
                    </div>
                })}
            </div>
        </div>
        </div>
  )
}

export default Character;