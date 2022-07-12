import {getPeople} from './StarWarsService.js';

async function main() {
    const starWarsPeople = await getPeople(1);

//utlizando o FOR tradicional    

    // for(let i = 0; i < starWarsPeople.length; i++){
    //     console.log(starWarsPeople[i].name);
    // }

//utilizando o FOR IN

    // for(let propriedadePerson in starWarsPeople[0]){
    //     console.log(propriedadePerson);
    // }

//utilizando o FOR OF

    for(let person of starWarsPeople){
        console.log(person.name);
    }

}

main();