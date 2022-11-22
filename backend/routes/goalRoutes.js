const express = require('express')
const router = express.Router()
// bring the controllers to routes
const { getGoals, setGoal, updateGoal, deleteGoal,
 } = require('../controllers/goalController')

 const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)
//router.get('/', getGoals)
// connect with server.js
// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
//})
// to create a goal request
//router.post('/', setGoal)

// to update, using put request
 //router.put('/:id', updateGoal) 
//(req, res) => {
//     res.status(200).json({ message: `Update goal ${req.params.id}`})//add {} to add a variable and req object with id
//  })
 //router.delete('/:id',deleteGoal) 
 //(req, res) => { res.status(200).json({ message: `Delete goal ${req.params.id}`})   
// })


module.exports = router