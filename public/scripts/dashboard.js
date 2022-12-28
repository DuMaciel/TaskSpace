// variable corresponding to the data that I will receive from the server updated and returned
const boards = [
    {
        id: 1,
        title: 'Meu Board',
        taskCount: 7,
        columns: [{
            id: 1,
            title: "Coluna 1",
            tasks:  [{id: 1, title: 'Minha task 1', descripition: 'minha task bla bla'}, {id: 2, title: 'Minha task 2', descripition: 'minha task bla bla'},{id: 3, title: 'Minha task 3', descripition: 'minha task bla bla'}, {id: 4, title: 'Minha task 4', descripition: 'minha task bla bla'}]
        },
        {
            id: 2,
            title: "Coluna 2",
            tasks: [{id: 5, title: 'Minha task 5', descripition: 'minha task bla bla'}, {id: 6, title: 'Minha task 6', descripition: 'minha task bla bla'}, {id: 7, title: 'Minha task 7', descripition: 'minha task bla bla'}]
        }],
    },
    {
        id: 2,
        title: 'Meu Board 2',
        taskCount: 7,
        columns: [{
            id: 1,
            title: "Coluna 1",
            tasks:  [{id: 1, title: 'Minha task 1', descripition: 'minha task bla bla'}, {id: 2, title: 'Minha task 2', descripition: 'minha task bla bla'},{id: 3, title: 'Minha task 3', descripition: 'minha task bla bla'}, {id: 4, title: 'Minha task 4', descripition: 'minha task bla bla'}]
        },
        {
            id: 2,
            title: "Coluna 2",
            tasks: [{id: 5, title: 'Minha task 5', descripition: 'minha task bla bla'}, {id: 6, title: 'Minha task 6', descripition: 'minha task bla bla'}, {id: 7, title: 'Minha task 7', descripition: 'minha task bla bla'}]
        }],
    }
];

const areaBoards = document.getElementById('boards')

const navBoards = document.getElementById('navBoards')

const butCreateBoard = document.getElementById('createBoard')

const taskModal = document.getElementById('taskModal')

butCreateBoard.addEventListener('click', () => {
    let id = boardIdGenerator()
    boards.push({id, title: 'New Board', columns: [], tasks: []})
    createBoard(id)
})

// board builder and the functions it depends on ----------------------------------
function createBoard(id ,name = '', arrayColumn = []){
    // creating board item and your configuration
    const board = document.createElement('div')
    board.dataset.boardId = id
    board.classList.add('board')

    const columns = document.createElement('div')
    columns.classList.add('columns')
    //add all columns 
    arrayColumn.forEach((column)=>{
        columns.appendChild(column)
    })
    board.appendChild(columns)

    const butCreateColumn = document.createElement('button')
    butCreateColumn.classList.add('createColumn')
    butCreateColumn.innerText = '+'
    butCreateColumn.addEventListener('click', () => {
        columns.appendChild(createColumn())

    })
    board.appendChild(butCreateColumn)

    areaBoards.appendChild(board)

    // creating nav item and your configuration
    const navBoard = document.createElement('li')
    navBoard.id = `board${id}`
    
    const titleBoard = document.createElement('input')
    titleBoard.classList.add('titleBoard')
    titleBoard.type= 'text'
    titleBoard.placeholder= 'New Board'
    titleBoard.maxLength= 20
    titleBoard.readOnly= true
    titleBoard.value= name
    titleBoard.addEventListener('dblclick', ()=> {titleBoard.readOnly= false})
    titleBoard.addEventListener('focusout', ()=> {
        titleBoard.readOnly= true
        boardRefreshName(id, titleBoard.value)
    })
    navBoard.appendChild(titleBoard)

    navBoard.addEventListener('click', () => activeBoard(navBoard, board))
    navBoards.appendChild(navBoard)

    return navBoard
}

function activeBoard(navBoard, board){
    deactivateAll()
    navBoard.classList.add('active')
    board.classList.add('active')
}

function deactivateAll(){
    // remove all 'active' from navs and boards 
    const areaBoardsChildrens = document.querySelectorAll('#boards > div')
    const navBoardsChildrens = document.querySelectorAll('#navBoards > li')
    navBoardsChildrens.forEach((item,index)=>{
        item.classList.remove('active')
        areaBoardsChildrens[index].classList.remove('active')
    })
}

