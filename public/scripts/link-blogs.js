const blogBoxes = document.querySelectorAll('.blogbox');
const currentAddress = window.location.origin;

blogBoxes.forEach(blogBox => {
    blogBox.addEventListener('click', () => {
        window.location.replace(currentAddress+"/blog/blog1/");
    })
})

window.onpopstate = () => {};
history.pushState({}, '');