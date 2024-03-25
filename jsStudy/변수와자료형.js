
//var변수의 문제점
// 1) 영역문제
if(true){
var varTest = "var"; //전역변수
let letTest = "let"; //지역변수
}
console.log(varTest); // 에러안남
// 함수내에 선언되면 지역변수, 그외에서는 전역변수로써 사용이 된다. ==> var는 함수단위 스코프
// console.log(letTest); // 에러발생(블록단위로 영영이 할당된다.) ==> let은 블록단위 스코프

// 2) 변수명 중복문제
var user;
var user; //에러발생 x

let users;
// let users; // 에러발생

str = "전역변수";
let str2 = "let 전역변수";

// window.onload == 현재 html 문서가 전부 load되고 나서 실행할 함수를 지정하는 구문
window.onload = function(){
// let str = "지역변수" , str3 = "지역변수" , ....~; 권장하지 않는 방법

let str = "지역변수";
let str3 = "새로운 지역변수";
str4 = "얘는 뭘까";

console.log("---- str ----");
console.log(str); // 지역변수명과 전역변수명이 동일한 경우 지역변수 호출.
// 그러면 전역변수 str에 접근하고자 한다면?
console.log(window.str);
console.log(this.str);

console.log('---- str2 ----');
console.log(str2);
console.log(window.str2); // undefind 정의되지 않음
console.log(this.str2);   // undefind 정의되지 않음

console.log("----str3----");
console.log(str3); // 지역변수
console.log(window.str3); // undefind 정의되지 않음
console.log(this.str3); // undefind 정의되지 않음

console.log('-----str4-----');
console.log(str4);         //전역변수
console.log(window.str4); //전역변수
console.log(this.str4)   //전역변수
// 지역변수 선언시 키워드(var,let,const)를 생략한경우 자동으로 전역변수 취급한다.

}
function typeTest(){
var name ="박건욱";
var name ='박건욱';
var name =`박건욱`; // 다 문자열

var age = 40; // number
var flag = true; //boolean

var hobby = ["영화","음악","게임"]; // object
var user = {
    name : '박건욱',
    age : 33,
    id : 'qkrrjsdnr'
} // object

var testFn = function() {
    alert('zzz');
}

var noVal; // 초기값 넣어주지 않아 undefind값

console.log(name, age, flag, hobby, user, testFn, noVal);


// 자료형 확인시 사용되는 함수 : typeof(변수명)
area.innerHTML = `${name}의 자료형 : ${typeof(name)}<br>`;
area.innerHTML += `${age}의 자료형 : ${typeof(age)}<br>`;
area.innerHTML += `${flag}의 자료형 : ${typeof(flag)}<br>`;
area.innerHTML += `${hobby}의 자료형 : ${typeof(hobby)}<br>`;
area.innerHTML += `${user}의 자료형 : ${typeof(user)}<br>`;
// 직접 정의한 객체를 화면에 출력시 [object Object]가 출력
area.innerHTML += `${testFn}의 자료형 : ${typeof(testFn)}<br>`;
// 함수의 경우 하수정의 내용이 화면에 다 출력된다.
area.innerHTML += `${noVal}의 자료형 : ${typeof(noVal)}<br>`;

// 객체 내부의 속성에 접근할때는 .으로 접근
area.innerHTML += `${user.name}의 나이는 ${user.age}살이며, 아이디는 ${user.id}입니다.<br>`;

// 특이케이스
console.log(typeof null);
/*
    하위호환성을 위해서 오류를 수정하지 않고 남겨둔 상황.
    단, null은 별도의 고유한 자료형을 가지지 않는 특수한 값임. 절대로 object가 아님
*/




}