// Add event listener

// init the count as 0
// listen for clicks on the increment-btn
// increment count when clicked
// update count-el in the HTML to show updated count value


let count = 0

function increment() {
    count += 1
    document.getElementById("count-el").innerText = count
}