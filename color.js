const btn = document.getElementById('btnColor');


const colors = ['red', 'blue', 'grey', 'green', 'black', 'white'];

btn.addEventListener('click', function() {
    const randomColor = Math.floor((Math.random() * colors.length));

    document.body.style.backgroundColor = colors[randomColor];

});