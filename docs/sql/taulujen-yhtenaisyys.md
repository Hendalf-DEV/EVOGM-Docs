---
sidebar_position: 2
---

# Taulojen yhtenäisyys
Kuinka 2 taulua esimerkiksi toimivat yhdessä? Mitä yhteisiä tietoja näillä on?

## Kaksi taulua, kolme taulua, NELJÄ TAULUA???
Hieman yli reagoiva otsikko kyllä, mutta mitä yritän sanoa sillä?

Jokaisella taululla on ainakin yksi yhteinen tieto jos sitä vaaditaan, tai niissä voi olla jonkinlainen ketju, mutta silti nämä tiedot ovat yhteisiä.

Otetaan esimerkiksi kaksi taulua aluksi. Mitä yhteistä niillä voi olla ja mitä tietoja voivat olla samoja.

![KirjailijaJaKirja](https://i.imgur.com/wJFg4Gh.png 'Kirjailija ja kirja')

Näitten taulojen yhteinen tieto on kirjailijan nimi, joka saadaan toiselta taulukolta.

## Lisää taulukoita
Lisätään vielä yksi taulukko ja enemmän yhteisiä tietoja.

![KolmeTauluaJaEnemmanYhtenaisyytta](https://i.imgur.com/bL50juG.png 'Kolme taulua ja enemman yhtenaisyytta')

Nyt meillä on mahdollisuus etsiä kirjoja tekijän ID:llä, tai kirjojen lukumäärän kirjan ID:llä.
Tietokannat antaa enemmän mahdollisuuksia koodaamisessa. Tällä tavalla voidaan päästä eroon mapping ominaisuudesta koodissa tai ylimääräisten muuntajien käytöstä. Vähemmällä koodilla, päästään tehokkaampaan tulevaisuuteen.

Jokaisella taulukolla on yhtenäisyys. Eli kirjailija id = tekija id >=< kirja id = varasto kirja id. Eikö niin? Kahdella ID:llä saa niin paljon tietoja poimittuun.

## Kirjasto tietokannan esimerkki

![Kuusi taulua](https://i.imgur.com/lJrkMux.png 'Kuusi taulukkoa')

Nyt meillä on hieman kiinnostavampi taulu. Tässä on lainaajat, kirjan kustantajat, kirjailijat, varaston tiedot. Miksi 'lainatut kirjat' taulussa ei ole pää avainta? Koska sitä ei tarvita, sillä me ei tulla etsimään mitään, meillä on lainaajan ID jolla saadan jo kiran ID josta saadaan mikä kirja on lainattu, ja kappale määrä. Eli tietoa voi olla paljon. Tässä on esimerkki koodi, voitte testata tätä.

Ei näytä lainaajia, sillä en jaksanut nyt tehdä sitä. Sen toiminta periaate on sellainen että lainaaja piippaa kirjasto kortin, systeemi etsii ja tallentaa hänen ID:n, sitten kirjan piippaus, tallentaa kirjan ID:n ja kun painike 'LAINAA' on painettu se lisää tiedot taulukkoon, samalla kpl määrä myös.

[Avaa SQL editori](https://sqlfiddle.com/sqlite/online-compiler?id=948a6a0e-dfdf-4dec-8797-e1fcf0efdc40)