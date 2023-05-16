<h1 align='center'>QuizRacer</h1>

# Felhasználói leírás

Üdvözöllek a QuizRacer nevű weboldalon! Ez a platform arra lett tervezve, hogy segítsen szórakoztató és interaktív módon tesztelni a tudásodat különböző témákban. Olvass tovább, és ismerd meg a weboldal nyújtotta lehetőségeket!

# Regisztráció és Belépés:
- Az első lépés a weboldal használatához a regisztráció vagy a bejelentkezés.
- Ha új felhasználó vagy, egyszerűen töltsd ki a regisztrációs űrlapot, és hozd létre a saját fiókodat.
- Ha már regisztráltál korábban, csak add meg a felhasználóneved és jelszavad a bejelentkezéshez.

# Főoldal:
- Miután sikeresen bejelentkeztél, a főoldalon találod magad. Itt láthatod a legfrísebb híreket.
- Leírja a játék szabályait
- Legvégén láthatjuk a készítő adatait.

# Quiz:
- Amikor beléptél a Quiz részbe elkezdődik a játék. 
- Minden kérdéshez több választási lehetőség tartozik. Válaszd ki a szerinted helyes megoldást, majd kattints a "Következő" gombra a további kérdéshez.
- A célod az, hogy minél több kérdésre helyes választ adj, és minél magasabb pontszámot érj el.
- Ha végeztél a kvízzel kiírja a pontszámokat

<h1 align=center> A weboldal futtatása</h1>
 
# Első lépés -XAMPP
A weboldalunk futtatásához először el kell indítanunk az XAMPP szoftvert, majd aktiválnunk kell az Apache és MySQL szolgáltatásokat. Ez azért szükséges, mert a weboldal működéséhez egy webszervert és egy adatbázis-szervert is használunk.

# Második lépés - futtatás
Nyissuk meg a Visual Studio Code programot. Ez után másoljuk be https://github.com/JungKata/vizsga.git linket. Mentsük el a projektet.
- Backend
Nyissuk meg a backend mappában lévő fájlokat. Majd a terminálban írjuk be a "npm install" parancsot, hogy telepítsük a szükséges modulokat. Miután ez megtörtént, futtassuk a "npm run start:debug" parancsot a terminálból, hogy elindítsuk a backend szerverünket.

-Frontend
Nyissuk meg a frontend mappában lévő fájlokat. Majd a terminálban írjuk be a "npm install" parancsot, hogy telepítsük a szükséges modulokat. Miután ez megtörtént, futtassuk a "npm run start" parancsot a terminálból, hogy elindítsuk a frontend szerverünket.
Fontos, hogy a 3001 porton indítsuk a frontend szerverünket, mivel a 3000 port már foglalt a backend miatt. Amikor megkérdezi, hogy futtassa-e a szerverünket a 3001-es porton, válasszuk a "Y" opciót.

# További README fájlok a Backend és a Frontend mappán belül található




<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
	
	
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Installation
```bash
$ npm install
```
# Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
# Test
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Support
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://nestjs.com/)

# Stay in touch
- Author - Kamil Myśliwiec
- Website - https://nestjs.com
- Twitter - @nestframework
# License
[MIT](https://choosealicense.com/licenses/mit/)

