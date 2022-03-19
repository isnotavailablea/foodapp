export const forChangesin=(obj,array,to)=>{
    //Takes the obj to which for every element in array works as key to which it is mapped to a to index????
        const obje=obj;
        console.log(obje,array,to)
        array.forEach((element,index) => {
            obje[element]=to[index]
        });
        console.log("in changeloginpath",obje)
        return obje
}