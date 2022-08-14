const addFolderBtn = document.getElementById('add-folder-btn')
const foldersContainer = document.getElementById('folders-container')
const newFolderNameInput = document.getElementById('folder-name-input')

let foldersArr = []
let foldersElements = ""
let selectedFolder = ""

addFolderBtn.addEventListener('click', addFolder)

renderFolders()


function addFolder(){
    if(newFolderNameInput.value){
        foldersArr.push({name: newFolderNameInput.value, content:[""]})
        newFolderNameInput.value = ""
        localStorage.setItem("Folders",JSON.stringify(foldersArr))
    }
    renderFolders()
}

function renderFolders(){
    foldersContainer.innerHTML =""
    foldersArr = JSON.parse(localStorage.getItem('Folders'))
    if(foldersArr){
        for (let folder of foldersArr){
            foldersElements += createFolderWidget(folder.name)//check scripts in index.html
        }
        foldersContainer.innerHTML = foldersElements // append created folder to folders container
        foldersElements =""
    }
    else{
        foldersArr = []
        foldersContainer.innerHTML = `<p class="info-message">Add some folders</p>`
    }
}

function selectFolder(folder){
    if (selectedFolder === folder){
        selectedFolder = ""
    }
    else{
        selectedFolder = folder
        const allFolders = document.querySelectorAll(".folder")
        for (f of allFolders){
            if (f !== folder){
                f.classList.remove("selected-folder")
            }
        }
    }
    manageFolderSelection(folder)
}

function manageFolderSelection(folder){
    if (selectedFolder){
        folder.classList.add('selected-folder')
    }
    else{
        folder.classList.remove('selected-folder')
    }
}
