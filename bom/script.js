var hw = document.getElementById('hw');
hw.addEventListener('click' , function() {
    alert('Hello world');
})

function alertfnc() {
    alert(1);
    alert(2);
    alert(3);
    confirm('ok');
}

function func_confirm() {
    if(confirm('ok?')) {
        alert('ok');
    } else {
        alert('cancel');
    }
}

function func_prompt() {
    if(prompt('id?') === 'egoing') {
        alert('welcome');
    } else {
        alert('fail');
    }
}