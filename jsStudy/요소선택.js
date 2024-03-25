function accessId() {

    // 아이디로 요소에 접근
    // document.getElementById("아이디명") => 이렇게 작성하는걸 권장
    // document.querySelector("css 선택자");
    var area1 = document.querySelector("#area1");
    console.log(area1);

    // 선택된 요소에 속성들에 접근해서 값을 가져온다거나 변경 가능하다.
    area1.innerHTML += "아이디로 접근 성공.<br>";
    
    // css 스타일도 변경, 적용이 가능하다.
    area1.style.backgroundColor = "pink";
    area1.style.color = "red";
    area1.style.width = "100px";
    area1.style.height = "300px";
    
}

function accesId2() {

    if(area2.style.backgroundColor == "yellow") {
        area2.style.backgroundColor = "pink";
    }else {
        area2.style.backgroundColor = "yellow";
    }
}

function accessTagName() {
    // 태그명으로 요소 접근시
    // 1) document.getElementsByTagName('태그명')
    //      -> 선택된 여러개의 요소객체들은 배열에 담겨서 반환한다, 자바스크립트에서 배열은 ([])로 표현한다.
    // 2) document.getElementsByTagName("태그명");
    var list = document.getElementsByTagName("li");

    console.log(list);
    console.log("배열의 크기는 ? " + list.length);
    console.log(list[0]);

    list[0].innerHTML = "안녕하세요";

    for(var i = 0; i < list.length; i++) {
        list[i].innerHTML = '안녕하세요$(i+1)';

        list[i].style.backgroundColor = 'rgb(130, 220, ${blueColor})';
        blueColor += 50;
    }
}

function acessName(){

    //name 속성값으로 요소를 가져오기
    //document.getElementsByName("name속성값"); => 선택된 요소들이 배열에 담겨서 반환
    //document.querySelectorAll("[name=속성값]");
    var hobbys = document.getElementByName("hobby");
    console.log(hobbys);
    hobbys = document.querySelectorAll("[name=hobby]");

    console.log(hobbys);

    var checkedItems = "";

    for(var i = 0; i<hobbys.length; i++) {
        // 현재 반복을 진행중인 checkbox가 선택된 상태인지 아닌지 체크
        if(hobbys[i].checked) checkedItems += hobbys[i].value+"<br>";
    }

    area3.innerHTML = checkedItems;
}

function accesClass(){
    // class 속성으로 요소를 가져오기
    // document.getElementsByClassName("class 속성값")
    // document.querySelectorAll('.클래스명')
    // document.querySelectorAll("[class속성값]");

    var arr = document.getElementsByClassName("test");
    arr = document.querySelectorAll(".test > li");
    console.log(arr);

    for( let test of arr){
        console.log(test);
    }
}