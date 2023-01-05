// Modal Config.
const modal = document.querySelector('.modal')
const overlay =  document.querySelector('.overlay')
let openModalBtn = document.querySelector('.btn-open')
const closeModalBtn = document.querySelector('.btn-close')

const openModal = function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

openModalBtn.addEventListener('click', openModal)

const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)



let dateOpenTask = document.querySelector('.dateOpenTask')
let inputTitle = document.querySelector('.modalTitle')
let inputDescription = document.querySelector('.inputDescription')
let buttonSalve = document.querySelector('#buttonSalve')
let amount = document.querySelector('.amount')
// Onde vou armazenar tarefas abertas
const openTasks = []
// objeto que será a task (tela do modal)



const allTasks = document.querySelector('.allTasks')

const showTask = function() { 

    const popupWrapper = document.querySelector('.popupWrapper')
    const popupClose = document.querySelector('.popupClose')

   if ( inputTitle.value == '' || inputDescription.value == '' ) {
    
    buttonSalve.addEventListener('click', () => {
        popupWrapper.classList.remove('hiddenTasks')
    })
    
    popupClose.addEventListener('click', () => {
        popupWrapper.classList.add('hiddenTasks')
        return
    })

    } else {

    const newTask = {
        id: openTasks.length,
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        day: new Date().getDay(),
        month: new Date().getMonth(),
        taskTitle: inputTitle.value,
        taskDescription: inputDescription.value
    
    }

    openTasks.push(newTask)

    let htmlTasks = ''

    for (let index = 0; index <= openTasks.length - 1; index++) {

        htmlTasks += `
        <div class="task">
            <p class="taskDescription">
                ${openTasks[index].taskDescription}
            </p>
        </div>
        <div class="taskName">
            <img src="/assets/Vector.svg" alt="icon">
            <p>
                ${openTasks[index].taskTitle}
            </p>
        </div>
        `
    }

    allTasks.innerHTML = htmlTasks
    amount.innerHTML = `${openTasks.length}`
}
return
}

buttonSalve.addEventListener('click', closeModal)
buttonSalve.addEventListener('click', showTask)



// Onde vou armazenar tarefas em andamento
const progressTasks = []

// Onde vou armazenar tarefas concluidas
const doneTasks = []




