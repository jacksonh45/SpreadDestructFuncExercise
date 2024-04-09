const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus`,
    `Dilophosaurus`
]

function seeDinos(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

seeDinos(...jPDinos)

const jPCharacters = {
    alanGrant:`Sam Neill`,
    ellieSattler:`Laura Dern`,
    ianMalcolm:`Jeff Goldblum`
}

const seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);   
}
seeCharacters(jPCharacters)