
// Variables
const addItemFieldButton = document.getElementById('additional-item-button')
const categoriesDropdown = document.getElementById('categories-dropdown')
const partyForm = document.getElementById('party-form')
const additionalFields = document.querySelectorAll('.additional-form-fields') 
const partyNav = document.getElementById('party-list-sidenav')
const itemsAdapter = new ItemsAdapter
const partiesAdapter = new PartiesAdapter

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    partiesAdapter.fetchParties()
    partyForm.addEventListener('submit', partiesAdapter.createParty)
    addItemFieldButton.addEventListener('click', addItemField)
})

function addItemField(){
   let itemEnd = document.getElementById('form-anchor')
   let newHTML = `<br><label for="categories-dropdown" id="new-cat-label">Category:</label>
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
   <input type="text" class="new-party-item" name="new-party-item" id="additional-form-fields">`
   itemEnd.insertAdjacentHTML('afterend', newHTML)

}

function resetFormCount(){
   while (document.getElementById('additional-form-fields')){
   let newField = document.getElementById('additional-form-fields')
   newField.remove()
   }
   while(document.getElementById('new-cat-label')){
      let newCatLabel = document.getElementById('new-cat-label')
      newCatLabel.previousSibling.remove()
      newCatLabel.remove()
   }
   while(document.getElementById('new-item-label')){
      let newFieldLabel = document.getElementById('new-item-label')
     newFieldLabel.remove()
   }
}

