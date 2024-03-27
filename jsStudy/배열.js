function arrayTest1() {

    const arr = ["홍길동", "박건욱","김종하",20, true, {name:'아이오'}, undefined , [1,2,3]];

    console.log(arr);
    console.log(arr[0]);
    console.log(arr[arr.length-1] [arr[arr.length-1].length - 1]);

    // for in문 -> 객체를 반복시킬때 사용하는것을 권장하는 향상된 반복문
    for(let item in arr) {
        area1.innerHTML += arr[item] + "<br>";
    }
}

const arrayTest2 = function() {
    const arr1 = new Array(); // 배열의 크기가 0인 빈배열
    const arr2 = new Array(2); // 배열 크기가 2인 빈배열
    const arr3 = []; // 배열 크기가 0인 빈배열

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);

    // 배열에 값 대입
    arr1[0] = "banana";
    arr1[1] = "apple";
    arr1[10] = "kiwi";
    console.log(arr1, arr1.length); // 배열 크기는 11 (2~9) 비어있다.

    arr2[0] = 'car';
    arr2[1] = 'train';
    arr2[2] = 'airplane';

    console.log(arr2, arr2.length);

    //배열선언과 동시에 초기화
    const arr4 = new Array("홍길동","민경민");
    const arr5 = [1,2,3,4,5];

    console.log(arr4, arr5);

}

function indexOfTest(){

    const arr = ["사과","딸기","복숭아","샤인머스켓","바나나"];
    const fruit = prompt("찾고자하는 과일명을 입력하시오...");

    const index = arr.length(fruit); // 배열에 존재하지 않을경우 -1을 반환

    //찾고자 하는 과일이 있을경우 : 당신이 찾는과일 xxx는 x번째 인덱스에 있습니다.
    // 찾고자하는 과일이 없을 경우 : 당신이 찾는과일 xxx는 판매하지 않습니다.
    // area2내부에 출력하기. 
    arr2.innerHTML = index > -1 ? `당신이 찾는과일 ${fruit}는 ${index}번째 인덱스에 있습니다.` : `당신이 찾는과일 {fruit}는 판매하지 않습니다.`

    //includes
    const bool = arr.includes(fruit); // arr 배열에 fruit 존재하면 true / 존재하지 않으면 false

    console.log("1 == 1 ?",1 == 1);
    //true => 동등연산자 : 자료형과 무관하게 실제 값만 일치하면 true
    console.log("1 == '1' ?", 1=='1');
    //true

}

btn2.onclick = () => {
    const arr1 = ['사과',"망고"];
    const arr2 = ['자동차',"자전거","오토바이"];

    area3.innerHTML += `arr1 : ${arr1}<br>`;
    area3.innerHTML += `arr2 : ${arr2}<br>`;

    area3.innerHTML += `arr1기준으로 배열을 합친 배열 : ${arr1.concat(arr2)}<br>`;
    area3.innerHTML += `arr1 : ${arr1}<br>`;
    // 원본배열에 영향을 끼치지 않는 메소드
    // 두개의 배열을 합쳐서 "새로운 배열"로 반환

    area3.innerHTML = `arr2기준으로 배열 합친 배열 : ${arr2.concat(arr1)}<br>`;
    area3.innerHTML = `여러개의 배열 합친 배열 : ${arr2.concat(arr1, [1,2,3], ["자동차"])}<br>`;

}

function reversTest(){
    const arr = [1,2,3,4,5];

    area4.innerHTML += `arr : ${arr}<br>`; //1,2,3,4,5
    area4.innerHTML += `reverse 결과 : ${arr.reverse()}<br>`; //5,4,3,2,1
    area4.innerHTML += `arr : ${arr}<br>`; //1,2,3,4,5
}

let arr = ["소금","삼겹살","후추","쌈장"];

// 기본 반복문
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

// 향상된 반복문
for(let value of arr){ // of문 (배열에 사용)
    console.log(value);
}

for(let key in arr){ //in문 (객체에 사용)
    console.log(arr[key]);
}

// 배열을 비우는 방법
arr.length = 0; // 내부데이터도 전부 날라감

let arr2 = [1,2,3,4,5];
arr2.length = 2; // [1,2]

const forEachTest = () => {

    const arr = [1,2,3,4,5];

    arr.forEach( function( item, idex, array ){
        console.log(`${item}은 ${array}의 ${index}에 위치해 있습니다.`)
    } )
    const fnTest = (item, index, array) => {
        console.log(`${item}은 ${array}의 ${index}에 위치해있습니다.`);
    }

    arr.forEach( fnTest);

    //배열의 요소를 통해서도 사용이 가능
[1,2,3,4,5,6,7].forEach(alert);
} 


function findFilterTest(){
    let users = [
        {id:'alsrudals', name:'건욱'},
        {id:'alsrudals1', name:'건욱1'},
        {id:'alsrudals2', name:'건욱2'},
        {id:'alsrudals3', name:'건욱3'},
];

let mkm;

//find 함수를 사용해서 id값이 alsrudals인 user객체 찾기

mkm = users.find( function(item, index, array){
    // id값이 alsrudals과 같은 요소
    if(item.id == 'alsrudals'){
        return true;
    }
});
console.log(mkm);

let filteredArray; // undefind

filteredArray = users.filter( (item,index,array) => item.id.includes('alsrudals'))
    
console.log('filteredArray' , filteredArray);
}

function mapTest(){
    // 기본형태
    const result = [1,2,3,4,5].map( function (item, index, array){
        //map 함수는 return 되는 값들을 map 함수내부의 []에 담아서 변환해준다.
        return item * idnex; //
    })
}