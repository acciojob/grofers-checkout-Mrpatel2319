const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with the class "price"
    const priceElements = document.querySelectorAll(".price");

    // Calculate the sum of prices
    let total = 0;
    priceElements.forEach(priceElement => {
        total += parseInt(priceElement.textContent, 10); // Convert text to number and add
    });

    // Check if the total row already exists, and remove it if it does
    const existingTotalRow = document.querySelector(".total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total price
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");

    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2"); // Make it span across both columns
    totalCell.style.textAlign = "right"; // Align text to the right
    totalCell.textContent = `Total Price: Rs ${total}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow); // Append the row to the table
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
