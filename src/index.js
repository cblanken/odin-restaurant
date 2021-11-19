import { heading, header, mealCard } from './components.js';

let headings = [
    heading('Home'),
    heading('Menu'),
    heading('Contact'),
];

document.body.appendChild(header(headings));
