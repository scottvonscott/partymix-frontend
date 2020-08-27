

class Party{

    static all = []

    constructor({name, id}){
    this.name = name
    this.id = id

    this.element = document.createElement('div')
    this.element.id = `party-${party.id}`
    this.partyList
    const partyList = document.getElementById('party-list')
    Party.all.push(this)
}

attachToDom(){

}

}

function addPartyToDom(party){
    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'party')
    h2.setAttribute('id', `Party ${party.id}`)
    h2.innerText = party.attributes.title

    let partyItems = collectPartyItems(parseInt(party.id));
    partyItems.forEach(i => {
        
        let newItem = document.createElement('p')
        let itemCategory = document.createElement('h3')
        itemCategory.hidden = true
        newItem.setAttribute('class', 'party-item')
        newItem.innerText = i.attributes.name
        itemCategory.innerText = `${i.attributes.categories[0].name}:`
        h2.appendChild(itemCategory)
        itemCategory.appendChild(newItem)
    })

    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2)
    partyList.append(divCard)
    h2.addEventListener("click", expandParties); 

    function expandParties(){
       let hiders = h2.childNodes
       hiders.forEach(i => {
           i.hidden = !i.hidden
       })
    }
    
}