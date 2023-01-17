const express= require ('express');
const router= express.Router();

const bookingAppController= require('../controller/user');

router.post('/user/add-user', bookingAppController.postAddUser )

router.get('/user/get-users', bookingAppController.getUser )

router.delete('/user/delete-user/:id', bookingAppController.deleteUser);

module.exports=router;
router.get('user/get-users', async (req, res, next) => {
    try {
    const users = await User.findAll();
    req.status(200).json({allUsers: users})
    } catch(err) {
        res.status(500).json({
            error: err
    })
 }
});

router.delete('/user/delete-user/:id', async (req, res, next) => {
    try {
    if(!req.paramsid) {
        res.status(400)
    }
    const uId = req.params.id;
    await User.destroy({where: {id: uId}});
    res.sendStatus(200);
    } catch(err) {
        res.status(500).json({
            error: err
    })
}
});

module.exports = router;