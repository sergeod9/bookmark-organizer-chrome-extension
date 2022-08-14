function createFolderWidget(name){
    const nameArr = name.split(" ")
    let newName=""
    if(nameArr.length <= 1){
        newName = name
    }
    else{
        for (word of nameArr){
            newName += `${word}-` // if folder name has white spaces, replace with dash
        }
        newName = newName.slice(0,-1) // remove last character from the name (the last dash)
    }
    
    const folderWidget = `
        <div class="folder" id="folder-${newName}" onclick="selectFolder(this)">
            <img src="./images/folder.png" />
            <div class="folder-name--container">
                <p class="folder-name">${name}</p>
            </div>
        </div>
        `
    return folderWidget
}
