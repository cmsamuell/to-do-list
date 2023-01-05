// Declarar o array
// Inserir algo dentro do array na primeira posição
// Inserir algo dentro do array na ultima posição
// Indicar em qual posição do array deve ser inserida o item


function findIndexOnArray(id) {
    const findIndex = array.findIndex(function (element) {
        console.log('element =>>>', element)
        return element.id === id
    })

    return findIndex
}

// Declarou o array
const array = []
const objStart = {
    id: 1,
    name: 'Yan Cesar',
    age: 22
}

array.unshift(objStart)
array.unshift({
    id: 0,
    name: 'Samuel',
    age: 26
})

array.push({
    id: 2,
    name: 'Tallita',
    age: 22
})

const index = findIndexOnArray(2)

console.log('index', index)

array.splice(index, 0, {
    id: 3,
    name: 'isac',
    age: 21
})


for (let index = 0; index < array.length - 1; i++) {
    element.innerHtml = `
    <div class="tasks">
    <div class="task">
        <p class="taskDescription">
            ${array[index].title}
        </p>
    </div>
    <div class="taskName">
        <img src="/assets/Vector.svg" alt="icon">
        <p>Estudar JS</p>
    </div>
</div>
    `

}



console.log(array)