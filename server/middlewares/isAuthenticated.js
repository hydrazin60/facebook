import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized Access!! please login",
        error: true,
        success: false,
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);

    if (!decoded) {
      return res.status(401).json({
        message: "Unauthorized Access!! please login",
        error: true,
        success: false,
      });
    }
    req.user = decoded.userId;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: `isAuthenticated error ${error.message}`,
      error: true,
      success: false,
    });
  }
};
