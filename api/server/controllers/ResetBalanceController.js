const Balance = require('~/models/Balance');

async function resetBalanceControoler(req, res) {
  const userId = req.body.id;

  try {
    const updatedBalance = await Balance.updateOne({ user: userId }, { tokenCredits: 0 });
    return res
      .status(200)
      .json({ message: 'Balance reset successfully.', balance: updatedBalance });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

module.exports = resetBalanceControoler;
