const createError = (status, msg) => {
  const err = new Error();
  err.status = 401;
  err.message = "No student data found";
  return err
}


export default createError;