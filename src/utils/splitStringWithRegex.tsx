function splitStringWithRegex(inputstring: string): string[] {
    const characters: string[] = [];
    const regex = /[\s\s]/g;

    let match;

    while( (match = regex.exec(inputstring)) !== null ){ 
        characters.push(match[0]);
    }

    return characters;

}
export default splitStringWithRegex;