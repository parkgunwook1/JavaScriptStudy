const plus= () => {
    let test = num1 + num2;
    console.log(test);

    result.innerHTML = `${Number(num1.value) + Number(num2.value)}`;
    console.log(result.innerHTML)
}

const arithmetic = () => {

    let test1 = 7 + 7; // 14
    let test2 = 7 + '7'; //77
    let test3 = '7' + 7; //77

    let test4 = "7" * 7; //49
    let test5 = "7" - 7; //0
    let test6 = "7" / 7; //1
    // 문자열이 자동형변환으로 숫자로 변환된뒤 산술연산됨. 단, 문자열에는 숫자만 존재해야한다.

    // 강제형변환 (문자열 => 숫자)
    // Number()
    // paresInt()
    // pareFloat()

    const iNum = 2;
    const sNum = "3";

    const test8 = iNum+sNum; //23
    const test9 = iNum+Number(sNum);// 5
    const test10 = iNum+parseInt(sNum); // 5
    const test11 = iNum+parseFloat(sNum); //5

    area3.innerHTML += `test 8 : ${test8}<br>`;
    area3.innerHTML += `test 9 : ${test9}<br>`;
    area3.innerHTML += `test 10 : ${test10}<br>`;
    area3.innerHTML += `test 11 : ${test11}<br>`;

    const fNum = "1.1234";

    const test12 = iNum+fNum; // 2+"1.1234" -> 21.234
    const test13 = iNum+Number(fNum); 
    const test14 = iNum+fNum(fNum); 
    const test15 = iNum+fNum(fNum); 

    area3.innerHTML += `test 12 : ${test12}<br>`;
    area3.innerHTML += `test 13 : ${test13}<br>`;
    area3.innerHTML += `test 14 : ${test14}<br>`;
    area3.innerHTML += `test 15 : ${test15}<br>`;

}

const showMathMethod = () => {
    area2.innerHTML = `절대값 : ${Math.abs(-123)}<br>`;
    area2.innerHTML += `랜덤값 : ${Math.random()}<br>`;
    area2.innerHTML += `반올림 : ${Math.round(123.567)}<br>`;
    area2.innerHTML += `버림 : ${Math.floor(123.567)}<br>`;
    area2.innerHTML += `올림 : ${Math.ceil(123.567)}<br>`;
    area2.innerHTML += `제곱근 : ${Math.sqrt(4)}<br>`;
    area2.innerHTML += `제곱 : ${Math.pow(2,10)}<br>`;
}

const showStringMehod = function() {

    const str1 = "hello world";

    area1.innerHTML = "str1 :" + str1+"<br>";
    area1.innerHTML += `toUpperCase() : ${str1.toUpperCase()}<br>`; 
    area1.innerHTML += `toLowerCase() : ${str1.toLowerCase()}<br>`; 
    area1.innerHTML += `문자열의 길이 : ${str1.length}<br>`; 

    for(var i = 0; i < str1.length; i++) {
        area1.innerHTML += `${i}번째 인덱스 : ${str1.charAt(i)}<br>`;
    }
    console.log(i);

    area1.innerHTML += `앞에서부터 첫번째 l의 위치 : ${str1.indexOf('l')}<br>`
    area1.innerHTML += `뒤에서부터 첫번째 l의 위치 : ${str1.lastIndexOf('l')}<br>`

    area1.innerHTML += `substring(시작인덱스) : ${str1.substring(6)}<br>`
    area1.innerHTML += `substring(시작인덱스, 끝 인덱스) : ${str1.substring(0, 6)}<br>` // 시작인덱스 <= str < 끝인덱스

    const str2 = "사과,복숭아,커피,자몽";
    const fruits = str2.split(",");

    area1.innerHTML += "fruits : "+ fruits+"<br>";
    console.log(fruits);

    
}