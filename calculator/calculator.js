function add() {
var adda = parseFloat(document.getElementById('adda').value); 
var addb = parseFloat(document.getElementById('addb').value);
var addc = adda + addb;
document.getElementById('postAddAnswer').innerHTML = "Your Answer is: " + addc;
}

function sub() {
 var mina = parseFloat(document.getElementById('mina').value);
 var minb = parseFloat(document.getElementById('minb').value);
 var minc = mina - minb;
 document.getElementById('postMinAnswer').innerHTML= "Your Answer is: " + minc;   
}

function mul() {
    var mula = parseFloat(document.getElementById('mula').value);
    var mulb = parseFloat(document.getElementById('mulb').value);
    var mulc = mula * mulb;
    document.getElementById('postMulAnswer').innerHTML = "Your Answer is: " + mulc;
}

function div() {
    var diva = parseFloat(document.getElementById('diva').value);
    var divb = parseFloat(document.getElementById('divb').value);
    var divc = diva / divb;
    document.getElementById('postDivAnswer').innerHTML = "Your Answer is: " + divc;
}

function per() {
    var pera = parseFloat(document.getElementById('pera').value);
    var perb = parseFloat(document.getElementById('perb').value);
    var perc = pera / 100 * perb;

    document.getElementById('postPerAnswer').innerHTML = "Your Answer is: " + perc ;
}

const clear1 = document.getElementById('clear1');
clear1.addEventListener('click', function handleClick(event){
    event.preventDefault();//<--- prevents page reload
    const add1 = document.getElementById('adda');
    const add2 = document.getElementById('addb');
    const add3 = document.getElementById('postAddAnswer').innerHTML = '';

    add1.value = '';
    add2.value = '';
    add3.value = '';
});

const clear2 = document.getElementById('clear2');
clear2.addEventListener('click', function handleClick(event){
    event.preventDefault();//<--- prevents page reload
    const min1 = document.getElementById('mina');
    const min2 = document.getElementById('minb');
    const min3 = document.getElementById('postMinAnswer').innerHTML = '';

    min1.value = '';
    min2.value = '';
    min3.value = '';
});

const clear3 = document.getElementById('clear3');
clear3.addEventListener('click', function handleClick(event){
    event.preventDefault();//<--- prevents page reload
    const mul1 = document.getElementById('mula');
    const mul2 = document.getElementById('mulb');
    const mul3 = document.getElementById('postMulAnswer').innerHTML = '';

    mul1.value = '';
    mul2.value = '';
    mul3.value = '';
});

const clear4 = document.getElementById('clear4');
clear4.addEventListener('click', function handleClick(event){
    event.preventDefault();//<--- prevents page reload
    const div1 = document.getElementById('diva');
    const div2 = document.getElementById('divb');
    const div3 = document.getElementById('postDivAnswer').innerHTML = '';

    div1.value = '';
    div2.value = '';
    div3.value = '';
});

const clear5 = document.getElementById('clear5');
clear5.addEventListener('click', function handleClick(event){
    event.preventDefault();//<--- prevents page reload
    const per1 = document.getElementById('pera');
    const per2 = document.getElementById('perb');
    const per3 = document.getElementById('postPerAnswer').innerHTML = '';

    per1.value = '';
    per2.value = '';
    per3.value = '';
});

const clearAll = document.getElementById('clearAll');
clearAll.addEventListener('click', function handleClick(event){
    event.preventDefault();//<--- prevents page reload

    const add01 = document.getElementById('adda');
    const add02 = document.getElementById('addb');
    const add03 = document.getElementById('postAddAnswer').innerHTML = '';
    const min01 = document.getElementById('mina');
    const min02 = document.getElementById('minb');
    const min03 = document.getElementById('postMinAnswer').innerHTML = '';
    const mul01 = document.getElementById('mula');
    const mul02 = document.getElementById('mulb');
    const mul03 = document.getElementById('postMulAnswer').innerHTML = '';
    const div01 = document.getElementById('diva');
    const div02 = document.getElementById('divb');
    const div03 = document.getElementById('postDivAnswer').innerHTML = '';
    const per01 = document.getElementById('pera');
    const per02 = document.getElementById('perb');
    const per03 = document.getElementById('postPerAnswer').innerHTML = '';

    add01.value = '';
    add02.value = '';
    add03.value = '';
    min01.value = '';
    min02.value = '';
    min03.value = '';
    mul01.value = '';
    mul02.value = '';
    mul03.value = '';
    div01.value = '';
    div02.value = '';
    div03.value = '';
    per01.value = '';
    per02.value = '';
    per03.value = '';
});

function connect() {
    window.open('http://eepurl.com/hWqWQ9')
};