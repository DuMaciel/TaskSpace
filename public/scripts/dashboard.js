import { openModal } from './modules/modal.js'
import { dragColumnConfig, dragTaskConfig } from './modules/dragAndDrop.js'
import { observerColumns, observerTitleColumn, observerListTask, observerTask } from './modules/mutationObserver.js';

// variable corresponding to the data that I will receive from the server updated and returned
const boards = [
    {
        id: 1,
        title: 'Meu Board',
        columnId: 3,
        taskId: 8,
        columns: [{
            id: 1,
            title: "Coluna 1",
            tasks:  [{id: 1, title: 'Minha task 1', description: 'minha task bla bla'}, {id: 2, title: 'Minha task 2', description: 'minha task bla bla'},{id: 3, title: 'Minha task 3', description: 'minha task bla bla'}, {id: 4, title: 'Minha task 4', description: 'minha task bla bla'}]
        },
        {
            id: 2,
            title: "Coluna 2",
            tasks: [{id: 5, title: 'Minha task 5', description: 'minha task bla bla'}, {id: 6, title: 'Minha task 6', description: 'minha task bla bla'}, {id: 7, title: 'Minha task 7', description: 'minha task bla bla'}]
        }],
    },
    {
        id: 2,
        title: 'Meu Board 2',
        columnId: 3,
        taskId: 8,
        columns: [{
            id: 1,
            title: "Coluna 1",
            tasks:  [{id: 1, title: 'Minha task 1', description: 'minha task bla bla'}, {id: 2, title: 'Minha task 2', description: 'minha task bla bla'},{id: 3, title: 'Minha task 3', description: 'minha task bla bla'}, {id: 4, title: 'Minha task 4', description: 'minha task bla bla'}]
        },
        {
            id: 2,
            title: "Coluna 2",
            tasks: [{id: 5, title: 'Minha task 5', description: 'minha task bla bla'}, {id: 6, title: 'Minha task 6', description: 'minha task bla bla'}, {id: 7, title: 'Minha task 7', description: 'minha task bla bla'}]
        }],
    }
];


const areaBoards = document.getElementById('boards')

const navBoards = document.getElementById('navBoards')

const butCreateBoard = document.getElementById('createBoard')

const taskModal = document.getElementById('taskModal')

butCreateBoard.addEventListener('click', () => {
    const board = {id: boardIdGenerator(), title: '', columnId: 1, taskId: 1, columns: []}
    boards.push(board)
    createBoard(board)
})

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
    console.log(boards)
    let i;
    let exist = false;
    for(i=1 ; ; i++){
        for(let j=0; j<boards.length; j++){
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

// board builder and the functions it depends on ----------------------------------
function createBoard(boardData){
    // creating board item and your configuration
    const board = document.createElement('div')
    board.dataset.boardId = boardData.id
    board.classList.add('board')

    const columns = document.createElement('div')
    columns.classList.add('columns')
    //add all columns 
    boardData.columns.forEach((columnData)=>{
        columns.appendChild(createColumn(columnData ,boardData))
    })
    board.appendChild(columns)

    const observer = new MutationObserver((mutations, observer) => observerColumns(mutations, observer, boards))
    observer.observe(columns, {childList: true})

    const butCreateColumn = document.createElement('button')
    butCreateColumn.classList.add('createColumn')
    butCreateColumn.innerText = '+'
    butCreateColumn.addEventListener('click', () => {
        const columnData = {id: boardData.columnId++, title: '' , tasks: []}
        columns.appendChild(createColumn(columnData ,boardData))
    })
    board.appendChild(butCreateColumn)

    areaBoards.appendChild(board)

    // creating nav item and your configuration
    const navBoard = document.createElement('li')
    navBoard.id = `board${boardData.id}`
    
    const titleBoard = document.createElement('input')
    titleBoard.classList.add('titleBoard')
    titleBoard.type= 'text'
    titleBoard.placeholder= 'New Board'
    titleBoard.maxLength= 20
    titleBoard.readOnly= true
    titleBoard.value= boardData.title
    titleBoard.addEventListener('dblclick', ()=> {titleBoard.readOnly= false})
    titleBoard.addEventListener('focusout', ()=> {
        titleBoard.readOnly= true
        boardData.title = titleBoard.value
    })
    navBoard.appendChild(titleBoard)

    navBoard.addEventListener('click', () => activeBoard(navBoard, board))
    navBoards.appendChild(navBoard)

    return navBoard
}
// column builder and the functions it depends on ----------------------------------
function createColumn(columnData, boardData){
    const column = document.createElement('div')
    column.dataset.columnId = columnData.id
    column.classList.add('column')
    column.draggable = true

    const titleColumn = document.createElement('input')
    titleColumn.classList.add('titleColumn')
    titleColumn.type= 'text'
    titleColumn.placeholder= 'New Column'
    titleColumn.maxLength= 30
    titleColumn.readOnly= true
    titleColumn.value= columnData.title
    titleColumn.addEventListener('dblclick', ()=> {titleColumn.readOnly= false})
    titleColumn.addEventListener('focusout', ()=> {
        titleColumn.readOnly= true
    })
    column.appendChild(titleColumn)

    const observerTitle = new MutationObserver((mutations, observer) => observerTitleColumn(mutations, observer, boards))
    observerTitle.observe(titleColumn, {attributes: true})

    const listTask = document.createElement('listTask')
    listTask.classList.add('listTask')
    //add all columns 
    columnData.tasks.forEach((task)=>{
        listTask.appendChild(createTask(task))
    })
    column.appendChild(listTask)

    dragColumnConfig(column)
    const observerList = new MutationObserver((mutations, observer) => observerListTask(mutations, observer, boards))
    observerList.observe(listTask, {childList: true})

    const butCreateTask = document.createElement('button')
    butCreateTask.classList.add('createTask')
    butCreateTask.innerText = '+ Add Task'
    butCreateTask.addEventListener('click',()=> {
        const taskData = {id: boardData.taskId++, title: '', description: ''}
        const task = createTask(taskData)
        openModal(task, listTask)
    }
    )
    column.appendChild(butCreateTask)

    return column
}

// Task builder and the functions it depends on ----------------------------------
function createTask(taskData){
    const task = document.createElement('li')
    task.dataset.taskId = taskData.id
    task.classList.add('task')
    dragTaskConfig(task)
    task.dataset.description = taskData.description
    task.draggable = true

    
    const identificationTask = document.createElement('p')
    identificationTask.classList.add('identificationTask')
    identificationTask.innerText = `#${taskData.id}`
    task.appendChild(identificationTask)

    const titleTask = document.createElement('p')
    titleTask.classList.add('titleTask')
    titleTask.innerText = taskData.title
    titleTask.addEventListener('click',()=>{
        openModal(task)
    })
    task.appendChild(titleTask)

    const tagsTask = document.createElement('div')
    tagsTask.classList.add('tagsTask')
    //add all tag
    // arrayTag.forEach((tag) => {
    //     tagsTask.appendChild(tag)
    // })
    task.appendChild(tagsTask)
    const observer = new MutationObserver((mutations, observer) => observerTask(mutations, observer, boards))
    observer.observe(task, {attributes: true, attributeFilter: ['data-description']})

    return task
}

// initializing dashboard
boards.forEach((board, index) => {
    const navBoard = createBoard(board)
    if(index === 0){
        const click = new Event('click')
        navBoard.dispatchEvent(click)
    }
})