-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Máj 17. 00:58
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `quizer_racer`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `quiz_maker`
--

CREATE TABLE `quiz_maker` (
  `id` int(11) NOT NULL,
  `tema` varchar(255) NOT NULL,
  `kerdes` varchar(255) NOT NULL,
  `valasz_1` varchar(255) NOT NULL,
  `valasz_2` varchar(255) NOT NULL,
  `valasz_3` varchar(255) NOT NULL,
  `valasz_4` varchar(255) NOT NULL,
  `helyes_valasz` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- TÁBLA KAPCSOLATAI `quiz_maker`:
--

--
-- A tábla adatainak kiíratása `quiz_maker`
--

INSERT INTO `quiz_maker` (`id`, `tema`, `kerdes`, `valasz_1`, `valasz_2`, `valasz_3`, `valasz_4`, `helyes_valasz`) VALUES
(1, 'Biológia', 'Hol élnek a pingvinek?', 'déli sark', 'északi sark', 'Afrika', 'Amerika', 'déli sark'),
(2, 'Biológia', 'Melyik családba tartozik a paradicsom?', 'zöldségfélék', 'gyümölcsfélék', 'tökfélék', 'burgonyafélék', 'burgonyafélék'),
(3, 'Biológia', 'Mennyi az elefántok vemhességi ideje?', '12 hónap', '9 hónap', '22 hónap', '18 hónap', '22 hónap'),
(4, 'Biológia', 'Hány csigolyából áll a zsiráf nyaka?', '17-ből', '27-ből', '20-ból', '27-ből', '27-ből'),
(5, 'Biológia', ' Melyik törzsbe tartozik a búza?', 'egyszikű', 'nyitvatermők', 'zárvatermők', 'mohák', 'zárvatermők'),
(6, 'Biológia', 'Mivel táplálkozik a lajhár?', 'fűvel', 'virágokkal', 'gyümölcsökkel', 'levelekkel', 'levelekkel'),
(7, 'Biológia', 'Hol él a koala?', 'Ázsiában', 'Ausztáliában', 'Amerika', 'Afrika', 'Ausztáliában'),
(8, 'Biológia', 'Mit vizsgálnak az EEG-vel?', 'szívet', 'vesét', 'agyat', 'tüdőt', 'agyat'),
(9, 'Biológia', 'Melyik a természetben előforduló legkeményebb ásvány?', 'ametiszt', 'gyémánt', 'gránát', 'Opál ', 'gyémánt'),
(10, 'Biológia', 'Hány évig élhet egy óriásteknős?', '50-100 évig', '100-150 évig', '150-200 évig', '200-250 évig ', '150-200 évig'),
(11, 'Biológia', 'Honnan származik a napraforgó?', 'Ázsiából ', 'Dél-Amerikából', 'Afrikából', 'Észak-Amerikából', 'Észak-Amerikából'),
(12, 'Biológia', 'Mi a neve a hím kecskének?', 'mén', 'bak', 'kan', 'kos', 'bak'),
(13, 'Biológia', 'Hány méter hosszú a nagy ámbráscet?', '40m', '10m', '50m', '20m', '20m'),
(14, 'Biológia', 'Hány db nyaki csigolyánk van?', '7db', '6db', '8db', '9db', '7db'),
(15, 'Biológia', 'Hány karjuk van a polipoknak?', '6db', '8db', '7db', '9db', '8db'),
(16, 'Biológia', 'Hol helyezkedik el a gerincvelő?', 'nyúltvelőben', 'agyban', 'gerinccsatornában', 'mirigyben', 'gerinccsatornában'),
(17, 'Biológia', 'Hány tejfoga van egy embernek?', '24db', '32db', '40db', '20db', '20db'),
(18, 'Biológia', 'Melyik szervünkre van jó hatással a galagonya?', 'szív', 'agy', 'vese', 'máj', 'szív'),
(19, 'Sport', 'Hány évente kerül megrendezésre a labdarúgó EB?', '2 évente', '3 évente', 'évente', '4 évente', '4 évente'),
(20, 'Sport', 'Hol rendezték meg a 2016-os kajak-kenu Európa-bajnokságot?', 'Peruban', 'Moszkvában', 'Londonban', 'Párizsban', 'Moszkvában'),
(21, 'Sport', 'Hol született Lionel Messi a híres focista?', 'Brazíliában', 'Franciaországban', 'Spanyolországban', 'Argentínában', 'Argentínában'),
(22, 'Sport', 'Michael Phelps úszó, hány aranyérmet nyert 2012-ben Londonban?', '2db', '5db', '6db', '4db', '4db'),
(23, 'Sport', 'Melyik évben lett világbajnok Talmácsi Gábor?', '2007-ben', '2010-ben', '2009-ben', '2006-ban', '2007-ben'),
(24, 'Sport', 'Carl Lewis melyik sportág olimpiai bajnoka?', 'úszás', 'íjászat', 'atlétika', 'torna', 'atlétika'),
(25, 'Sport', 'Kinek a becene volt a \"Magyar delfin\"?', 'Cseh László', 'Komjádi Béla', 'Rózsa Norbert', 'Hajós Alfréd', 'Hajós Alfréd'),
(26, 'Sport', 'Melyik sportág Olimpiai bajnoka Pars Krisztián?', 'gerelyhajítás', 'kalapácsvetés', 'távolugrás', 'diszkoszvetés ', 'kalapácsvetés'),
(27, 'Sport', 'Hányszoros világbajnok volt, Kolonics György kenus?', '20', '10', '8', '15', '15'),
(28, 'Sport', 'Melyik város szülötte Vajda Attila kenus?', 'Szeged', 'Pécs', 'Miskolc', 'Sopron', 'Szeged'),
(29, 'Sport', 'Melyik ország csapata gyűjtötte be a legtöbb aranyérmet a londoni olimpián?', 'Kína', 'Oroszország', 'Egyesült Államok', 'Magyarország', 'Egyesült Államok'),
(30, 'Sport', 'Ki vitte a magyar zászlót a Riói olimpia megnyitóján?', 'Hosszú Katinka', 'Szilágyi Áron', 'Cseh László', 'Gyurta Dániel', 'Szilágyi Áron'),
(31, 'Sport', 'A 2008-as Pekingi olimpián hány ezüstérmet szerzett Cseh László?', '4', '2', '3', '5', '3'),
(32, 'Sport', 'Ki a magyar sport első női olimpiai aranyérmese?', 'Elek Ilona', 'Keleti Ágnes', 'Köteles Erzsébet', 'Nagy Tímea', 'Elek Ilona'),
(33, 'Sport', 'Ki Imre Géza párbajtőrvívó felesége?', 'Keleti Ágnes', 'Kökény Beatrix', 'Szekeres Klára', 'Bíró Blanka', 'Kökény Beatrix'),
(34, 'Sport', 'Hol került megrendezésre 2000-ben a nyári olimpiai játékok?', 'Sydneyben', 'Athénban', 'Mexikoban', 'Londonban', 'Sydneyben'),
(35, 'Melyik évben hunyt el Kesjár Csaba autóversenyző?', '1976-ban', '1987-ben', '1991-ben', '1976-ban', '1988-ban', '1988-ban'),
(36, 'Sport', 'Hány érme van összesen Braun Ákos, cselgáncsozónak?', '4', '6', '5', '3', '3'),
(37, 'Sport', 'Melyik úszásnem olimpiai bajnoka Rózsa Norbert?', 'pillangó úszás', 'gyorsúszás', 'mellúszás', 'hátúszás', 'mellúszás'),
(38, 'Sorozat', 'Mikor lett vége a Szomszédok c. teleregénynek?', '1987-ban', '1978-ban', '1999-ben', '1996-ban', '1999-ben'),
(39, 'Sorozat', 'Hogy hívják Aladár kutyáját a Mézga családban?', 'Marcipán', 'Max', 'Baxi', 'Blöki', 'Blöki'),
(40, 'Sorozat', 'Hol játszódik a Thomas a gőzmozdony c. rajzfilmsorozat?', 'Futrinka utcában', 'Sodor szigetén', 'Kakukkiában', 'Űrben', 'Sodor szigetén'),
(41, 'Sorozat', 'Ki játssza Vili bácsi szerepét a Barátok köztben?', 'Gáspár Laci', 'Kárpáti Péter', 'Várkonyi András', 'Szőke Zoltán', 'Várkonyi András'),
(42, 'Sorozat', 'Milyen fajta kutya volt Frakk, a rajzfilmben?', 'magyar vizsla', 'német juhász', 'mopsz', 'tacskó', 'magyar vizsla'),
(43, 'Sorozat', 'Mi volt az X-akták szállóigéje?', 'A segítség odaát van.', 'Az igazság odaát van.', 'A remény hal meg utoljára', 'Az erő legyen veled', 'Az igazság odaát van.'),
(44, 'Sorozat', 'Hány évada volt a Jóbarátok c. amerikai sorozatnak?', '9 évad', '8 évad', '10 évad', '6 évad', '10 évad'),
(45, 'Sorozat', 'Melyik amerikai város helyszínelőiről szól a CSI: A helyszínelők c. sorozat?', 'Miami Beach', 'Los Angeles', 'Boston', 'Las Vegas', 'Las Vegas'),
(46, 'Sorozat', 'Mióta látható a Castle c. sorozat Magyarországon?', '2010', '2006', '2002', '2012', '2010'),
(47, 'Sorozat', 'Mi írányítja az életét Sheldon Coopernek, az Agymenők c. sorozatban?', 'Sport', 'logika', 'szerelem', 'emberek', 'logika'),
(48, 'Sorozat', 'Melyik sorozatban szerepelt Gyurta Dániel?', 'Szomszédok', 'Jó barátok', 'Éjjel-Nappal Budapest', 'Barátok közt', 'Barátok közt'),
(49, 'Sorozat', 'Mi Carrie foglalkozása a Szex és New York c. sorozatban?', 'PR menedzser', 'ügyvéd', 'divat tervező', 'újságíró', 'újságíró'),
(50, 'Sorozat', 'Hány ujjuk van a Simpson karaktereknek?', '6', '3', '4', '5', '4'),
(51, 'Sorozat', 'Melyik amerikai államban játszódik A mentalista c. krimisorozat?', 'Kaliforniában', 'Alaszkában', 'Floridában', 'Kandában', 'Kaliforniában'),
(52, 'Sorozat', 'Melyik színésznő nem a Bűbájos boszorkák főszereplője?', 'Alyssa Milani', 'Mi Carrie', 'Sarah Jessica Parker', 'Shannen Doherty', 'Sarah Jessica Parker'),
(53, 'Sorozat', 'Melyik sorozatban nem játszott Kyle MacLachlan amerikai színész?', 'Mentalista', 'Bűbájos boszorkák', 'Szex és New York', 'Twin Peaks', 'Bűbájos boszorkák'),
(54, 'Sorozat', 'Mit szeret Gombóc Artúr, Pom Pom meséiben?', 'Hamburgert', 'csokoládét', 'Pizzát', 'Gyümölcsöt', 'csokoládét'),
(55, 'Sorozat', 'Mit tudott a kockásfülű nyúl a rajzfilmben?', 'úszni', 'biciklizni', 'fára mászni', 'repülni', 'repülni'),
(56, 'Sorozat', 'Ki volt Süsü hangja a Süsü, a sárkány c. bábfilmsorozatban?', 'Bodrogi Gyula', 'Usztics Mátyás', 'Sztankay István', 'Till Attila', 'Bodrogi Gyula'),
(57, 'Sorozat', 'Hogy hívták a fagylaltost a Keménykalap és krumpliorr c. filmsorozatban?', 'Oriza Triznyák', 'Nemecsek', 'Bagaméri', 'Lópici Gáspár', 'Bagaméri');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `quiz_maker`
--
ALTER TABLE `quiz_maker`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `quiz_maker`
--
ALTER TABLE `quiz_maker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
