let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let totCount = []


function increment() {
    count += 1
    countEl.innerText = count
}





function save(){
    let saveCount = count
    totCount.push(saveCount)
    saveEl.textContent += saveCount + " - " // Use textContent to get or set the text of an element. It sets the raw text and does not interpret HTML or CSS styles
    count = 0
    countEl.textContent = 0
    console.log(count)
}

function reset(){
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Previous Entries:"
    totCount = []
    console.log(count)
}

function total() {
    let totalSum = 0;  // Start with a total sum of 0
    
    // Loop through each count in the totCount array
    for (let i = 0; i < totCount.length; i++) {
        totalSum += totCount[i];  // Add the current count to the total sum
    }

    countEl.innerText = totalSum;  // Display the total sum in the count-el element
}
