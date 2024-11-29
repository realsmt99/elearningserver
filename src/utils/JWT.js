const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10d" });
};

/**
 * Middleware to verify JSON Web Token (JWT) from the Authorization header.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} - Returns a 401 status with an "Unauthorized" message if no token is provided or if the token does not start with "Bearer ".
 *                     Returns a 403 status with an "Invalid token" message if the token verification fails.
 *                     Calls the next middleware function if the token is successfully verified.
 */
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

module.exports = {
  generateToken,
  verifyJWT,
};