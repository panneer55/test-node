const express = require("express")

const router = express.Router()

router.get('/user', (req, res) => {
    res.send({
        status: true,
        message: "Response from Get"
    })
})
router.post('/user', (req, res) => {
    res.send({
        status: true,
        message: "Response from post"
    })
})

router.put('/user', (req, res) => {
    res.send({
        status: true,
        message: "Response from put"
    })
})

router.put('/user', (req, res) => {
    res.send({
        status: true,
        message: "Response from delete"
    })
})

module.exports = router;