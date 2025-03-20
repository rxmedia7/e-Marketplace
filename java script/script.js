let password = 1111
addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.code === 'KeyL') {
        e.preventDefault()
        document.querySelector('.lock').classList.add('locked')
    }
})

document.querySelector('#pass1').addEventListener("keydown", (e) => {

    if (e.code == 'Enter') {
        if (document.querySelector('#pass1').value == '1111') {
            document.querySelector('.lock').classList.remove('locked')
            e.preventDefault();

        }
        else {
            alert("Parol xato");
            e.preventDefault();
        }
    }
})