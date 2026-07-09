// Add event listener

// init the count as 0
// listen for clicks on the increment-btn
// increment count when clicked
// update count-el in the HTML to show updated count value


let count = 0
countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.innerText = count
}

// Working with the DOM is knowon as the Document Object Model, aka how to use
// js to modify a website.