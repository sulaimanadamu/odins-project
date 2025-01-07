    //Dom app buttons
    const addBtn = document.getElementById('add')
    const clearBtn = document.getElementById('clear')
    const cancel = document.getElementById('cancel')
    const clear = document.getElementById('clear')

    //Dom input selection
    const inputField = document.getElementById('todo')
    const todoList = document.getElementById('Todo-list')

    let textList = []
    render()

    // Events
    addBtn.addEventListener('click', addItem)
    clear.addEventListener('click', clearTodoList)

     
    // Functions section
    function checkInputExistence(sentence, sentenceArray){
        for (member of sentenceArray){
           if( member.replaceAll(" ", '').toLowerCase() === sentence.replaceAll(" ", '').toLowerCase() ){
            return true
           }
        }
        return false
    }

    function addItem(){
        let inputValue = inputField.value
        if (inputValue.length === 0){
            alert('you have not written what you want to do')
        }
        else if(checkInputExistence(inputValue, textList)){
            alert('You already have this on your Todo list')
        }
        else{
            textList.push(inputValue)
            clearTextField()
            render()
        }   
    }

    function clearTodoList(){
        textList.length = 0
        render()
    }

    function removeTodo(e){
        const elementToRemove = e.target.previousElementSibling.innerText
        const indexOfElement = textList.indexOf(elementToRemove)
        console.log(elementToRemove, "index is :  ", indexOfElement)
        textList.splice(indexOfElement, 1)
        render()
    }
    
    function clearTextField(){
       inputField.value = ''
    }


    function render(){
            if(textList.length === 0){
            clear.style.display = 'none'
            }
            else{
            clear.style.display = 'block'
            }

            todoList.textContent = null

            for( text of textList){
            const listItem = document.createElement('li')
            listItem.classList.add('todo')
            const parag = document.createElement('p')
            const btn = document.createElement('button')
            btn.innerText = 'X'
            btn.classList.add('cancel')
            btn.onclick = removeTodo
            parag.innerText = text
            listItem.append(parag, btn)
            todoList.appendChild(listItem)
            }
    }
