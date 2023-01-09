// mutations observers 
export function observerListTask(mutations , observer, boardData){
    mutations.forEach(mutation => {
        const columnDOM = mutation.target.parentElement
        
        const columnId = columnDOM.dataset.columnId

        const column = boardData.columns[boardData.columns.findIndex(column => column.id == columnId)]
        const tasks = column.tasks

        mutation.removedNodes.forEach(element => {
            tasks.splice(tasks.findIndex(task => task.id == element.dataset.taskId),1)
        })
        mutation.addedNodes.forEach(element => {
            if(mutation.previousSibling){
                tasks.splice(tasks.findIndex(task => task.id == mutation.previousSibling.dataset.taskId) + 1,0, taskSerializer(element))
                return
            }
            if(mutation.nextSibling){
                tasks.splice(tasks.findIndex(task => task.id == mutation.nextSibling.dataset.taskId),0, taskSerializer(element))
                return
            }
            tasks.splice(-1,0, taskSerializer(element))
        })
        
    })
    fetch(`/dashboard?board=${boardData.id}&search=false`, {"method": "POST", "body": JSON.stringify(boardData)})
}

export function observerTask(mutations , observer, boardData){
    mutations.forEach(mutation => {
        const taskDOM = mutation.target
        const columnDOM = getColumnFromTask(taskDOM)

        const columnId = columnDOM.dataset.columnId

        const column = boardData.columns[boardData.columns.findIndex(column => column.id == columnId)]
        const tasks = column.tasks
        
        tasks.splice(tasks.findIndex(task => task.id == taskDOM.dataset.taskId), 1, taskSerializer(taskDOM))
    })
    fetch(`/dashboard?board=${boardData.id}&search=false`, {"method": "POST", "body": JSON.stringify(boardData)})
}

export function observerColumns(mutations , observer, boardData){
    mutations.forEach(mutation => {
        const columns = boardData.columns

        mutation.removedNodes.forEach(element => {
            columns.splice(columns.findIndex(column => column.id == element.dataset.columnId),1)
        })
        mutation.addedNodes.forEach(element => {
            if(mutation.previousSibling){
                columns.splice(columns.findIndex(column => column.id == mutation.previousSibling.dataset.columnId) + 1,0, columnSerializer(element))
                return
            }
            if(mutation.nextSibling){
                columns.splice(columns.findIndex(column => column.id == mutation.nextSibling.dataset.columnId),0, columnSerializer(element))
                return
            }
            columns.splice(-1,0, columnSerializer(element))
        })
    })
    fetch(`/dashboard?board=${boardData.id}&search=false`, {"method": "POST", "body": JSON.stringify(boardData)})
}

export function observerTitleColumn(mutations , observer, boardData){
    mutations.forEach(mutation => {
        console.log(mutation)
        const columnDOM = mutation.target.parentElement

        const columnId = columnDOM.dataset.columnId

        const column = boardData.columns[boardData.columns.findIndex(column => column.id == columnId)]
        column.title = mutation.target.value
    })
    fetch(`/dashboard?board=${boardData.id}&search=false`, {"method": "POST", "body": JSON.stringify(boardData)})
}

function columnSerializer(column){
    const columnData = {id: parseInt(column.dataset.columnId), title: column.querySelector('.titleColumn').value, tasks: []}
    const tasks = column.querySelectorAll('.listTask .task')
    tasks.forEach(task => {
        columnData.tasks.push(taskSerializer(task))
    })
    return columnData
}

function taskSerializer(task){
    const taskData = {id: parseInt(task.dataset.taskId), title: task.querySelector('.titleTask').innerText, description: task.dataset.description}
    return taskData
}

function getColumnFromTask(task){
    return task.parentElement.parentElement
}

function getBoardFromColumn(column){
    return column.parentElement.parentElement
}