const { Router } = require('express');
const router = Router();
const authController = require('./controllers/authController');
const dailyMenuController = require('./controllers/dailyMenuController');
const tablesController = require('./controllers/tablesController');


router.use('/api/auth' , authController);
router.use('/api/daily-menu' , dailyMenuController);
router.use('/api/tables' , tablesController);

module.exports = router;