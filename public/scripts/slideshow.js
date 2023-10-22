let ind = 0;

const show = (index) => {
    const boxes = [...document.querySelectorAll('.box')];
    console.log(boxes);
    boxes.forEach(box => {
        if(boxes[index-1] != box && box.classList.contains('active')){
            box.classList.remove('active');
        }
        if(boxes[index-1] == box){
            box.classList.add('active');
        }
    });
    const heroes = [...document.getElementById('hero').children];
    const toDisplay = `hero-${index}`;
    heroes.forEach(hero => {
        if(hero.classList.contains(toDisplay) || hero.classList.contains('box-wrapper')){
            hero.style.display = 'flex';
            hero.classList.add('fade');
        }
        else{
            hero.style.display = 'none';
            if(hero.classList.contains('fade')){
                hero.classList.remove('fade');
            }
        }
    });
    ind = index;
}

show(1);

const pushSlide = () => {
    ind += 1;
    ind = (ind%3);
    show(ind+1);
}

setInterval(() => {
    pushSlide();
}, 15000);