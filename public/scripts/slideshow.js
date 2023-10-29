let ind = 0;

const show = (index) => {
    const boxes = [...document.querySelectorAll('.box')];
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
            hero.classList.add('hcenter');
        }
        else{
            if(hero.classList.contains('hleft')){
                hero.classList.remove('hleft');
            }
            if(hero.classList.contains('hcenter')){
                hero.classList.remove('hcenter');
                hero.classList.add('hleft');
            }
        }
    });
    ind = index;
}

show(3);

const pushSlide = () => {
    ind += 1;
    ind = (ind%3);
    show(ind+1);
}

setInterval(() => {
    pushSlide();
}, 15000);