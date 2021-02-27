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

const readThisNextFirstSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

const readThisNextSecondSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

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