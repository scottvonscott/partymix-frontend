class Party{

    static all = []

    constructor({title, id, items_and_categories}){
    this.title = title
    this.id = id
    this.items = items_and_categories

    this.element = document.createElement('div')
    this.partyNav = partyNav
    this.navElement = document.createElement('div')
    this.navElement.id = `party-${this.id}`
    this.element.id = `party-${this.id}`
    this.partyList = document.getElementById('party-list')
    Party.all.push(this)
}

addEventListeners(){
    this.element.addEventListener('click', this.handleClick)
}

attachToDom(){
    this.partyList.append(this.renderParty())
    this.partyNav.append(this.renderPartyNav())
    this.addEventListeners()
    
}

renderPartyNav(){
    this.navElement.setAttribute('class', 'party')
    this.navElement.setAttribute('id', `Party ${this.navElement.id}`)
    this.navElement.innerText = this.title

    this.navElement.addEventListener("click", expandParties(this))

    function expandParties(party){
        party.element.hidden = !party.element
     }
    return this.navElement
}

renderParty(){
    this.element.setAttribute('class', 'party')
    this.element.setAttribute('id', `Party ${this.element.id}`)
    this.element.innerText = this.title
    this.element.hidden = true

    this.items.forEach(i => {
        let itemEle = document.createElement('li')
        let itemCat = document.createElement('h3')
        
        itemCat.innerText = `${i.category}:`
        // itemCat.hidden = true
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
