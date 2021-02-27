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

const matchesAndPatchesFirstSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

const matchesAndPatchesSecondSnippet = `const foodSchema = new Schema({
  inputs: { type: Schema.Types.Mixed, default: {} },
  date: {
    type: Date,
    default: Date.now()
  },
}, { minimize: false })`

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