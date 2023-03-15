window.onload = () => {
    console.log("온로드 테스트");
    let calc = new Calc("rlawnsdlf", 30);
    calc.showInfo();
    Calc.staticPrint();
    console.log(Calc.testNumber2);
    TestService.getInstance().showTestPrint();
}

function add(a,b) {
    return a + b;
}

//PYTHON
//def add (a,b):
//    return a + b

//JAVA
//int add ( int a, int b) {
//    return a + b;
//}

console.log(add(10,20));


/*
  javascript에서의 Class

  #은 private을 의미
  자료형 선언X
  멤버변수 또는 멤버메소드 참조시 항상 this 붙음
  멤버메소드 정의시 function 키워드 사용X
  생성자는 constructor로 정의
*/

class Calc {
    #PI = null;         // # private을 의미함
    testNumber = 10;
    static testNumber2 = 10; 

    name = null;
    age = null;

    constructor(name, age) {
        if(typeof name == "string" && typeof age == "Number"){
        this.name = name;
        this.age = age;
    }else if(typeof name == "string") {
        this.name = name;
        this.age = null;
    }else if(typeof age == "Number") {
        this.name = null;
        this.age = name;
    }else  {
        this.name = null;
        this.age = null;
        }
    }

    showInfo() {
        console.log(this.#PI);
        console.log(this.testNumber);
        console.log(this.testNumber2);
        console.log(this.name);
        console.log(this.log);
    }

    static staticPrint() {
        console.log("스태틱 테스트");
    }
}

let Calc2 = {
    name: "김준일",
    age:  30,
    showInfo: function() {
        console.log(calc2.name);
        console.log(calc2.age);
    }
// 자바스크립트에서의 오브젝트
}

class TestService {
    static #Instance = null;
    static getInstance() {
        if(this.#Instance == null) {
            this.#Instance = new TestService();
        }
        return this.#Instance;
    }

    showTestPrint() {
        console.log("싱글톤 테스트 출력");
    }
}
