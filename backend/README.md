<h1 align='center'>QuizRacer</h1>

# Database schema

![database](https://github.com/JungKata/vizsga/assets/97729333/fdfe1caa-4797-4b0d-b9e4-6b216c160c71)

<h1 align='center'>User</h1>
Thunder Client Test Rest Api-t használom teszteléshez.

# Sign Up
![image](https://github.com/JungKata/vizsga/assets/97729333/bfdc2d30-25c9-49fa-878d-3f26c6f9983f)

A regiszrációt egy POST metódusmodosító dekorátorral oldom meg. Ahhoz hogy sikeres legyen a regisztráció minden mezőt ki kell tölteni:
- firstname (string alapú validálással rendelkezik)
- lastname (string alapú validálással rendelkezik)
- emailAddress (email alapú validálással rendelkezik)
- password (string alapú validálással rendelkezik)

Az eredeti függvény visszatérési értéke, ha minden (kötelező) mező ki van töltve akkor a validáció sikeresen megtörtént.
Ha valamelyik kötelező mező hiányzik vagy már használt értékeket adott meg és- vagy a validáció sikertelen volt akkor hibaüzenetet dob.

 ```bash
 #authorization.controller.ts
 
 if(existingUserFromDatebase){
    let existingmessage = '';
        if(existingUserFromDatebase.emailAddress === userData.emailAddress)
        {
            existingmessage = 'Ezzel az email címmel már regisztráltak'
        }
        if(existingUserFromDatebase.firstname === userData.firstname){
            existingmessage = 'Ezzel a fistnammel már regisztráltak'
        }
        if(existingUserFromDatebase.lastname === userData.lastname){
            existingmessage = 'Ezzel a lastnammel már regisztráltak'
        }

        throw new BadRequestException(existingmessage);
    }
  ```
  </br>
  
A password titkosítását bcrypt-tel  valósítottam meg.

```bash
 #authorization.controller.ts
 
try {
        const userId = userData?.id || '';
        const saveUser = Object.assign(new User(), userData);
        saveUser.id == userId;
        const passwordHash = await bcrypt.hash(saveUser.password, 10);
        saveUser.password = passwordHash;
        await usersRepository.save(saveUser);
        console.log(saveUser);
      } catch (error) {
        console.error('Error saving user to database:', error.message);
      }
```

# AllUser
Az összes felhasználót GET metódusmodosító dekorátor segítségével hívom meg.

![image](https://github.com/JungKata/vizsga/assets/97729333/121bedd9-3dc1-46c8-845e-f0f22b2acf9d)
- Function
 ```bash
 #signUp.service.ts
 
 async findAll() {
        return await this.usersRepository.find({
            select: ["firstname", "lastname", "emailAddress", "password", "id" ],
           })
      } 
```
# FindOneUser
Az összes felhasználó közül id alapú kereséssel GET metódusmodosító dekorátorral hajtom végre a keresést

![image](https://github.com/JungKata/vizsga/assets/97729333/2194d772-d0cd-414e-bec5-f149926fe300)

```bash
#signUp.service.ts

async findOne(id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["id","firstname", "lastname", "emailAddress", "password" ],
            where: [{id}]
        });
    }
```

<h1 align=center>LogIn</h1>

# LogIn

![image](https://github.com/JungKata/vizsga/assets/97729333/03db5a11-84f1-4e93-bdc1-790ac55c42bc)

A bejelentkezéshez is egy POST metódusmodosító dekorátort használtam.  Ahhoz hogy sikeres legyen a bejelentkezls minden mezőt ki kell tölteni:
- emailAddress
- password

Az eredeti függvény visszatérési értéke, ha minden kötelező mező ki van töltve és a validáció sikeresen megtörtént.
Ha valamelyik kötelező mező hiányzik vagy helytelen adatott adott meg és a validáció sikertelen volt akkor hibaüzenetet dob.

```bash
#authorization.controller.ts

async login(@Body() profileData : profileDto){
        const usersRepository = this.dataSource.getRepository(User)
        const user = await usersRepository.findOne({
            where: {emailAddress : profileData.emailAddress},
        });
        if(!user){
            throw new UnauthorizedException('Hibás email vagy jelszó')
        }
        
        const passMatch = await bcrypt.compare(
            profileData.password,
            user.password
        );

        if(!passMatch){
            throw new UnauthorizedException('Hibás email vagy jelszó')
        }
```
# Token
Generálunk egy véletlenszerű token-t a megadott hosszúságban. A generált token hossza alapértelmezetten karakter hosszú.
A tokeneket gyakran használják a felhasználók azonosítására és hitelesítésére. Amikor egy felhasználó bejelentkezik egy alkalmazásba, egy token generálódik, és az alkalmazás ezt a tokent használja azonosítóként és hitelesítési eszközként a későbbi kérések során. A tokenek lehetővé teszik, hogy a felhasználó bejelentkezve maradjon anélkül, hogy folyamatosan meg kellene adnia a felhasználónevet és jelszót.

- token generálása

```bash
#authorization.service.ts

async generateUserToken(user: User, tokenLength: number = 32): Promise<Token> {
      try {
        var randomToken = randomBytes(tokenLength);
        var randomTokenString = randomToken.toString('hex');
        
        var token = new Token();
        token.user = user;
        token.token = randomTokenString;
        await this.dataSource.getRepository(Token).save(token);
        
        return token;
      } catch (error) {
        console.error('Error generating token:', error);
        throw new Error('Failed to generate token');
      }
    }
```

- token törlése


```bash
#authorization.service.ts

async deleteUserToken(token: string){
        const tokenRepository = this.dataSource.getRepository(Token);
        await tokenRepository.delete({token});
```

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

