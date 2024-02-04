document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('change-background-btn');

    btn.addEventListener('click', function () {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
    btn.addEventListener('mouseover', function () {
        btn.style.backgroundColor = '#005fa3'
    })
    btn.addEventListener('mouseout', function () {
        btn.style.backgroundColor = '#0088cc'
    })
});
