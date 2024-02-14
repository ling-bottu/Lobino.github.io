document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    
    const products = [
        { 
            name: "Cherry Black", 
            price: {
                mine: "SHE  Collection - Medium",
                steal: "MADE IN BANGLADESH",
                
            },
            image: "product1.jpg"
        },
        { 
            name: "Puff Nude", 
            price: {
                mine: "eliz  Collection - Small",
                steal: "MADE IN BANGLADESH",
                
            },
            image: "product2.jpg"
        },
        { 
            name: "Peachy Tops", 
            price: {
                mine: "eliz  Collection - Small",
                steal: "MADE IN BANGLADESH",
               
            },
            image: "product3.jpg"
        },
        { 
            name: "Modern Filipina", 
            price: {
                mine: "eliz  Collection - Small",
                steal: "MADE IN BANGLADESH",
               
            },
            image: "product4.jpg"
        },
        { 
            name: "Michigan White", 
            price: {
                mine: "RARE  Collection - Medium",
                steal: "MADE IN BANGLADESH",
            },
            image: "product5.jpg"
        },
        { 
            name: "Puff Army Green", 
            price: {
                mine: "eliz  Collection - Small",
                steal: "MADE IN BANGLADESH",
            },
            image: "product6.jpg"
        },
        { 
            name: "Superior", 
            price: {
                mine: "SHE Collection - SMALL ",
                steal: "MADE IN BANGLADESH",
            },
            image: "product7.jpg"
        },
        { 
            name: "Michigan Grimy white shirt", 
            price: {
                mine: "RARE Collection- Small",
                steal: "MADE IN BANGLADESH",
            },
            image: "product8.jpg"
        },
        { 
            name: "Gray", 
            price: {
                mine: "eliz Collection - Small",
                steal: "MADE IN BANGLADESH",
            },
            image: "product9.jpg"
        },
        { 
            name: "Cherry White", 
            price: {
                mine: "SHE Collection - Small",
                steal: "MADE IN BANGLADESH",
            },
            image: "product10.jpg"
        }
    ];

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const image = document.createElement("img");
        image.src = product.image;
        productDiv.appendChild(image);

        const name = document.createElement("h2");
        name.textContent = product.name;
        productDiv.appendChild(name);

        // Create paragraphs for each price
        Object.values(product.price).forEach(price => {
            const priceParagraph = document.createElement("p");
            priceParagraph.textContent = price;
            productDiv.appendChild(priceParagraph);
        });

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const mineButton = createButton("Mine  150");
        const stealButton = createButton("Steal  170");
        const grabButton = createButton("Grab  200");

        // Add spacing between buttons
        mineButton.style.marginRight = "10px";
        stealButton.style.marginRight = "10px";
        grabButton.style.marginRight = "10px";

        // Add event listeners to buttons
        mineButton.addEventListener("click", () => {
            sendUserAction("Mine", product.name);
            alert(`You have mined ${product.name}.`);
        });

        stealButton.addEventListener("click", () => {
            sendUserAction("Steal", product.name);
            alert(`You have stolen ${product.name}.`);
        });

        grabButton.addEventListener("click", () => {
            sendUserAction("Grab", product.name);
            alert(`You have grabbed ${product.name}.`);
        });

        buttonContainer.appendChild(mineButton);
        buttonContainer.appendChild(stealButton);
        buttonContainer.appendChild(grabButton);

        productDiv.appendChild(buttonContainer);

        productList.appendChild(productDiv);
    });

    function createButton(text) {
        const button = document.createElement("button");
        button.textContent = text;
        button.classList.add("custom-button"); // Add custom button class
        return button;
    }

    function sendUserAction(action, productName) {
        // Send POST request to backend server
        fetch('http://localhost:4000/user-action', { // Use port 4000 for the backend server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action, productName }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('User action sent successfully');
        })
        .catch(error => {
            console.error('Error sending user action:', error);
        });
    }
});
