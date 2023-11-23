let stringifyBoard = function(board){
    return (board[0].join('   ')+ 
    '\n' + 
    board[1].join('   ')+ 
    '\n' + 
    board[2].join('   '));
}

let didWeWin = function(board, player){
   
	// check rows
  
  if(board[0][0] === player && board[0][1] === player && board[0][2] === player) {
    return true;
  }
  
  if(board[1][0] === player && board[1][1] === player && board[1][2] === player) {
    return true;
  }
  
  if(board[2][0] === player && board[2][1] === player && board[2][2] === player) {
    return true;
  }
  
  // check columns
  
  if(board[0][0] === player && board[1][0] === player && board[2][0] === player) {
    return true;
  }
  
  if(board[0][1] === player && board[1][1] === player && board[2][1] === player) {
    return true;
  }
  
  if(board[0][2] === player && board[1][2] === player && board[2][2] === player) {
    return true;
  }
  
  
  // check diagonal
  
  if(board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  
  if(board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }
  
  return false;
};

//grel amenaverjum, vor ete taxtak@ lcvac e xaxn avartel
let isFull = function(board){
let i = 0;
while(i<board.length){
    const row = board[i];
    let i2 = 0;
    while(i2< row.length){
       if( row[i2] == '-'){ // stugum e datark tox mnacel e te che
        return false
       }
       i2= i2+1
    }
    i=i+1
}
return true;
}


let board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
];

//alert('barev \ndzez'); // nor toxic e grum

// let x = [5,2,6];
// alert(x.join('...')) //join-@ arr-i andamner@ vercnum e, veracum e str ev kpcnum inch vor mi teqstov

let player = 'x'


while(true){
let boardStr = stringifyBoard(board);

// (board[0].join('   ')+ '\n' + board[1].join('   ')+ '\n' + board[2].join('   '));

let row = +prompt('Dear user, please provider the value for the row  \n \n \n '+ boardStr) // + vorovhetev tox e, petq e veracenq tvi

let column = +prompt('Dear user, please provider the value for the column + \n \n \n '+ boardStr);


if(board[row][column] !== '-'){
    alert('Not a legal moveBy, you lose!'); // partvecinq
    break;
}
board[row][column] = player;

//84-88 toxy grel didWeWin func heto naxaverjum
const haxtecinq = didWeWin(board, player);
if(haxtecinq){
    alert('haxtanak')
    break
}

//grel isFull func-ic heto

if(isFull(board)){
    alert('taxtak@ liqn e ev voch voq chi haxtel')
    break
}

if(player === 'x'){
player = 'o';

}else{
    player = 'x';
}


// break;

}

