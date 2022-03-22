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

export function renderDnDClassDetail(dndClass){
    const dndClassesEl = document.createElement('div');
    const dndParticularclass = document.createElement('h2');
    const descriptionEl = document.createElement('p');
    const mainStatsEl = document.createElement('p');
    const hitDiceEl = document.createElement('p');
    const startHPEl = document.createElement('p');
    const armorEl = docuemnt.createElement('p');
    const dndClassImg = document.createElement('img');

    dndClassesEl.classList.add('dndClass');
    
    dndParticularclass.textContent = dndClass.dndclass;
    descriptionEl.textContent = dndClass.description;
    mainStatsEl.textContent = dndClass.mainstats;
    dndClassImg.src = dndClass.img;

    dndClassesEl.append(dndParticularclass, dndClassImg);
    return dndClassesEl;

}