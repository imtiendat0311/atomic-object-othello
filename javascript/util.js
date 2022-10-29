function getMove(player, board) {
  // TODO: Determine valid moves
  // TODO: Determine best move
  return [2, 3];
}

function prepareResponse(move) {
  const response = `${JSON.stringify(move)}\n`;
  console.log(`Sending response ${response}`);
  return response;
}

module.exports = {getMove, prepareResponse};
