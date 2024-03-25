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

function testInput(){
    var input1 = document.getElementById("userId");
    var input2 = document.getElementById("userPwd");
    var btn = document.getElementById("test-btn");

    console.log(input1.value, input2.value);

    console.log(btn.dataset.hoho);

    input1.value = "경민"
}

function testPrompt() {
    var name = prompt("당신의 이름은 무엇입니까?");
    var age = prompt("당신의 나이는 몇 살입니까?");

    var divEl = document.getElementById("area3");

    divEl.innerHTML = "<b>당신은 "+age+ " 살의 "+name +" 님 이군요. 반갑습니다.</b>"
}

function testConfirm() {
    var result = confirm("졸리면 확인, 아니면 취소를 누르세요");

    console.log(result);

    var divE2 = document.getElementById("area2");
    if(result) {
        console.log(divE2.innerHTML = "<h2>너무 졸립니다.</h2>");
    } else {
        console.log(divE2.innerHTML = "<h2>너무 괜찮습니다. </h2>");
    }
}

function tagValue() {
    // 특정 요소의 값을 가지고 온다거나 변경하고자 할때는 해당 요소객체를 가져와서 변수에 담아둘것.
    var divE1 = document.getElementById("area1"); // id 요소 area1인 요소를 찾은 후 divE1 변수에 저장

    console.log(divE1); // 요소 객체를 잘가져왔으면 에러가 안난다.
    console.dir(divE1); // 해당 값의 디렉토리 구조를 통해 접근 가능한 모든 속성을 확인할 수 있다.

    console.log(divE1.id); // 아이디 값
    console.log(divE1.tagName); // 요소의 태그명

    console.log(divE1.innerHTML); // 요소 내부의 content 영역값을 html 코드 포함해서 가져온다.
    console.log(divE1.innerText); // 요소 내부의 content 영역값중 텍스트만 포함해서 가져온다.

    // 위처럼 속성에 직접 접근하여 값을 가지고오는것도 가능하지만, 직접 접근해서 값을 변경하는것도 가능하다.

    console.log(divE1.innerHTML = "<b>innerHTML로 속성값을 변경함!</b>");
    divE1.innerText = "<b>innerHTML로 속성값을 변경함</b>";

    // innerHTML로 변경하면 출력할 문구에 HTML 태그 포함시 "태그"로 인식
    // innerText로 변경하면 출력할 문구에 html 태그 포함시 "문자열"로 인식
}

function documentWriter(){
    document.write("document write");
    document.write("<b>볼드처리</b>");
    // 화면에 출력할 문자열에 html 태그가 있을 경우 진사 html 태그로 해석되어서 보여줌
}