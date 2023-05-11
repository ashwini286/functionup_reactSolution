import React,{useState} from 'react'
import './Tactoe.css'
function Tactoe() {
  const [board, setBoard] = useState(Array(9).fill(''))
  const[move , setMove] = useState('X')
  function Click(n){
let square = [...board]

if(board[n] !== ''){
  alert('Already clicked')
  return

}

square[n] = move
setBoard(square)
if(move === 'X'){
  setMove('O')
} else {
  setMove("X")
}
if(CheckWin(square)){
  alert("Winer")
  square.fill('');
  setBoard(square)
}
if(checkDraw(square)){
  alert("Match Draw")
  square.fill('');
  setBoard(square)
}  

  
function checkDraw(board){
  let count=0;
  board.forEach(element => {
      if(element!==''){
          count++;
      }
  });

  if(count>=9){
      return true;
  }else{
      return false;
  }
}

}

  function CheckWin(board){
    const condition= [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]   
    ]
    let flag = false;
    condition.forEach(element => {
      if(board[element[0]] !== '' && board[element[1]] !== '' && board[element[2]] !== ''){
        if(board[element[0]] === board[element[1]] && board[element[1]] === board[element[2]]){
          flag = true;
        }
      }
    })
    return flag;
  }
  return (
    <div>
      <h1 className='text-center'>TIC TAC TOE</h1>
      <table>
        <tr>
            <td onClick={() => {Click(0)}}>{board[0]}</td>
            <td onClick={() => {Click(1)}}>{board[1]}</td>
            <td onClick={() => {Click(2)}}>{board[2]}</td>
        </tr>
        <tr>
            <td onClick={() => {Click(3)}}>{board[3]}</td>
            <td onClick={() => {Click(4)}}>{board[4]}</td>
            <td onClick={() => {Click(5)}}>{board[5]}</td>
        </tr>
        <tr>
            <td onClick={() => {Click(6)}}>{board[6]}</td>
            <td onClick={() => {Click(7)}}>{board[7]}</td>
            <td onClick={() => {Click(8)}}>{board[8]}</td>
        </tr>
      </table>
      {/* <button>Restart</button> */}
    </div>
  )
}

export default Tactoe
