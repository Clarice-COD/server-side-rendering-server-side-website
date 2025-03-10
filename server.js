// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express, { json } from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


console.log('Hieronder moet je waarschijnlijk nog wat veranderen')
// Doe een fetch naar de data die je nodig hebt
// const apiResponse = await fetch('...')
const radioResponse = await fetch ('https://fdnd-agency.directus.app/items/mh_shows?fields=*.*.*')
const radioResponseJSON = await radioResponse.json()

const allShowsinner = [];
 
radioResponseJSON.data.forEach(function(show) {
 
  allShowsinner.push({
      ...show.show,
      from: show.from,
      until: show.until,
    });
  });
 
// Controleer eventueel de data in je console
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(apiResponseJSON)

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Maak een GET route voor de index (meestal doe je dit in de root, als /)
app.get('/', async function (request, response) {
  const radioUrl = "https://fdnd-agency.directus.app/items/mh_day?fields=date,shows.mh_shows_id.from,shows.mh_shows_id.until,shows.mh_shows_id.show.name,shows.mh_shows_id.show.radiostation.name,shows.mh_shows_id.show.radiostation.logo,shows.mh_shows_id.show.users.mh_users_id.full_name"
  const radioResponse = await fetch(radioUrl)
  const radioResponseJSON = await radioResponse.json()

  // const dayUrlFilters = "?fields="
// https://fdnd-agency.directus.app/items/mh_day?fields=date,shows.mh_shows_id.from,shows.mh_shows_id.until,shows.mh_shows_id.show.name,shows.mh_shows_id.show.radiostation.name,shows.mh_shows_id.show.radiostation.logo,shows.mh_shows_id.show.users.mh_users_id.full_name

  // const showsUrlFilters = "?fields="

  // const radiostationsResponse = await fetch(radiostationsUrl + radiostationsUrlFilters)


  // const radioUrl = "https://fdnd-agency.directus.app/items/mh_shows?fields=*.*.*"
  // const radioUrlFilters = "?fields=logo"
  response.render('index.liquid', { calendar: radioResponseJSON.data })
})

// DAY 1
app.get('/maandag', async function (request, response) {
  const radioResponse = await fetch('https://fdnd-agency.directus.app/items/mh_day?fields=date,shows.mh_shows_id.from,shows.mh_shows_id.until,shows.mh_shows_id.show.name,shows.mh_shows_id.show.radiostation.*,shows.mh_shows_id.show.users.mh_users_id.*&filter=%7B%22_and%22:[%7B%22weekday(date)%22:%221%22%7D,%7B%22shows%22:%7B%22mh_shows_id%22:%7B%22show%22:%7B%22radiostation%22:%7B%22name%22:%22Radio%20Veronica%22%7D%7D%7D%7D%7D]%7D')
  const radioResponseJSON = await radioResponse.json()
  response.render('index.liquid', { calendar: radioResponseJSON.data })
})

// DAY 2
app.get('/dinsdag', async function (request, response) {
  const radioResponse = await fetch('https://fdnd-agency.directus.app/items/mh_day?fields=date,shows.mh_shows_id.from,shows.mh_shows_id.until,shows.mh_shows_id.show.name,shows.mh_shows_id.show.radiostation.*,shows.mh_shows_id.show.users.mh_users_id.*&filter=%7B%22_and%22:[%7B%22weekday(date)%22:%222%22%7D,%7B%22shows%22:%7B%22mh_shows_id%22:%7B%22show%22:%7B%22radiostation%22:%7B%22name%22:%22Radio%20Veronica%22%7D%7D%7D%7D%7D]%7D')
  const radioResponseJSON = await radioResponse.json()
  response.render('index.liquid', { calendar: radioResponseJSON.data })
})

// DAY 3
app.get('/woensdag', async function (request, response) {
  const radioResponse = await fetch('https://fdnd-agency.directus.app/items/mh_day?fields=date,shows.mh_shows_id.from,shows.mh_shows_id.until,shows.mh_shows_id.show.name,shows.mh_shows_id.show.radiostation.*,shows.mh_shows_id.show.users.mh_users_id.*&filter=%7B%22_and%22:[%7B%22weekday(date)%22:%223%22%7D,%7B%22shows%22:%7B%22mh_shows_id%22:%7B%22show%22:%7B%22radiostation%22:%7B%22name%22:%22Radio%20Veronica%22%7D%7D%7D%7D%7D]%7D')
  const radioResponseJSON = await radioResponse.json()
  response.render('index.liquid', { calendar: radioResponseJSON.data })
})

// DAY 4
app.get('/donderdag', async function (request, response) {
  const radioResponse = await fetch('https://fdnd-agency.directus.app/items/mh_day?fields=date,shows.mh_shows_id.from,shows.mh_shows_id.until,shows.mh_shows_id.show.name,shows.mh_shows_id.show.radiostation.*,shows.mh_shows_id.show.users.mh_users_id.*&filter=%7B%22_and%22:[%7B%22weekday(date)%22:%224%22%7D,%7B%22shows%22:%7B%22mh_shows_id%22:%7B%22show%22:%7B%22radiostation%22:%7B%22name%22:%22Radio%20Veronica%22%7D%7D%7D%7D%7D]%7D')
  const radioResponseJSON = await radioResponse.json()
  response.render('index.liquid', { calendar: radioResponseJSON.data })
})

// DAY 5
app.get('/vrijdag', async function (request, response) {
  const radioResponse = await fetch('https://fdnd-agency.directus.app/items/mh_day?fields=date,shows.mh_shows_id.from,shows.mh_shows_id.until,shows.mh_shows_id.show.name,shows.mh_shows_id.show.radiostation.*,shows.mh_shows_id.show.users.mh_users_id.*&filter=%7B%22_and%22:[%7B%22weekday(date)%22:%225%22%7D,%7B%22shows%22:%7B%22mh_shows_id%22:%7B%22show%22:%7B%22radiostation%22:%7B%22name%22:%22Radio%20Veronica%22%7D%7D%7D%7D%7D]%7D')
  const radioResponseJSON = await radioResponse.json()
  response.render('index.liquid', { calendar: radioResponseJSON.data })
})




  // const radioUrlJSON = await radioResponse.json()  
    
  // const radiostationsUrl = "https://fdnd-agency.directus.app/items/mh_shows?fields=*.*.*"
  // const radiostationsUrlFilters = "?fields=logo,name,untill,from"

  //   const radiostationsUrl = "https://fdnd-agency.directus.app/items/mh_radiostations"
  // const radiostationsUrlFilters = "?fields=logo,name"

  // const radiostationsResponse = await fetch(radiostationsUrl + radiostationsUrlFilters)
  // const radiostationsResponseJSON = await radiostationsResponse.json()

  // const showsResponse = await fetch('https://fdnd-agency.directus.app/items/mh_day?fields.*.*.*')
  // const showsResponseJSON = await showsResponse.json()
  // console.log(showsResponseJSON);

  // Render index.liquid uit de Views map
  // Geef hier eventueel data aan mee


// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
