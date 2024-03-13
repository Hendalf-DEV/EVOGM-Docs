---
sidebar_position: 3
---


# CREATE, INSERT INTO, ja SELECT
Tässä kappaleessa selitetään kuinka nämä funktiot toimivat SQL:ssä.

## CREATE funktio

`CREATE` funktiota käytetään taulujen kokoamiseen. Tällä funktiolla voi luoda tietokannan, tai taulun. Tietokannan luomiseen käytetään `DATABASE` funktiota, silloin kun taulujen luomiseen käytetään `TABLE` funktiota.

Kaksi esimerkkiä

```sql title="Tietokannan luominen"
CREATE DATABASE tietokannanNimi
```
```sql title="Taulun luominen"
CREATE TABLE kayttaja (
  kayttajaID INTEGER PRIMARY KEY,
  nimi VARCHAR
)
```

On olemassa vielä pieni funktio jota voi käyttää, mutta siinä ei ole mitään isoa hyötyä, paitsi että jos taulukko on pakko rakentaa uudestaan jos se poistetaan.

`CREATE TABLE IF NOT EXISTS` - Luo taulukon jos sitä ei ole olemassa, jos on, niin skippaa tämän ja siirtyy eteenpäin.

## INSERT INTO funktio

`INSERT INTO` funktio lisää taulukkoon arvoja, tätä funktiota tullaan käsittelemään enemmän myöhemmin mutta kerron pää asiassa miten tämä toimii.

Meillä on kayttajat taulukko

![Taulukko](https://i.imgur.com/nqB3Lnq.png 'Taulukko')

Kuinka me lisätään siihen tietoa? Todella helposti. Kirjoitetaan komento
```sql title='INSERT komento'
INSERT INTO kayttaja (nimi, sukunimi) VALUES ('Daniel', 'Revin')
```
Noin, eli mitä tapahtuu? Taulukkoon `kayttaja` sarakkeisiin nimi ja sukunimi lisätään `VALUE` eli tiedot. Tässä tapauksessa `Daniel Revin` on tieto joka lisätään tauluun.

Miksi en lisännyt mitään arvoa `kayttajaID`? Tällä on data tyyppi INTEGER joka antaa jokaiselle ID:lle joka kerta numeron kun jokin tieto on lisätty. Joten ei tarvitse kirjata mitään itse, paitsi jos sitä itse ei halua.