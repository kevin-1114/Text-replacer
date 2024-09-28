let input;
let replaceWhat;
let replaceWith;
const btn1 = document.getElementById("btn1");
const btnDelete = document.getElementById("delete");

function main() {
    // Use innerText to get the value from the contenteditable element
    input = document.getElementById("input").innerText;
    replaceWhat = document.getElementById("replaceWhat").value;
    replaceWith = document.getElementById("replaceWith").value;

    const inputUse = input.split(" ");

    // Use map to replace all occurrences
    const updatedInput = inputUse.map(part =>
        part === replaceWhat ? replaceWith : part
    );

    // Update the correct output element
    document.getElementById("outcome").innerHTML = updatedInput.join(" ");
}
function clearInputs() {
    document.getElementById("input").innerText = ''; // Clear the contenteditable element
    document.getElementById("replaceWhat").value = ''; // Clear the text input
    document.getElementById("replaceWith").value = ''; // Clear the text input
    document.getElementById("outcome").innerHTML = ''; // Clear the output
}

// Add event listener to the button to trigger the main function
btn1.addEventListener("click", main);
btnDelete.addEventListener("click", clearInputs);
