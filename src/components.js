const components = {
    header(title) {
        const header = document.createElement('header');
        header.appendChild(this.heading(title));
        return header;
    },

    heading(title) {
        const heading = document.createElement('heading');
        heading.textContent = title;
        return heading;
    },

    tab(name) {
        const tab = document.createElement('tab');
        tab.textContent = name; 
        return tab;
    },

    nav(tabs) {
        const nav = document.createElement('nav');
        tabs.forEach((h) => {
            nav.appendChild(h);
        });
        
        return nav;
    },

    mealCard(name, price, description) {
        const card = document.createElement('div');
        return card;
    },
}

export { components };
