
// Variables

const partyTitle = document.getElementById('party-title')
const mainCourse = document.getElementById('item-main-course')
const snacks = document.getElementById('item-snacks')
const alcoholicDrinks = document.getElementById('item-alcoholic-drinks')
const music = document.getElementById('item-music')
const moviesTV = document.getElementById('item-movies-tv')
const games = document.getElementById('item-games')
const decorations = document.getElementById('item-decorations')
const costumes = document.getElementById('item-costumes')
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

function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
}


function chooseCat() {
   let catChoice = categoriesDropdown.value
   
}

function addItemField(){
   let itemField = document.getElementById('new-party-item')
   itemField.insertAdjacentHTML('afterend', 
   `<br><label for="categories-dropdown">Item Category:</label>
   <select name="categories" id="categories-dropdown">
   <option value="mainCourse">Main Courses</option>
   <option value="snack">Snacks</option>
   <option value="non-alcoholic-drinks">Non-Alcoholic Drinks</option>
   <option value="alcoholic-drinks">Alcoholic Drinks</option>
   <option value="movies-TV">Movies & TV</option>
   <option value="music">Music</option>
   <option value="games">Games</option>
   <option value="decorations">Decorations</option>
   <option value="costumes">Costumes</option>
   </select><br>
   <label for="new-item">Item Name:</label>
   <input type="text" name="new-party-item" id="new-party-item">`)

}
