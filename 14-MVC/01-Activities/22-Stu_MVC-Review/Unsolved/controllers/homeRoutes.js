const router = require('express').Router();

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data

  const userData = await User.findAll({
    attribute:{exclude:['password']},
    order: [['name', 'ASC'],]
  })

const users = userData.map((val) => val.get({plain:true}));

  res.render('homepage');
});

module.exports = router;
