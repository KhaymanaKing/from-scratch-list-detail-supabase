import { getDnDClassByID } from '../fetch-utils.js';

const dndClassDetailEl = document.querySelector('.');

window.addEventListener('load', async () =>{

    cosnt data = new URLSearchParams(window.location.search);
    const dndClassId = data.get('id');

    const dndClass = await getDnDClassByID(dndClassId);

    const dndClassEl = renderDnDClassDetail(dndClass);

    dndClassDetailEl.append(dndClassEl);
})