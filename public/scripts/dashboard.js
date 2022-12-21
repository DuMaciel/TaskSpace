
const areaBoards = document.getElementById('boards')

const navBoards = document.getElementById('navBoards')

const butCreateBoard = document.getElementById('createBoard')

butCreateBoard.addEventListener('click', () => createBoard())


// board builder and the functions it depends on ----------------------------------
function createBoard(name = '', arrayColumn = []){
    // creating board item and your configuration
    const board = document.createElement('div')
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
    butCreateColumn.addEventListener('click', () => columns.appendChild(createColumn()))
    board.appendChild(butCreateColumn)

    areaBoards.appendChild(board)

    // creating nav item and your configuration
    const navBoard = document.createElement('li')
    
    const titleBoard = document.createElement('input')
    titleBoard.classList.add('titleBoard')
    titleBoard.type= 'text'
    titleBoard.placeholder= 'New Board'
    titleBoard.maxLength= 20
    titleBoard.readOnly= true
    titleBoard.value= name
    titleBoard.addEventListener('dblclick', ()=> {titleBoard.readOnly= false})
    titleBoard.addEventListener('focusout', ()=> {titleBoard.readOnly= true})
    navBoard.appendChild(titleBoard)

    navBoard.addEventListener('click', () => activeBoard(navBoard, board))
    navBoards.appendChild(navBoard)
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
        console.log(areaBoardsChildrens[index])
        areaBoardsChildrens[index].classList.remove('active')
    })
}


// column builder and the functions it depends on ----------------------------------
function createColumn(name = '', arrayTask = []){
    const column = document.createElement('div')
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
    butCreateTask.addEventListener('click', ()=> listTask.appendChild(createTask('teste',[],'id')))
    column.appendChild(butCreateTask)

    return column
}



// Task builder and the functions it depends on ----------------------------------
function createTask(name, arrayTag = [], id){
    const task = document.createElement('li')
    task.classList.add('task')
    task.draggable = true

    const identificationTask = document.createElement('p')
    identificationTask.classList.add('identificationTask')
    identificationTask.innerText = `#${id}`
    task.appendChild(identificationTask)

    const titleTask = document.createElement('p')
    titleTask.classList.add('titleTask')
    titleTask.innerText = name
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