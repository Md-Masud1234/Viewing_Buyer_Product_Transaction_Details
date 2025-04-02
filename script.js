document.addEventListener("DOMContentLoaded", function() {
    function addEntry(tableId, inputs) {
        const tableBody = document.getElementById(tableId);
        const row = document.createElement("tr");
        let emptyField = false;
        
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (!input.value.trim()) {
                emptyField = true;
                return;
            }
            const cell = document.createElement("td");
            cell.textContent = input.value;
            row.appendChild(cell);
            input.value = "";
        });
        
        if (!emptyField) {
            tableBody.appendChild(row);
        }
    }

    document.getElementById("addBuyer").addEventListener("click", function() {
        addEntry("buyerTable", ["buyerName", "buyerEmail", "buyerPhone", "buyerAddress"]);
    });

    document.getElementById("addProduct").addEventListener("click", function() {
        addEntry("productTable", ["productName", "productCategory", "productPrice", "productStock"]);
    });

    document.getElementById("addTransaction").addEventListener("click", function() {
        addEntry("transactionTable", ["transactionBuyer", "transactionProduct", "transactionDate", "transactionAmount"]);
    });
});
