export const forChangesin=(obj,array,to)=>{
    //Takes the obj to which for every element in array works as key to which it is mapped to a to index????
        const obje=obj;
        array.forEach((element,index) => {
            obje[element]=to[index]
        });
        return obje
}