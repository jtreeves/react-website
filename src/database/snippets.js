const kaleidoscopeFirstSnippet = `describe('USERS: POST route for /signup', () => {
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

const kaleidoscopeSecondSnippet = `const foodSchema = new Schema({
    inputs: { type: Schema.Types.Mixed, default: {} },
    date: {
      type: Date,
      default: Date.now()
    },
  }, { minimize: false })`

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

const regressionsFirstSnippet = `def exponential(data):
  independent_matrix = []
  dependent_matrix = []
  for i in range(len(data)):
    independent_matrix.append([data[i][0], 1])
    dependent_matrix.append([log(data[i][1])])
  transposition = transpose(independent_matrix)
  product = multiplication(transposition, independent_matrix)
  product_matrix = matrix(product, dtype='float')
  inversion = inv(product_matrix)
  inversion_list = matrix.tolist(inversion)
  second_product = multiplication(inversion_list, transposition)
  solution = multiplication(second_product, dependent_matrix)
  constants = [
    [exp(solution[1][0])],
    [exp(solution[0][0])]
  ]
  equation = lambda x: constants[0][0]*constants[1][0]**x
  inaccuracy = error(data, equation)
  result = {
    'constants': constants,
    'error': inaccuracy
  }
  return result`

const regressionsSecondSnippet = `def determinant(matrix, result = 0):
  if len(matrix) == 1:
    result += matrix[0][0]
    return result
  else:
    alternating = []
    minors = []
    leads = matrix[0]
    for i in range(len(leads)):
      minors.append(diminished(matrix, 0, i))
      if i % 2 == 0:
        alternating.append(leads[i])
      else:
        alternating.append(-1 * leads[i])
    for j in range(len(alternating)):
      result += alternating[j] * determinant(minors[j])
  return result`

const regressionzFirstSnippet = `def regression_access():
  if request.method == 'POST':
    user_id = current_user()['id']
    source = request.args.get('source')
    title = request.json.get('title')
    independent = request.json.get('independent')
    dependent = request.json.get('dependent')
    data_set = request.json.get('data_set')
    results = run_all(data_set)
    linear_coefficients = results['options']['linear']['constants']
    linear_error = results['options']['linear']['error']
    quadratic_coefficients = results['options']['quadratic']['constants']
    quadratic_error = results['options']['quadratic']['error']
    cubic_coefficients = results['options']['cubic']['constants']
    cubic_error = results['options']['cubic']['error']
    hyperbolic_coefficients = results['options']['hyperbolic']['constants']
    hyperbolic_error = results['options']['hyperbolic']['error']
    exponential_coefficients = results['options']['exponential']['constants']
    exponential_error = results['options']['exponential']['error']
    logarithmic_coefficients = results['options']['logarithmic']['constants']
    logarithmic_error = results['options']['logarithmic']['error']
    best_fit = results['optimal']['function']
    new_regression = Regression(
      user_id = user_id,
      source = source,
      title = title,
      independent = independent,
      dependent = dependent,
      data_set = data_set,
      linear_coefficients = linear_coefficients,
      linear_error = linear_error,
      quadratic_coefficients = quadratic_coefficients,
      quadratic_error = quadratic_error,
      cubic_coefficients = cubic_coefficients,
      cubic_error = cubic_error,
      hyperbolic_coefficients = hyperbolic_coefficients,
      hyperbolic_error = hyperbolic_error,
      exponential_coefficients = exponential_coefficients,
      exponential_error = exponential_error,
      logarithmic_coefficients = logarithmic_coefficients,
      logarithmic_error = logarithmic_error,
      best_fit = best_fit,
      date = datetime.now()
    )
    db.session.add(new_regression)
    db.session.commit()
    return 'Regression models created and added to table'
  if request.method == 'GET':
    return current_regression()`

const regressionzSecondSnippet = `def require_apikey(view_function):
  @wraps(view_function)
  def decorated_function(*args, **kwargs):
    sent_key = request.args.get('key')
    if sent_key is not None:
      found_key = searching(sent_key)
      if found_key:
        return view_function(*args, **kwargs)
      else:
        abort(401)
    else:
      abort(401)
  return decorated_function`

const tiresiasFirstSnippet = `router.post('/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
  const { favorite, note } = req.body.sections
  try {
    const newPrediction = await db.Prediction.create({
      user: req.params.id,
      source: req.body.source,
      sections: {
        favorite: {graph: favorite.graph},
        note: {comments: note.comments}
      }
    })
    res.status(200).json({prediction: newPrediction})
  } catch(error) {
    res.status(400).json({msg: error})
  }
})`

const tiresiasSecondSnippet = `if (!clicked) {
  return (
    <New
      handleSubmit={handleSubmit}
      title={title}
      handleTitle={handleTitle}
      independent={independent}
      handleIndependent={handleIndependent}
      dependent={dependent}
      handleDependent={handleDependent}
      dataSet={dataSet}
      handleDataSet={handleDataSet}
    />
  )
} else {
  return (
    <Results
      linears={linears}
      linearError={linearError}
      quadratics={quadratics}
      quadraticError={quadraticError}
      cubics={cubics}
      cubicError={cubicError}
      hyperbolics={hyperbolics}
      hyperbolicError={hyperbolicError}
      exponentials={exponentials}
      exponentialError={exponentialError}
      logarithmics={logarithmics}
      logarithmicError={logarithmicError}
      bestFit={bestFit}
    />
  )
}`

export { kaleidoscopeFirstSnippet, kaleidoscopeSecondSnippet, matchesAndPatchesFirstSnippet, matchesAndPatchesSecondSnippet, readThisNextFirstSnippet, readThisNextSecondSnippet, regressionsFirstSnippet, regressionsSecondSnippet, regressionzFirstSnippet, regressionzSecondSnippet, tiresiasFirstSnippet, tiresiasSecondSnippet }