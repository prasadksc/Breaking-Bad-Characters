import React from 'react';
import CharacterItem from './CharacterItem';



const Characters = ({characters}) => {
    return (  <div className="cards">
    {characters.map((character) => (
    <CharacterItem
    key={character.char_id}
    id={character.char_id}
    img ={character.img}
    name={character.name}
    birthday={character.birthday}
    occupation={character.occupation}
    status={character.status}
    />
))}
</div>);
}
 
export default Characters;

    