const router = require("express").Router();
const lunchRoutes = require("./lunches");
const usersRoute = require("./users");
const usersLunches = require("./userLunches");
const loginRoutes = require("./login");


router.use("/lunches", lunchRoutes);
router.use("/users", usersRoute);
router.use("/userLunches", usersLunches);
router.use("/login", loginRoutes);

//If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;