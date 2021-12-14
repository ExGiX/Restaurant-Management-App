const { Router } = require('express');
const router = Router();
const dashboardService = require('../services/dashboardService');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');


router.get('/', auth, isAdmin, async (req, res) => {
    try {
        const data = await dashboardService.getDashboardData();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/create', auth, isAdmin, async (req, res) => {
    try {
        const data = await dashboardService.createDashboard();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/delivered-orders', auth, isAdmin, async (req, res) => {
    try {
        const data = await dashboardService.getDeliveredOrders();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})





module.exports = router;