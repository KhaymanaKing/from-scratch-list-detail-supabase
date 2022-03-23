export function renderClasses(dndClass){
    const dndClassesEl = document.createElement('a');
    const dndParticularclass = document.createElement('h2');
    const dndClassImg = document.createElement('img');

    dndClassesEl.href = `./indiv/?id=${dndClass.id}`;
    
    dndClassesEl.classList.add('dndClass');
    dndParticularclass.textContent = dndClass.dndclass;
    dndClassImg.src = dndClass.img;

    dndClassesEl.append(dndParticularclass, dndClassImg);
    return dndClassesEl;

}

export function renderDnDClassDetail(dndClass){
    const dndparticularClassEl = document.createElement('div');
    const dndParticularclass = document.createElement('h2');
    const descriptionEl = document.createElement('p');
    const mainStatsEl = document.createElement('p');
    const hitDiceEl = document.createElement('p');
    const startHPEl = document.createElement('p');
    const armorEl = document.createElement('p');
    const dndClassImg = document.createElement('img');

    dndparticularClassEl.classList.add('dnd-particular-Class');
    
    dndParticularclass.textContent = dndClass.dndclass;
    descriptionEl.textContent = dndClass.description;
    mainStatsEl.textContent = dndClass.mainstats;
    hitDiceEl.textContent = dndClass.hitdice;
    startHPEl.textContent = dndClass.startinghp;
    armorEl.textContent = dndClass.armorproficiencies;
    dndClassImg.src = dndClass.img;

    dndparticularClassEl.append(
        dndParticularclass, 
        descriptionEl, 
        mainStatsEl, 
        hitDiceEl,
        startHPEl, 
        armorEl, 
        dndClassImg);
    return dndparticularClassEl;

}