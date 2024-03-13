---
sidebar_position: 1
---

# SQL Johdatus
SQL eli Structured Query Language on kieli jolla rakennetaan ja ylläpidätään tietokantoja.
Tietokantoja käytetään yleisesti kaikkialla tietojen ylläpitämiseen, esimerkiksi kirjastossa, Microsoftissa, Omniassa, verkkokaupoissa jne.

Tietokannoissa tallennetaan tietoa jota käytetään, siellä ei ole tarpeetonta eikä toistuvaa tietoa.

Otetaan esimerkki käyttäjät tietokannasta
Ensin pitää tietää mitä varten sitä käytetään?

- Rekisteröinti sivustolta saatu tieto tallennetaan tietokantaan
- Kirjautumisessa tarkistetaan annettu tieto ja päästetään käyttäjä sisään jos sellainen on ja tiedot täsmää eli salasana ja käyttäjänimi, käyttäjänimi voi olla vaikka email.

Mitä käyttäjät tietokannassa pitää olla?

- etunimi
- sukunimi
- email
- käyttäjänimi
- salasana

Kuinka tämä sitten näyttää tietokannassa?

Kirjoitetaan tämänlainen koodi, ei tarvitse ymmärtää, tärkeää että näkyy mitä se tekee (Kuva)
```sql title="kayttajat.db"
CREATE TABLE kayttajat (
    id INTEGER PRIMARY KEY,
    etunimi VARCHAR(255),
    sukunimi VARCHAR(255),
    email VARCHAR(255),
    kayttajanimi VARCHAR(255),
    salasana VARCHAR(255)
);

INSERT INTO kayttajat (etunimi, sukunimi, email, kayttajanimi, salasana) VALUES ('Mikki', 'Hiiri', 'mikki.hiiri@domain.com', 'mikhir', 'mikinrakas');

SELECT * FROM kayttajat
```

![SQLKuva](https://i.imgur.com/xNlqrbi.png 'SQLKuva')
Jotenkin noin, ei kyllä just saman näkoinen näkymä mutta silti.