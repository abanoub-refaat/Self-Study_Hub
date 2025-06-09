const errorHandler = (error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json({ msg: error.msg });
  } else {
    res.status(500).json({ msg: error.msg });
  }
};

export default errorHandler;
