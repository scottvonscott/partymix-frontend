
// Variables

const partyTitle = document.getElementById('party-title')
const addItemFieldButton = document.getElementById('additional-item-button')
const categoriesDropdown = document.getElementById('categories-dropdown')

const itemsAdapter = new ItemsAdapter
const partiesAdapter = new PartiesAdapter

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    itemsAdapter.fetchItems()
    partiesAdapter.fetchParties()
    const partyForm = document.getElementById('party-form')
    partyForm.addEventListener('submit', partiesAdapter.createParty)
    addItemFieldButton.addEventListener('click', addItemField)
})



function addItemField(){
   let itemEnd = document.getElementById('form-anchor')
   itemEnd.insertAdjacentHTML('afterend', 
   `<label for="categories-dropdown">Item Category:</label>
   <select class="categories-dropdown" name="categories">
   <option value="1">Main Courses</option>
   <option value="2">Snacks</option>
   <option value="3">Non-Alcoholic Drinks</option>
   <option value="4">Alcoholic Drinks</option>
   <option value="5">Movies & TV</option>
   <option value="5">Music</option>
   <option value="6">Games</option>
   <option value="7">Decorations</option>
   <option value="8">Costumes</option>
   </select><br>
   <label for="new-item">Item Name:</label>
   <input type="text" class="new-party-item" name="new-party-item"><br><br>`)

}
