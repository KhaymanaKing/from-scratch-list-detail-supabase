// import functions and grab DOM elements\
import { getDnDClasses } from './fetch-utils.js';
import { renderClasses } from './render-utils.js';

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


const listEl = document.querySelector('.dnd-classes');

window.addEventListener('load', async () => {
    fetchAndDisplayClasses();
});

async function fetchAndDisplayClasses(){

    const dndClasses = await getDnDClasses();
    for (let dndClass of dndClasses) {

        const dndClassEl = renderClasses(dndClass);
        listEl.append(dndClassEl);
    }
}