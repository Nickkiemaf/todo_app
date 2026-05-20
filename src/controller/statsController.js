import { allStats } from "../service/statsService.js"

export const stats = async (req, res) => {

  try {

    const result = await allStats()

    return res.status(200).json({
      data: result
    })

  } catch (error) {
    console.log(error)
  }
}