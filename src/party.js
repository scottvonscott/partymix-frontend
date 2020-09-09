class Party{

    static all = []

    constructor({title, id, items}){
        debugger
    this.title = title
    this.id = id
    this.items = items

    this.element = document.createElement('div')
    this.element.id = `party-${this.id}`
    this.partyList = document.getElementById('party-list')
    Party.all.push(this)
}

addEventListeners(){
    this.element.addEventListener('click', this.handleClick)
}

attachToDom(){
    this.partyList.append(this.renderParty())
    this.addEventListeners()
    
}

renderParty(){
    this.element.setAttribute('class', 'party')
    this.element.setAttribute('id', `Party ${this.element.id}`)
    this.element.innerText = this.title

    this.items.forEach(i => {
        let itemEle = document.createElement('p')
        let itemCat = document.createElement('h3')
        
        itemCat.innerText = `${i.category}:`
        itemCat.hidden = true
        itemEle.innerText = i.name
        this.element.append(itemCat)
        itemCat.append(itemEle)
    })
    let deleteBtn = document.createElement('button')
    // let updateBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'delete')
    deleteBtn.setAttribute('data-id', this.id)
    deleteBtn.innerText = 'Delete'
    deleteBtn.hidden = true
    // updateBtn.setAttribute('class', 'update')
    // updateBtn.innerText = "Update"
    // updateBtn.hidden = true
    this.element.append(deleteBtn)
    this.element.addEventListener("click", expandParties)

    function expandParties(){
        let hiders = this.childNodes
        hiders.forEach(i => {
            i.hidden = !i.hidden
        })
     }
    return this.element
}

handleClick = (e) => {
    if (e.target.className === "delete"){
        let id = parseInt(e.target.dataset.id)
        partiesAdapter.deleteParty(id)
         this.element.remove()
    } 
 }
}
