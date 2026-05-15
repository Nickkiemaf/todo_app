import { userLogin, userSignup } from "../service/todoService.js";


export const signup = async (req, res) => {

  try {

    const { name, email, phone, address, password } = req.body

    //validation

    if (!name || !email || !phone || !address || !password) {
      return res.status(400).json({ message: "All fields required" })
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be longer than 8 characters" })
    }

    const result = await userSignup({ name, email, phone, address, password })

    return res.status(200).json({
      message: "User created",
      data: result
    })

  } catch (error) {
    console.log(error)
    return res.status(502).json({ message: error.message || "Internal server error" })
  }
}

export const login = async (req, res) => {

  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "Enter email and password to login" })
    }

    const loggedIn = await userLogin({ email, password })

    return res.status(200).json({
      message: "Login successful",
      data: {
        name: loggedIn.userData.name,
        email: loggedIn.userData.email,
        phone: loggedIn.userData.phone,
        address: loggedIn.userData.address,
        token: loggedIn.token
      }
    })


  } catch (error) {
    console.log(error)
    return res.status(502).json({ message: error.message || "Internal server error" })
  }
}