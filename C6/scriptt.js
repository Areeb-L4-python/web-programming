function calculateTotal() {
    const cost = parseFloat(document.getElementById('cost').value);
    const liters = parseFloat(document.getElementById('liters').value);

    const totalCost = cost * liters;

    document.getElementById('totalCost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}