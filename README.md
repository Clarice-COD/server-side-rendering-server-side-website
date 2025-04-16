instructie: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Mediahuis server side rendering
Ontwerp en ontwikkel een server-side website voor Mediahuis, waarin een overzicht van het programma van een aantal radiostations te zien zijn.
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Inleiding](#inleiding)
  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Inleiding

### Over Mediahuis
Mediahuis is een mediabureau/radiocorp met onder andere meerdere radiostations zoals Veronica, Slam, 100% NL, Sublime en Sunlight. Omdat de organisatie telkens groeit, is de kans groot dat er meer bedrijven zoals radiostations zich gaan aansluiten bij Mediahuis. Om een overzicht te maken helpt Triple met een EPG voor deze radiozenders.

### kwestie
Alle radiostations hebben een individuele website, wanneer men de programma's van deze radiostations wil vergelijken, kost dit vrij veel tijd. 

### Oplossing
Maak één overzicht van het programma van alle aangeboden radiostations.

## Beschrijving

### Ontwerpkeuzes

Ik heb in [Figma](https://www.figma.com/design/U34cHN6ayYvC0GDI9gXpAT/Untitled?node-id=0-1&p=f) een ontwerp gemaakt voor de website. 

#### Mobiele navigatie
Ik heb de navigatie om op de dagen te kunnen filteren onderin het scherm geplaatst. Dan kunnen de gebruikers gemakkelijk bij de knoppen met hun vingers en daardoor gemakkelijker en sneller door de website heen navigeren. Om te voorkomen dat de knoppen niet volledig in beeld komen, heb ik de knoppen meer afstand van de onderkant gegeven.

<img width="200" alt="image" src="https://github.com/user-attachments/assets/1a7efbb2-43a5-4085-9550-13bfed81a676" />

#### Desktop navigatie
Doordat er meer ruimte is bij laptop heb ik de navigatie naar de zeikant verplaatst en vallen de knoppen meer op dan wanneer deze onderaan staan omdat de gebruiker van boven naar beneden leest.

<img width="209" alt="image" src="https://github.com/user-attachments/assets/a33f9cd8-1dc5-416e-be18-65629b334e44" />

#### Kleurgebruik
Ik heb de kleuren van Veronica gebruikt maar de veel aanwezige lichtblauwe kleur vervangen door hun donkerblauwe kleur om beter contrast te krijgen. 

<img width="404" alt="image" src="https://github.com/user-attachments/assets/a14de604-7f2f-4f4b-847e-df0e0deeb27a" />

#### Fonts
Ik heb de typografie van Veronica gebruikt, deze hadden we aangeleverd gekregen van de klant.

<img width="567" alt="image" src="https://github.com/user-attachments/assets/087599bd-8935-4f7c-a3c3-8cea491869f3" />


### Responsive
De website is vanuit mobile first gebouwd. Er zitten enkele verschillen in de layout zoals de navigatie tussen de dagen zoals ik eerder al heb getoond in de ontwerp keuzes. Bij mobiel en tablet bevind de navigatie zich onderaan en bij latop aan de zeikant. Het schema op mobiel en tablet zijn in het midden gecentreerd. Op desktop is er meer ruimte voor het schema. hier is het schema links uitgeleind en staan de shows zowel onder als naast elkaar zoals je hieronder kan zien. 

Mobiel:

<img height="300" alt="image" src="https://github.com/user-attachments/assets/f4389838-fa9c-4aa7-a69e-b2c206b83c16" />

Tablet:

<img height="300" alt="image" src="https://github.com/user-attachments/assets/6b28cc63-d021-4efb-aac8-fb028df2842f" />

Desktop:

<img height="300" alt="image" src="https://github.com/user-attachments/assets/33f9240c-ecb2-4563-81a6-ed93e14d4bae" />


## Gebruik

De website kan je gebruiken om het schema van alle radiostations in 1 overzicht te zien. Dus alle radiostations staan door elkaar zoals Veronica, Slam en Sublime. Daarnaast kan je filteren op de dagen. Wil je het programma zien van 1 bepaalde dag uit de week? Dan kan de gebruiker dit besturen met de knoppen in de navigatie die onderin staan. Zie hieronder een voorbeeld van maandag en woensdag, hier verschillen de shows per dag:

### maandag:

<img width="150" alt="image" src="https://github.com/user-attachments/assets/e56c0feb-91fb-4b3b-a507-7b04d9b1cf8c" />

### woensdag:

<img width="150" alt="image" src="https://github.com/user-attachments/assets/6bfe3d9b-4ecc-4a82-9d64-1ba2227d4602" />


### Volgende plannen
Ik ben bezig om een filter te maken voor de radiostations. Ook wil ik de shows sorteren op tijd.

## Kenmerken
### Custom properties
Ik heb gebruik gemaakt van custom properties, omdat het makkelijk aan te passen is wanneer er een aanpassing gemaakt moet worden en er meer eenheid komt omdat je met vaste instellingen werkt zoals het kleur gebruik, grootte van de fonts en het aantal witruimte.  

https://github.com/Clarice-COD/server-side-rendering-server-side-website/blob/51f50bac174bf7072e062a36deada6d278e75802/public/style.css#L6-L57

### @Media 
Om de website responsive te maken gebruik ik @media. In de onderstaande voorbeelden laat ik zien hoe ik @media gebruik. 

https://github.com/Clarice-COD/server-side-rendering-server-side-website/blob/51f50bac174bf7072e062a36deada6d278e75802/public/style.css#L94-L105

https://github.com/Clarice-COD/server-side-rendering-server-side-website/blob/51f50bac174bf7072e062a36deada6d278e75802/public/style.css#L206-L232

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
