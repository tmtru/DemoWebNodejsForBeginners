//api cho server side
const express = require('express');
const router = express.Router();
const { getABC, getHomePage, image, postCreateUser } = require("../controllers/homeController");
// router.get("/", (req, res) => {
//     //xử lí data => đây chính là đoạn controller => để sang file controller
    
// }); =>
router.get('/', getHomePage);

router.get("/abc",getABC);
router.get("/image", image);
router.post("/create-user", postCreateUser);
module.exports = router;