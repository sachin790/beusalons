// defaul modules
var stringConstructor = "test".constructor;
var arrayConstructor = [].constructor;
var objectConstructor = {}.constructor;

//export this methods for use in other modules
exports.checkObject=checkObject;
exports.checkObjectNull=checkObjectNull;
exports.checkObjectDefined=checkObjectDefined;
exports.checkParameter=checkParameter;
exports.checkAuthentication=checkAuthentication;
exports.checkBool=checkBool;
exports.checkObjectType=checkObjectType;
exports.checkExceptionType=checkExceptionType;

 function checkObject(object) {
   if ( typeof object !== 'undefined' && object!=null && object!="" ){
   //do stuff if object is defined and not null
   return true;
   }else return false;
 }

 function checkObjectNull(object) {
   if (object!=null && object!="" ){
   //do stuff if object is not null
   return true;
   }else return false;
 }

 function checkObjectDefined(object) {
   if (typeof object !== 'undefined'){
   //do stuff if object is defined
   return true;
   }else return false;
 }

 function checkObjectType(object) {
    if (object === null) {
        return "null";
    }
    else if (object === undefined) {
        return "undefined";
    }
    else if (object.constructor === stringConstructor) {
        return "String";
    }
    else if (object.constructor === arrayConstructor) {
        return "Array";
    }
    else if (object.constructor === objectConstructor) {
        return "Object";
    }
    else {
        return "don't know";
    }
 }

 function checkBool(object) {
   if ( typeof object !== 'undefined' && object!=null && object==true ){
   //do stuff if object is defined , not null and true
   return true;
   }else return false;
 }

 function checkExceptionType(error,callback){
   if (validations.checkObjectType(error) === "Object" || validations.checkObjectType(error) === "Array") {
      error.status = validations.checkObject(error.status) ? error.status : customConfig.internalServerErrorCode;
      return callback(error);
   }else{
      return callback(jsonResponses.response(customConfig.internalServerErrorCode,validations.checkObject(error.message) ? error.message : null ,null));
   }
 }

 function checkParameter(mParameter,mParameterName){
   return new Promise(function(resolve, reject) {
      if (validations.checkObjectDefined(mParameter)){
      if (validations.checkObjectNull(mParameter))
         resolve(true);
      else
         reject(jsonResponses.response(5,mParameterName+customConfig.jsonCannotBeNull,null));
   }else
         reject(jsonResponses.response(2,mParameterName+customConfig.jsonParameterMissing,null));
  });
 }

 function checkAuthentication(mAuthParameter,mAuthCheck){
   return new Promise(function(resolve, reject) {
      if (mAuthCheck) {
         if (validations.checkBool(mAuthParameter)) {
             resolve(true);
         }else{
            reject(jsonResponses.response(3,null,null));
         }
      }else{
         if (validations.checkObject(mAuthParameter)) {
            resolve(true);
         }else{
            reject(jsonResponses.response(3,null,null));
         }
      }
  });
 }