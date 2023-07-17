const orderButton = document.getElementById('orderButton');
const totalAmount = document.getElementById('totalAmount');

const menuItems = document.querySelectorAll('.menu-item');
const quantityInputs = document.querySelectorAll('.menu-item input[type="number"]');

orderButton.addEventListener('click', function () {
    // Calculate the total amount and update the display
    const total = calculateTotal();
    totalAmount.textContent = total;
});

// Listen for changes on each quantity input
quantityInputs.forEach(input => {
    input.addEventListener('change', function () {
        // Calculate the total amount and update the display whenever quantity changes
        const total = calculateTotal();
        totalAmount.textContent = total;
    });
});

function calculateTotal() {
    let total = 0;
    // Loop through each menu item to calculate the total amount
    menuItems.forEach((menuItem, index) => {
        const checkbox = menuItem.querySelector('input[type="checkbox"]');
        const quantityInput = menuItem.querySelector('input[type="number"]');
        const price = 5; // Replace with actual price for each item (e.g., retrieve from database)

        if (checkbox.checked) {
            // Calculate the subtotal for the checked item and add it to the total
            const quantity = parseInt(quantityInput.value);
            total += quantity * price;
        }
    });
    return total;}