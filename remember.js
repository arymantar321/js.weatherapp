/*

function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
}

const greetNicolas = sayHello("Nicolas", 14);

console.log(greetNicolas);

*/

/* 여기서, greetNicolas는 sayHello 함수의 리턴(반환) 값이다. 
그런데, 위처럼 sayHello 함수에 return이 아닌 console.log를 쓰게 되면,
그건 return 값이 없는 것이 되므로, 'undefined'(정의되지 않았다.)라는 결과가 나온다.
따라서 다음과 같이 해야 맨 마지막 줄의 명령이 제대로 실행될 수 있다.*/

function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas", 14);

console.log(greetNicolas);

/* return은 console.log와 다르게 ()안에 넣지 않고 그냥 ``안에 넣으면 된다. */

const calculator = {
  plus: function(a, b) {
    return a + b;
  }
};

const plus = calculator.plus(5, 5);
console.log(plus);

const test1 = {
  f1: function(a, b) {
    return a - b;
  }
};

const test2 = test1.f1(1, 2);
console.log(test2);

function f2(a, b) {
  return a * b;
}

const f3 = f2(3, 9);

console.log(f3);

/*테스트 결과, const 안...그러니까 변수안에 새함수를 만들 경우에는 const 변수명 = {함수명: function(인자){함수 내용};} 식으로 기록해야 한다.
  하지만 함수를 변수 안에서 만드는게 아니라 그냥 따로 만들때는, function 함수명(인자){함수 내용;} 라고 입력해야 한다.*/

/* if 문

  if(조건){ 내용(맞을때) } else { 내용(아닐때)}

  = 와 === 의 차이.
  = 를 쓰면 값을 할당하는거임. 변수같은거 사용할때. 예를 들어 const A = 13 이라고 하면 A라는 변수에 13이라는 값을 할당하는 것.
  하지만 ===를 쓰면 이것이 같은지 체크하는 것이 된다. 숫자만 같은지 확인할 수 있는 게 아니라, 텍스트도 비교 가능. 물론 "" 같은 거 안에 써야한다.
  if 문 안에 if문을 넣을 수도 있음 즉 중첩 가능.

  if(조건1 && 조건2) <- 이런 식으로 쓰여있을 경우 조건 1,2가 전부 참이어야 참에 해당하는 내용이 출력됨.
  둘 중 하나라도 거짓이면 '거짓'에 해당하는 내용이 출력됨.

* | <-이것의 입력 방법은 쉬프트를 누르고 \ 를 누르는 것이다. \는 키보드 상에서는 원화 표시로, 엔터 바로 위, 백스페이스(지우는 버튼) 바로 아래에 있다.

  if(조건1 || 조건2) <- 이런 식으로 쓰여있을 경우 조건 중 하나라도 참일 경우 참에 해당하는 내용이 출력된다.
!==  <- 이 기호는 부정. 같지 않다는 의미다.


  HTML JavaScript DOM event MDN <-어떤 이벤트 종류가 있는지 알고 싶을때는 이걸로 검색해보기. 
  
만약 어떤 변수를 부정하고 싶다면  !hasClass 처럼 앞에 !를 붙여주자.
  
**삼항 연산자: 미니 if와 같은 것.
예를 들어 seconds < 10 ? `0${seconds}` : seconds 라고 적혀있으면 (여기서 seconds는 함수다. 근데 함수가 아니어도 적용될듯)
seconds 가 10보다 작으면 0을 포함해서 세컨드를 출력하고, 그렇지 않으면 그냥 세컨드를 출력한다는 뜻이다.
즉 ? 이후의 내용이 참에 해당하는 값. : 이후의 내용이 거짓에 해당하는 값이다. 



  */
