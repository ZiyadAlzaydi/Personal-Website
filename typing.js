// typing.js

document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("typed-name");
    const fullText = "Ziyad Alzaydi";
    let index = 0;

    function type() {
        if (index < fullText.length) {
            target.textContent += fullText.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    type();
});
