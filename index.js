const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    return cats.push('Ralph')
};

function destructivelyPrependCat(){
    return cats.unshift("Bob")
};

function destructivelyRemoveLastCat(){
    return cats.pop()
};

function destructivelyRemoveFirstCat(){
    return cats.shift()
};

function appendCat(){
    const newCats = [
        ...cats, 
        "Broom",]
    return newCats
}; 

function prependCat(){
    const gato = [
        "Arnold",
        ...cats,]
    return gato 
}; 

function removeLastCat(){
    const mao = [...cats.slice(0,2)]
    return mao
};

function  removeFirstCat(){
    const feline = [...cats.slice(-2)]
    return feline
}; 