- 노마드코더 클론코딩 [https://nomadcoders.co/javascript-for-beginners/lobby] 수강 완료
- 수강기간 : 2024/04/08 - 2024/04/15

## 주요 포인트
### greetings.js
- class css 속성에 'hidden' 값을 주고 조건에따라 classList.remove() 활용해 속성을 보여주고 감추는 방식.
  ```java
  if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    //show the greeting
    paintGreetings(savedUsername);
  }
  ```
- localStorage의 사용
  ```java
  //localStorage.setItem : 저장
  localStorage.setItem(USERNAME_KEY, username);

  //localStorage.getItem : 가져오기
  localStorage.getItem(USERNAME_KEY);
  ```

### clock.js
- setInterval('함수명', '밀리세컨드');
  ```java
  setInterval(getClock, 1000);
  //getClock 함수를 1000(=1초)마다 호출. 
  ```
- padStart('문자수', '채울 문자'); : 왼쪽부터 '문자수'만큼 공백을 '채울문자'로 채운다.
  ```java
   const hours = String(date.getHours()).padStart(2, "0");
  // ex) 1시일 때 01 로 표시됨
  ```
> cf. padStart의 반대는? <br>
> padEnd('문자수', '채울 문자'); : 오른쪽부터 '문자수'만큼 공백을 '채울문자'로 채운다.

### backgroud.js & quotes.js
- Math.floor(), Math.random()
  ```java
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  ```
### todo.js
- localStorage에 배열로 저장, json화 또는 객체화하여 사용.
  ```java
  const TODOS_KEY = "todos";

  let toDos = [];

  function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //json화
  }
  ```

  ```java
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //json을 객체화
    console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
  }
  ```
- filter 함수
  ```java
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  ```
  filter('true인 경우 남기고 false인 경우 제거');

### weather.js
- geolocation.getCurrentPosition 메서드
  ```java
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
  //response 성공 시 메서드, response 실패 시 메서드를 인자로 받는다.
  ```
- 현재 위치의 경도와 위도를 찾는 함수
  ```java
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  ```
- API 사용
  ```java
  function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  console.log(lat);
  console.log(lng);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
        )}`;
        city.innerText = data.name;
      });
  }
  ```
