export function renderClasses(dndClass){
    const dndClassesEl = document.createElement('div');
    const dndParticularclass = document.createElement('h2');
    const dndClassImg = document.createElement('img');


    dndClassesEl.classList.add('dndClass');
    
    dndParticularclass.textContent = dndClass.dndclass;
    dndClassImg.src = dndClass.img;

    dndClassesEl.append(dndParticularclass, dndClassImg);
    return dndClassesEl;

}