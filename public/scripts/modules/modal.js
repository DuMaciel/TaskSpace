// modal 
export function openModal(task , listTask = undefined){
    const title = taskModal.querySelector('.title')
    const description = taskModal.querySelector('.description')
    cleanModal()
    const cancel = taskModal.querySelector('.cancel')
    const confirm = taskModal.querySelector('.confirm')
    taskModal.classList.add('active')
    if(!listTask){
        title.value = task.querySelector('.titleTask').innerText
        description.value = task.dataset.description
     }   
        cancel.addEventListener('click', funCancel)
        confirm.addEventListener('click', funconfirm)
    
    function funCancel(){
        taskModal.classList.remove('active')
        cancel.removeEventListener('click', funCancel)
        confirm.removeEventListener('click', funconfirm)
    }
    function funconfirm(){
        taskModal.classList.remove('active')
        task.querySelector('.titleTask').innerText = title.value
        task.dataset.description = description.value
        cancel.removeEventListener('click', funCancel)
        confirm.removeEventListener('click', funconfirm)
        if(listTask){
            listTask.appendChild(task)
        }
    }
    function cleanModal(){
        title.value = ''
        description.value = ''
    }
}