function boardIdGenerator(){
    let i;
    let exist = false;
    for(i=1 ; ; i++){
        for(j=0; j<boards.length; j++){
            if(boards[j].id == i){
                exist = true;
                break;
            }
        }
        if(!exist){
            return i
        }else{
            exist = false
        }
    }
}

function boardRefreshName(id, title){
    boards.forEach(board => {
        if(board.id == id){
            board.title = title
        }
    })
}


// column builder and the functions it depends on ----------------------------------
function createColumn(id, name = '', arrayTask = []){
    const column = document.createElement('div')
    column.dataset.columnId = id
    column.classList.add('column')

    const titleColumn = document.createElement('input')
    titleColumn.classList.add('titleColumn')
    titleColumn.type= 'text'
    titleColumn.placeholder= 'New Board'
    titleColumn.maxLength= 30
    titleColumn.readOnly= true
    titleColumn.value= name
    titleColumn.addEventListener('dblclick', ()=> {titleColumn.readOnly= false})
    titleColumn.addEventListener('focusout', ()=> {titleColumn.readOnly= true})
    column.appendChild(titleColumn)

    const listTask = document.createElement('listTask')
    listTask.classList.add('listTask')
    //add all columns 
    arrayTask.forEach((task)=>{
        listTask.appendChild(task)
    })
    column.appendChild(listTask)

    const butCreateTask = document.createElement('button')
    butCreateTask.classList.add('createTask')
    butCreateTask.innerText = '+ Add Task'
    butCreateTask.addEventListener('click', ()=> openModal(listTask))
    column.appendChild(butCreateTask)

    return column
}



// Task builder and the functions it depends on ----------------------------------
function createTask(id, name, arrayTag = []){
    const task = document.createElement('li')
    task.dataset.taskId = id
    task.classList.add('task')
    task.draggable = true

    const identificationTask = document.createElement('p')
    identificationTask.classList.add('identificationTask')
    identificationTask.innerText = `#${id}`
    task.appendChild(identificationTask)

    const titleTask = document.createElement('p')
    titleTask.classList.add('titleTask')
    titleTask.innerText = name
    titleTask.addEventListener('click',()=> openModal(undefined, task))
    task.appendChild(titleTask)

    const tagsTask = document.createElement('div')
    tagsTask.classList.add('tagsTask')
    //add all tag
    arrayTag.forEach((tag) => {
        tagsTask.appendChild(tag)
    })
    task.appendChild(tagsTask)

    return task
}


function openModal(listTask, task = undefined){
    taskModal.classList.add('active')
    const cancel = taskModal.querySelector('.cancel')
    cancel.addEventListener('click', ()=> taskModal.classList.remove('active'))
    const confirm = taskModal.querySelector('.confirm')

    if(!task){
    confirm.addEventListener('click', function modalCreateTask(){
        const title = taskModal.querySelector('.title')
        listTask.appendChild(createTask(1, title.value))
        title.value = ''     
        taskModal.classList.remove('active')
        confirm.removeEventListener('click', modalCreateTask)
    })
    }else{
        const title = taskModal.querySelector('.title')
        const titleTask = task.querySelector('.titleTask')
        title.value = titleTask.innerText

    confirm.addEventListener('click', function modalRefreshTask(){
        titleTask.innerText = title.value
        title.value = ''     
        taskModal.classList.remove('active')
        confirm.removeEventListener('click', modalRefreshTask)
    })
    }

}


// initializing dashboard
const copyBoards = [...boards]
copyBoards.forEach((board, index) => {
    const navBoard = boardBuilder(board)
    if(index === 0){
        const click = new Event('click')
        navBoard.dispatchEvent(click)
    }
})

function boardBuilder(board){
    const columns = board.columns

    columns.forEach((column,index,array) => {
        const tasks = column.tasks
        tasks.forEach((task, index, array)=>{
            array[index] = createTask(task.id, task.title)
        })
        array[index] = createColumn(column.id, column.title, tasks)
    })
    return createBoard(board.id,board.title, columns)
}
