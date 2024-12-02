const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Create an element to display the total price
const totalDisplay = document.createElement("div");
totalDisplay.setAttribute("id", "ans");
document.body.appendChild(totalDisplay);

const getSum = () => {
    // Select all elements with the class "price"
    const priceElements = document.querySelectorAll(".price");

    // Calculate the sum of prices
    let total = 0;
    priceElements.forEach(priceElement => {
        total += parseInt(priceElement.textContent, 10); // Convert text to number and add
    });

    // Update the total in the #ans element
    totalDisplay.textContent = `Total Price: Rs ${total}`;
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
