<h1 align='center'>QuizRacer</h1>

# Főoldal:

Az oldal felső részén egy navigációs sáv található, amely három linket tartalmaz.
- Az első link a regisztrációt tartalmazza. Ez a funkció lehetővé teszi a felhasználók számára egyszerűen létrehozni egy fiókot.
- A második link a bejelentkezésre irányít át. A bejelentkezési lehetőség révén a már meglévő fiókkal rendelkező felhasználók könnyedén be tudnak jelentkezni és folytathatják az alkalmazás használatát.
- Az utolsó link a kvízjátékhoz vezet. Ez a link lehetővé teszi a felhasználók számára az interaktív és szórakoztató játékrész elérését.

A főoldal tarmaz:
- egy rövid bemutatkozást
- a játékszabály leírását
- és a készítő elérhetőségét 


![image](https://github.com/JungKata/vizsga/assets/97729333/2edc85fe-9362-458a-81d5-b100ba759173)

# Sign Up
A SignUp egy React osztálykomponenst tartalmaz, amely az űrlapkezelést és a regisztrációs folyamatot valósítja meg egy SignUp nevű oldalon. 
A SignUp komponens felelős a felhasználói regisztrációért a QuizRacer weboldalon.<br/>

Az űrlap a következő mezőket tartalmazza:
- firstname
- lastname
- emailAddress
- password
- passwordAgain

![image](https://github.com/JungKata/vizsga/assets/97729333/37eabce8-9ed0-4d50-ad52-a761b2ea6629)

- Az űrlapot kitöltve a felhasználó a "Sign Up" gombra kattintva regisztrálhat. Az alábbiakban találhatók a funkcionalitások:
- Űrlap validáció: Az űrlap valamennyi mezőjét ellenőrzi, és hibát jelez, ha a mezők nem megfelelően vannak kitöltve. A hibaüzenetek a megfelelő mezők mellett jelennek meg.
- Regisztráció beküldése: Ha az űrlap helyesen van kitöltve, a felhasználói adatokat beküldi a szervernek a "POST" kéréssel. A válasz alapján a komponens megjeleníti a sikeres vagy sikertelen regisztráció üzenetet.
- Átirányítás: Ha a regisztráció sikeres volt, a felhasználót átirányítja a "logIn" oldalra.
- Hibaüzenetek: Ha bármilyen hiba történik a regisztráció során, a komponens megjeleníti az error típusú üzenetet.

![image](https://github.com/JungKata/vizsga/assets/97729333/2c34bc10-5d35-4b8a-9bd7-d553b8ab4b42)

A komponens továbbá rendelkezik egy Alert komponenssel, amely a sikeres vagy sikertelen regisztráció üzenetek megjelenítését végzi.

# LogIn
A LogIn komponens felelős a felhasználó bejelentkezéséért és kijelentkezéséért.

A LogIn komponens egy osztálykomponens, amely felelős a felhasználó bejelentkezésének és kijelentkezésének kezeléséért. Amikor a felhasználó kitölti a bejelentkezési űrlapot és megnyomja a "Log In" gombot, az adatokat elküldi a szervernek az azonosításhoz. Ha a szerver elfogadja az adatokat, a felhasználó bejelentkezik, és átirányításra kerül a "/quizMaker" oldalra. Ha hibás adatokat ad meg, a felhasználó hibaüzenetet kap.

Az űrlap a következő mezőket tartalmazza:
- emailAddress
- password

![image](https://github.com/JungKata/vizsga/assets/97729333/b8f2e453-c503-47e7-aeb2-16f906502660)

A komponensben van egy "Log Out" gomb is, amelyre kattintva a felhasználó kijelentkezik. Ez a funkció a szervernek elküldi a kijelentkezési kérést a felhasználói tokennel. Amikor a kijelentkezés sikeres, a felhasználói token törlődik, és a komponens frissíti az állapotot.

Amikor a komponens betöltődik, ellenőrzi, hogy van-e korábban bejelentkezett felhasználói token a helyi tárolóban. Ha van, akkor beállítja az Usertoken prop-ot a tárolt token értékére.

A komponens továbbá tartalmaz egy "Sign Up" gombot is, amelyre kattintva a felhasználó a regisztrációs oldalra navigál.

A LogIn komponens felelős a bejelentkezési és kijelentkezési folyamatok kezeléséért, valamint a navigációért a regisztrációs oldalra.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
