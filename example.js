const create_acronym = require('./');

// create_acronym('for your information', (err, resp) => {
//   if (err) {
//     console.log(err)
//   }
//
//   console.log(resp)
// })

create_acronym('be right back')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

  create_acronym('unelma platforms')
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })

  create_acronym('international business machine')
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })

    create_acronym('')
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })

create_acronym('talk to you later')
  .then(console.log)
  .catch(console.error)
