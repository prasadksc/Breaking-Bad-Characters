
import React from 'react'


const CharacterPage = (props) => {

    const {characters,quotes} = props;


    const id = props.match.params.id


    function getCourseById(characters, id) {
        const char_id = parseInt(id)
        const char = characters.filter(c => c.char_id === char_id );
        if (char) return char[0];
        return null;
    }
    
    //fetch the objects one by one
    const character = getCourseById(characters, id)



    function getQuotesByCharacter(quotes, character) {
        const quote = quotes.filter(q => q.author === character.name);
        if(quote) return quote[0];
        return null;
    }

    const quoteByCharacter = getQuotesByCharacter(quotes,character)






    return(
          <div className="page">
             <div className="page-info">
                 <pre>
                     <h3><strong>Name          : </strong>{character.name}</h3>
                     <h3><strong>Date of Birth : </strong>{character.birthday}</h3>
                     <h3><strong>Occupation    : </strong>{character.occupation}</h3>
                     <h3><strong>Status        : </strong>{character.status}</h3>
                     <h3><strong>Nickname      : </strong>{character.nickname}</h3>
                     <h3><strong>Portrayed     : </strong>{character.portrayed}</h3>
                     <h3><strong>Appearance    : </strong>{character.appearance.join(',')}</h3>
                     {quoteByCharacter ? <h3><strong>Quote         : </strong>{quoteByCharacter.quote}</h3> : ''}
                 </pre>
             </div>
          </div>
    )}
 
export default CharacterPage;