import jwt from "jsonwebtoken";
export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "user not authenticated!",
        success: false,
        error: true,
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Unauthorized! Token not found ",
        success: false,
        error: true,
      });
    }
    req.id = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: true,
    });
  }
};
