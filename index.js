
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

const itemsAdapter = new ItemsAdapter
const partiesAdapter = new PartiesAdapter

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    itemsAdapter.fetchItems()
    partiesAdapter.fetchParties()
    const partyForm = document.getElementById('party-form')

})
