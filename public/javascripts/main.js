var Player = function(piece, iconClass)
{
  this.piece = piece;
}

var Board = function()
{
  this.board = [];
  this.currentPlayer;
}

Board.prototype.makeMove = function(index, player)
{
  this.board[index] = player.piece;
}

$(document).ready(function() {
  var playerX = new Player("x");
  var playerO = new Player("o");
  var board = new Board();
  
  $('.tile').click(function()
  {
    board.makeMove(event.target.id, playerX)
  })
  
  $('.tile').hover(function()
  {
    
  })
})
  
  
