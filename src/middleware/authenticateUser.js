import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const generateToken = (user_id) => {

  try {

    const jwtSecret = process.env.SECRET_KEY

    const payload = { user_id }

    const token = jwt.sign(payload, jwtSecret, { expiresIn: "24h" })

    return token

  } catch (error) {
    console.log(error)
  }

}

export const authenticate = (req, res, next) => {

  const jwtSecret = process.env.SECRET_KEY

  try {

    const authorization = req.headers.authorization

    if (!authorization || !authorization.startsWith("Bearer ")) {

      console.log("error")

      return res.status(401).json({
        message: "authorization required"
      })
    }

    const token = authorization.split(" ")[1]

    const decodeToken = jwt.verify(token, jwtSecret)

    req.user = decodeToken

    next()

  } catch (error) {
    console.log(error)
  }
}