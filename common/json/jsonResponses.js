
/*
Status codes
*/
// 200 Success
// 404 No Request Found
// 422 No Content Found
// 401 Unauthorized
// 206 Partial Content(for missing parameter)
// 503 all other errors 

//export this methods for use in other modules
exports.response=response;

function response(statusKey, message, data){
	switch(statusKey){
		case 0:
			jsonPattern.status = customConfig.jsonOtherErrorsCode;
			if (validations.checkObject(message)) 
				jsonPattern.message = message;
			else jsonPattern.message = customConfig.jsonOtherErrors;
		break;
		case 1:
			jsonPattern.status = customConfig.jsonSuccessCode;
			if (validations.checkObject(message)) 
				jsonPattern.message = message;
			else jsonPattern.message = customConfig.jsonSuccess;
		break;
		case 2:
			jsonPattern.status = customConfig.jsonParameterMissingCode;
			if (validations.checkObject(message)) 
				jsonPattern.message = message;
			else jsonPattern.message = customConfig.jsonParameterMissing;
		break;
		case 3:
			jsonPattern.status = customConfig.jsonUnauthorizedCode;
			if (validations.checkObject(message)) 
				jsonPattern.message = message;
			else jsonPattern.message = customConfig.jsonUnauthorized;
		break;
		case 4:
			jsonPattern.status = customConfig.jsonNoRequestFoundCode;
			if (validations.checkObject(message)) 
				jsonPattern.message = message;
			else jsonPattern.message = customConfig.jsonNoRequestFound;
		break;
		case 5:
			jsonPattern.status = customConfig.jsonNoContentFoundCode;
			if (validations.checkObject(message)) 
				jsonPattern.message = message;
			else jsonPattern.message = customConfig.jsonNoContentFound;
		break;
		default:
			jsonPattern.status = statusKey;
			if (validations.checkObject(message)) 
				jsonPattern.message = message;
			else jsonPattern.message = customConfig.jsonOtherErrors;
		break;
	}
	if (validations.checkObject(data)) 
		jsonPattern.data = data;
	else jsonPattern.data = {};
	return jsonPattern;
}