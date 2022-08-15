const root = document.getElementById('root')



let view = "folders-view"


if (view === 'folders-view'){
    root.innerHTML = foldersView

    const addFolderBtn = document.getElementById('add-folder-btn')
    const foldersContainer = document.getElementById('folders-container')
    const newFolderNameInput = document.getElementById('folder-name-input')

    let foldersArr = []
    let foldersHTML = ""
    let selectedFolder = ""

    addFolderBtn.addEventListener('click', addFolder)

    renderFolders()
    foldersElements = document.querySelectorAll('.folder')
    for (let fe of foldersElements){
        fe.addEventListener('dblclick', (e)=> openFolder(e.currentTarget) )// currentTarget captures the event owner, even when a child is clicked
    }

        
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
            console.log('folders retrieved')
            for (let folder of foldersArr){
                foldersHTML += createFolderWidget(folder.name)//check scripts in index.html
            }
            foldersContainer.innerHTML = foldersHTML // append created folder to folders container
            foldersHTML =""
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
    
}

function openFolder(e){
    root.innerHTML = contentView
    view = "content-view"
    
    const homeBtn = document.getElementById('home-btn')
    console.log(homeBtn)
    homeBtn.addEventListener('click', backToHome )

    function backToHome(){
        view = 'folders-view'
        location.reload()
        // chrome.runtime.reload()
    }
}

function renderContent(){

}



