export const errorHandler = (error, _req, res, _next) => {
  console.error(error);
  return res.status(400).json({
    message: error.message || 'Something went wrong'
  });
};
