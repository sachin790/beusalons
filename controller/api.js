var MongoClient = require('mongodb').MongoClient;
var url = require('../config/database_config/database').uri;


//------- get all details of user orders
exports.get_orders =  (req, res) => {
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("beusalons");
        dbo.collection('users').aggregate([{"$lookup":{"from":"orders","localField":"userId","foreignField":"userId","as":"orderDetails"}},{"$unwind":"$orderDetails"},{"$group":{"_id": "$_id"   ,  "name":{"$first":"$name"} , "userId":{"$first":"$userId"} ,  "noOfOrders":{"$sum":1}, "averageBillValue":{"$avg":"$orderDetails.subtotal"}}}]).toArray(function(err, result) {
            if (err){
                res.json(jsonResponses.response(0, "Error", err.message));
            }
            res.json(jsonResponses.response(1, "Data Fetched Successfully", result));
            db.close();
          });
      });
}

//----------- update users collection with no. of Orders 
exports.update_users =  (req, res) => {
    MongoClient.connect(url,  function(err, db) {
        var dbo = db.db("beusalons");
        dbo.collection('orders').aggregate([{"$group":{"_id": "$userId"  , "noOfOrders":{"$sum":1}}}]).toArray(async function(err, result) {
            if (err){
                res.json(jsonResponses.response(0, "Error", err.message));
            }
            for(let i=0;i<result.length;i++){
                await dbo.collection('users').update({userId:result[i]._id},{$set:{noOfOrders : result[i].noOfOrders}})
            }
            res.json(jsonResponses.response(1, "Successfully Updated", ""));
            db.close();
          });
      });
}
