import { getDnDClassByID } from '../fetch-utils.js';
import { renderDnDClassDetail } from '../render-utils.js';
const dndClassDetailEl = document.querySelector('.dnd-classes-particular');

window.addEventListener('load', async () =>{

    const data = new URLSearchParams(window.location.search);
    const dndClassId = data.get('id');

    const dndClass = await getDnDClassByID(dndClassId);

    const dndClassEl = renderDnDClassDetail(dndClass);

    dndClassDetailEl.append(dndClassEl);
});