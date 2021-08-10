import _ from 'lodash';

export function paginate(allCharacters,pageNumber,pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
    return _(allCharacters).slice(startIndex).take(pageSize).value();
}