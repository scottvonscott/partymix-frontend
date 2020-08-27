

class Party{

    static all = []

    constructor({title, id, items}){
    this.title = title
    this.id = id
    this.items = items


    this.element = document.createElement('div')
    this.element.id = `party-${this.id}`
    this.partyList = document.getElementById('party-list')
    this.element.addEventListener('click', this.handleListClick)
    Party.all.push(this)
}

attachToDom(){
    this.partyList.append(this.renderParty())
    
}

renderParty(){
    this.element.innerHTML = 
    `
    <strong class="title">${this.title}</strong><br>`
    this.items.forEach(i => {
        let itemEle = document.createElement('li')
        itemEle.innerText = i.name
        itemEle.hidden = true
        this.element.append(itemEle)
    })
    let deleteBtn = document.createElement('button')
    let updateBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'delete')
    deleteBtn.innerText = 'Delete'
    updateBtn.setAttribute('class', 'update')
    updateBtn.innerText = "Update"
    this.element.append(deleteBtn, updateBtn)
    this.element.addEventListener("click", expandParties)

    function expandParties(){
        debugger
        let hiders = this.element.childNodes
        hiders.forEach(i => {
            i.hidden = !i.hidden
        })
     }

    return this.element
}

handleListClick = (e) => {

    if (e.target.className === "delete"){
        let id = e.target.dataset.id
         deleteItem(id)
    } else if(e.target.className === 'update'){
         let itemId = e.target.dataset.id
         e.target.className = "save"
         e.target.innerText = "Save"
         addUpdateItemFields(itemId)
     } else if(e.target.className === 'save'){
         let itemId = e.target.dataset.id
         e.target.className = "update"
         e.target.innerText = "Update"
         itemsAdapter.sendPatchRequest(itemId)
     }
 }

}
