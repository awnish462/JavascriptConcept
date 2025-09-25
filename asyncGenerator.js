async function* asyncGenerator() {
    yield 1;
    yield 2;
    yield 3
}

(async()=>{
    for await(data of asyncGenerator()){
        console.log(data);
    }
})();