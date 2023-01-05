// drag and drop config 
export function dragColumnConfig(column){
    const listTask = column.querySelector('.listTask')

    column.addEventListener('dragstart', (event)=> {
        if(event.target.nodeType != 1) return
        if(event.target.classList.contains('column')) event.target.id = 'columnTransferring'
        event.dataTransfer.effectAllowed = 'move'
    })
    column.addEventListener('dragover', (event)=> {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
        const taskTransferring = document.getElementById('taskTransferring')
        if(taskTransferring){
            listTask.classList.add('emphasis')
        }else{
            column.classList.add('emphasis')
        }
        event.stopPropagation()
    })
    column.addEventListener('dragleave', (event)=> {
        event.preventDefault()
        const taskTransferring = document.getElementById('taskTransferring')
        if(taskTransferring){
            listTask.classList.remove('emphasis')
        }else{
            column.classList.remove('emphasis')
        }
        event.stopPropagation()
    })

    column.addEventListener('drop', (event)=>{
        column.classList.remove('emphasis')
        listTask.classList.remove('emphasis')
        event.target.classList.remove('emphasis')
        if(event.target.nodeType != 1) return
        
        const taskTransferring = document.getElementById('taskTransferring')
        if(taskTransferring){
        taskTransferring.id = ''
        column.querySelector('.listTask').appendChild(taskTransferring)
        }

        const columnTransferring = document.getElementById('columnTransferring')
        if(columnTransferring){
            columnTransferring.id = ''
            column.parentElement.insertBefore(columnTransferring, column)
        }
    })
}

export function dragTaskConfig(task){
    task.addEventListener('dragstart', (event)=> {
        if(event.target.nodeType != 1) return
        if(event.target.classList.contains('task')) event.target.id = 'taskTransferring'
    })
    task.addEventListener('dragover', (event)=> {
        event.preventDefault()
        const taskTransferring = document.getElementById('taskTransferring')
        if(taskTransferring) task.classList.add('emphasis') 
    })
    task.addEventListener('dragleave', (event)=> {
        event.preventDefault()
        task.classList.remove('emphasis')
    })

    task.addEventListener('drop', (event)=> {
        if(event.target.nodeType != 1) return
        task.classList.remove('emphasis')
        
        const taskTransferring = document.getElementById('taskTransferring')
        if(taskTransferring){
        taskTransferring.id = ''
        task.parentElement.insertBefore(taskTransferring, task)
        }

        const columnTransferring = document.getElementById('columnTransferring')
        if(columnTransferring){
            columnTransferring.id = ''
            task.parentElement.parentElement.parentElement.insertBefore(columnTransferring, task.parentElement.parentElement)
        }
    })
}