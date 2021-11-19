import { components } from './components.js';

const $ = (x) => document.querySelector(x);

const content = document.createElement("div");
document.body.appendChild(content);

const title = components.header("Neon's Neatery");
content.appendChild(title);

const tabs = [
    components.tab('Home'),
    components.tab('Menu'),
    components.tab('Contact'),
];

content.appendChild(components.nav(tabs));
