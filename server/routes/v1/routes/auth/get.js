const get = (req, res) => {
  if (!(req.headers.authorization === process.env.AUTH_KEY)) {
    return res.status(403).json({success: false})
  }
  return res.status(200).json({success: true})
}

module.exports = get;