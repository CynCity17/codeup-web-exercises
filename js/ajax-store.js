(async function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    const getInventory = async () => {
        let response = await fetch(`/data/inventory.json`)
        let data = await response.json();
        return data;
    };
        let inventoryInfo = await getInventory();
        console.log(inventoryInfo);



    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements

    function renderInventory(inventoryInfo) {
        let html = '<tbody id="insertProducts">';
        html += '<h1>' + inventoryInfo.title + '</h1>';
        html += '<p>' + inventoryInfo.quantity + '</p>';
        html += '' + inventoryInfo.price + '';
        html += '' + inventoryInfo.categories + '';
        html += '</tbody>';
        console.log(html)
        return html;
    }

    function renderInventory() {
        let html = '';
        for(let i = inventoryInfo.length - 1; i >= 0; i--) {
            html += renderInventory([i]);
        }
        return html;
    }





})();


