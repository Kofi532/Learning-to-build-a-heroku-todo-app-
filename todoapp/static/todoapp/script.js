// alert("Hello world!")

const button = document.querySelector('button')

button.onmouseover = () => {
    button.style.backgroundColor = 'cyan';
    setTimeout(() => button.style.background = 'black', 2000)
}