const kaleidoscopeFirstSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

const kaleidoscopeSecondSnippet = `describe('USERS: POST route for /signup', () => {
  it('creates a new user and saves it to the database with a hashed password and a date field', async () => {
    const newUser = await request(app)
      .post('/users/signup')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        name: users.bryan.name,
        email: users.bryan.email,
        password: users.bryan.password
      })
    const foundUser = await db.User.findOne({
      email: users.bryan.email
    })
    expect(newUser.status).to.equal(200)
    expect(foundUser).to.exist
    expect(foundUser.password).to.not.equal (users.bryan.password)
    expect(foundUser).to.have.property('date')
  })
})`

const matchesAndPatchesFirstSnippet = `function checkUserPairs() { 
  let userRow = userPatch.row
  let userColumn = userPatch.column
  let userTopPatchRow = userRow - 1
  let userBottomPatchRow = userRow + 1
  let userLeftPatchColumn = userColumn - 1
  let userRightPatchColumn = userColumn + 1
  let userTopPatch = ''
  let userBottomPatch = ''
  let userLeftPatch = ''
  let userRightPatch = ''
  for (let i = 0; i < patches.length; i++) {
    if (patches[i].row === userTopPatchRow && patches[i].column === userColumn) {
      userTopPatch = patches[i]
    } else if (patches[i].row === userBottomPatchRow && patches[i].column === userColumn) {
      userBottomPatch = patches[i]
    } else if (patches[i].row === userRow && patches[i].column === userLeftPatchColumn) {
      userLeftPatch = patches[i]
    } else if (patches[i].row === userRow && patches[i].column === userRightPatchColumn) {
      userRightPatch = patches[i]
    }
  }
  let userTopTile = ''
  let userBottomTile = ''
  let userLeftTile = ''
  let userRightTile = ''
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].name === userTopPatch.status) {
      userTopTile = tiles[i]
    } else if (tiles[i].name === userBottomPatch.status) {
      userBottomTile = tiles[i]
    } else if (tiles[i].name === userLeftPatch.status) {
      userLeftTile = tiles[i]
    } else if (tiles[i].name === userRightPatch.status) {
      userRightTile = tiles[i]
    }
  }
  if (userTile.color === userTopTile.color || userTile.number === userTopTile.number || userTile.shape === userTopTile.shape) {
    userPatch.status = 'user captured'
    userTopPatch.status = 'user captured'
    feedback('USER MATCHED WITH TOP')
  }
  if (userTile.color === userBottomTile.color || userTile.number === userBottomTile.number || userTile.shape === userBottomTile.shape) {
    userPatch.status = 'user captured'
    userBottomPatch.status = 'user captured'
    feedback('USER MATCHED WITH BOTTOM')
  }
  if (userTile.color === userLeftTile.color || userTile.number === userLeftTile.number || userTile.shape === userLeftTile.shape) {
    userPatch.status = 'user captured'
    userLeftPatch.status = 'user captured'
    feedback('USER MATCHED WITH LEFT')
  }
  if (userTile.color === userRightTile.color || userTile.number === userRightTile.number || userTile.shape === userRightTile.shape) {
    userPatch.status = 'user captured'
    userRightPatch.status = 'user captured'
    feedback('USER MATCHED WITH RIGHT')
  }
}`

const matchesAndPatchesSecondSnippet = `function randomTile() {
  generateRandomTileIndex()
  if (tiles[randomTileIndex].status === 'opponent') {
    opponentTile = tiles[randomTileIndex]
    opponentTile.status = 'opponent active'
  } else {
    opponentTile = randomTile()
  }
  return opponentTile
}`

const readThisNextFirstSnippet = `router.get('/suggestion', isLoggedIn, (req, res) => {
  const user = res.locals.currentUser
  db.rating
    .findAll({
      where: {
        userId: user.id,
        value: 5
      }
    })
    .then(responses => {
      const randomStarredId = randomElement(responses).bookId
      axios
        .get(url + '&ids=' + randomStarredId)
        .then(output => {
          const starredBook = output.data.results[0]
          const starredSubjects = starredBook.subjects
          const randomStarredSubject = randomElement(starredSubjects).split(' ')[0]
          axios
            .get(url + '&topic=' + randomStarredSubject)
            .then(elements => {
              const ids = []
              const materials = elements.data.results
              for (let i = 0; i < materials.length; i++) {
                ids[i] = materials[i].id
              }
              finalSelection()
              function finalSelection() {
                const randomId = randomElement(ids)
                const randomBook = materials[materials.findIndex(object => object.id === randomId)]
                db.pass
                  .findAndCountAll({
                    where: {
                      userId: user.id,
                      bookId: randomId
                    }
                  })
                  .then(check => {
                    if (check.count === 0) {
                      if (excludeDuplicates(starredBook.title, randomBook.title)) {
                        axios
                          .get(url + '&ids=' + randomId)
                          .then(product => {
                            res.render('books/suggestion', {
                              book: product.data.results[0],
                              currentUser:user
                            })
                          })
                          .catch(() => res.status(400).render('404'))
                      } else {
                        finalSelection()
                      }
                    } else {
                      finalSelection()
                    }
                  })
                  .catch(() => res.status(400).render('404'))
              }
            })
            .catch(() => res.status(400).render('404'))
        })
        .catch(() => res.status(400).render('404'))
    })
      .catch(() => res.status(400).render('404'))
})`

const readThisNextSecondSnippet = `function excludeDuplicates(mainTitle, testTitle) {
  const mainStripped = mainTitle.replace(/[^a-zA-Z0-9 ]/g, '')
  const testStripped = testTitle.replace(/[^a-zA-Z0-9 ]/g, '')
  const mainArray = mainStripped.split(' ')
  let mainShort = ''
  if (mainArray.length >= 3) {
    const mainSliced = mainArray.slice(0, 3)
    mainShort = mainSliced.join(' ')
  } else {
    mainShort = mainStripped
  }
  return !testStripped.includes(mainShort)
}`

const regressionsFirstSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

const regressionsSecondSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

const regressionzFirstSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

const regressionzSecondSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

const tiresiasFirstSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

const tiresiasSecondSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

export { kaleidoscopeFirstSnippet, kaleidoscopeSecondSnippet, matchesAndPatchesFirstSnippet, matchesAndPatchesSecondSnippet, readThisNextFirstSnippet, readThisNextSecondSnippet, regressionsFirstSnippet, regressionsSecondSnippet, regressionzFirstSnippet, regressionzSecondSnippet, tiresiasFirstSnippet, tiresiasSecondSnippet }