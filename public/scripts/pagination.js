const boxes = document.querySelectorAll(".box");

const makeActive = (event) => {
    boxes.forEach(box => {
        if(box.classList.contains("active")){
            box.classList.remove("active");
        }
    })
    boxes[event].classList.add("active");
}