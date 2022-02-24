// let x = 'Carmen'

// console.log(x)

// const y = 'Luis'

// console.log(y)

// console.log(`${x} fernando`)

const array = [1, 2, 3, 4, 5, 'string', [1, 2, 3, 4]]

array.map((elemento) => {
    console.log(elemento)
})

const filter = array.filter((elemento) => elemento > 2)

console.log(filter)