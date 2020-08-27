

class Party{

    static all = []

    constructor({title, id, items_and_categories}){
    this.title = title
    this.id = id
    this.items = items_and_categories

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
    this.element.setAttribute('class', 'party')
    this.element.setAttribute('id', `Party ${this.element.id}`)
    this.element.innerText = this.title

    this.items.forEach(i => {
        let itemEle = document.createElement('li')
        let itemCat = document.createElement('h3')
        
        itemCat.innerText = i.category
        itemCat.hidden = true
        itemEle.innerText = i.name
        this.element.append(itemCat)
        itemCat.append(itemEle)
    })
    let deleteBtn = document.createElement('button')
    let updateBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'delete')
    deleteBtn.innerText = 'Delete'
    deleteBtn.hidden = true
    updateBtn.setAttribute('class', 'update')
    updateBtn.innerText = "Update"
    updateBtn.hidden = true
    this.element.append(deleteBtn, updateBtn)
    this.element.addEventListener("click", expandParties)

    function expandParties(){
        let hiders = this.childNodes
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

// function addPartyToDom(party){
//     let h2 = document.createElement('h2')
//     h2.setAttribute('class', 'party')
//     h2.setAttribute('id', `Party ${party.id}`)
//     h2.innerText = party.attributes.title

//     let partyItems = collectPartyItems(parseInt(party.id));
//     partyItems.forEach(i => {
        
//         let newItem = document.createElement('p')
//         let itemCategory = document.createElement('h3')
//         itemCategory.hidden = true
//         newItem.setAttribute('class', 'party-item')
//         newItem.innerText = i.attributes.name
//         itemCategory.innerText = `${i.attributes.categories[0].name}:`
//         h2.appendChild(itemCategory)
//         itemCategory.appendChild(newItem)
//     })

//     let divCard = document.createElement('div')
//     divCard.setAttribute('class', 'card')
//     divCard.append(h2)
//     partyList.append(divCard)
//     h2.addEventListener("click", expandParties); 

    
// }