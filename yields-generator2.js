function* testMe(){
    yield value = 0
    yield value = 1
    yield value = 2
    yield value = 3
}

var gen = testMe();

console.log(typeof gen)

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
