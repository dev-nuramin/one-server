// express error handler
const errorHandler = (error, req, res, next) => {
   const err = error || {};
   const errorStatus = err.status || 500;
   const errorMessage = err.message || "Something went wrong!";
   return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
   });
}

export default errorHandler;