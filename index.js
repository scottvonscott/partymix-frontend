
// Variables
const addItemFieldButton = document.getElementById('additional-item-button')
const categoriesDropdown = document.getElementById('categories-dropdown')
const partyForm = document.getElementById('party-form')
const additionalFields = document.querySelectorAll('.additional-form-fields') 
// const partyNav = document.getElementById('party-list-sidenav')
const itemsAdapter = new ItemsAdapter
const partiesAdapter = new PartiesAdapter
const categoriesAdapter = new CategoriesAdapter
const organizeBtn = document.getElementById('organize-button')

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    partiesAdapter.fetchParties()
    partyForm.addEventListener('submit', partiesAdapter.createParty)
    addItemFieldButton.addEventListener('click', addItemField)
    categoriesAdapter.fetchCategories()
   //  organizeBtn.addEventListener('click', handleOrganize)

})

// function handleOrganize() {
//    debugger
//    Party.all.sort((a, b) => (a.items.length - b.items.length)).forEach((party) => party.attachToDom())
// }

function addItemField(){
   let itemEnd = document.getElementById('form-anchor')
   let newHTML = `<div class="form-item-line" id="form-item-line"><br><label for="categories-dropdown" id="new-cat-label">Category:</label>
      <select class="categories-dropdown" name="categories" id="additional-form-fields">
         <option value="1">Main Courses</option>
         <option value="2">Snacks</option>
         <option value="3">Non-Alcoholic Drinks</option>
         <option value="4">Alcoholic Drinks</option>
         <option value="6">Movies & TV</option>
         <option value="5">Music</option>
         <option value="7">Games</option>
         <option value="9">Decorations</option>
         <option value="8">Costumes</option>
      </select>
      <label for="new-item" id="new-item-label">Item Name:</label>
      <input type="text" class="new-party-item "name="new-party-item" id="new-party-item"><button onclick=randomize(this)>Random</button>
      </div>`
   itemEnd.insertAdjacentHTML('afterend', newHTML)

}

function randomize(e) {
event.preventDefault()
   function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

   const selectedCategoryId = e.parentElement.querySelector('.categories-dropdown').value
   const selectedCategory = Category.all.find(cat => cat.id === parseFloat(selectedCategoryId))
   const randomizedOptions = selectedCategory.items.map(item => item.name)
   const randomChoice = getRndInteger(0, (randomizedOptions.length - 1))
   let itemField = e.parentElement.querySelector('.new-party-item')
   itemField.value = randomizedOptions[randomChoice]
   }

function resetFormCount(){
   while (partyForm.querySelector('.form-item-line')){
      let itemLine = partyForm.querySelector('.form-item-line')
      itemLine.remove()
   } addItemField()
   
  
   // itemDivs.forEach(item => item.remove())

   // while (document.getElementById('additional-form-fields')){
   // let newField = document.getElementById('additional-form-fields')
   // newField.remove()
   // }
   // while(document.getElementById('new-cat-label')){
   //    let newCatLabel = document.getElementById('new-cat-label')
   //    newCatLabel.previousSibling.remove()
   //    newCatLabel.remove()
   // }
   // while(document.getElementById('new-item-label')){
   //    let newFieldLabel = document.getElementById('new-item-label')
   //   newFieldLabel.remove()
   // }
}

