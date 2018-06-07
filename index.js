const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
app.get('/times', (req, res) => {
 $.ajax({
        type: "GET",
        url: "https://c0esh338.caspio.com/dp/94b93000649566bbdbf74bc8babd",
        data: { },
    });
  res.render(data)
})
