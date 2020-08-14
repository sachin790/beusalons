var customConfig ={
 databaseErrorMsg : "Could not connect to database",
 
 /*
 * JSON RESPONSES MESSAGES
 */
 jsonSuccess : "Success",
 jsonNoRequestFound : "No Request Found",
 jsonUnauthorized : "Unauthorized",
 jsonParameterMissing  : " Parameter Missings",
 jsonOtherErrors : "Other Errors",
 jsonNoContentFound : "No Content Found",
 jsonCannotBeNull : " cannot be null!",

 /*
  * JSON RESPONSES CODES
  */
 jsonSuccessCode : 200,
 jsonNoRequestFoundCode : 404,
 jsonUnauthorizedCode : 401,
 jsonParameterMissingCode  : 206,
 jsonOtherErrorsCode : 503,
 jsonNoContentFoundCode : 422,

 internalServerErrorCode : 500,

 noRecordsFound : "No records found",
  Msg : "Checking"
}
//export this router to use in our customConfig.js
module.exports=customConfig;