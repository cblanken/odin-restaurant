function heading(name) {
    const heading = document.createElement('heading');
    heading.textContent = name; 
    return heading;
}

function header(headings) {
    const header = document.createElement('header');
    headings.forEach((h) => {
        header.appendChild(h);
    });
    
    return header;
}

function mealCard(name, price, description) {
    const card = document.createElement('div');
    return card;
}

export { heading, header, mealCard };
