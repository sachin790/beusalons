var express = require('express');
var router = express.Router();
var api= require("./../controller/api");

//DIRECTING TO API FUNCTIONS
router.post("/api1", api.get_orders);
router.post("/api2", api.update_users);





//export app
module.exports=router;