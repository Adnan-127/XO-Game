let title = document.getElementById('title');
let turn = 'x';
let square = [];

function gg(num1, num2, num3) {
  document.getElementById('item' + num1).style.background = '#333';
  document.getElementById('item' + num2).style.background = '#333';
  document.getElementById('item' + num3).style.background = '#333';
  title.innerHTML = `<span>${square[num1]}</span> Won`;
  setInterval(function () { title.innerHTML += '.' }, 1000);
  setTimeout(function () { window.location.reload() }, 3500)
}

function put(id) {
  if (turn === 'x' && document.getElementById(id).innerHTML == '') {
    document.getElementById(id).innerHTML = 'X';
    turn = 'o';
    title.innerHTML = 'O';
  }
  else if (turn === 'o' && document.getElementById(id).innerHTML == '') {
    document.getElementById(id).innerHTML = 'O';
    turn = 'x';
    title.innerHTML = 'X';
  }
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById('item' + i).innerHTML;
  }
  if (square[1] === square[2] && square[2] === square[3] && square[1] != '') {
    gg(1, 2, 3);
  }
  else if (square[4] === square[5] && square[5] === square[6] && square[5] != '') {
    gg(4, 5, 6);
  }
  else if (square[7] === square[8] && square[8] === square[9] && square[7] != '') {
    gg(7, 8, 9);
  }
  else if (square[1] === square[4] && square[4] === square[7] && square[1] != '') {
    gg(1, 4, 7);
  }
  else if (square[2] === square[5] && square[5] === square[8] && square[2] != '') {
    gg(2, 5, 8);
  }
  else if (square[3] === square[6] && square[6] === square[9] && square[3] != '') {
    gg(3, 6, 9);
  }
  else if (square[1] === square[5] && square[5] === square[9] && square[1] != '') {
    gg(1, 5, 9);
  }
  else if (square[3] === square[5] && square[5] === square[7] && square[3] != '') {
    gg(3, 5, 7);
  }
}

function reload() {
  window.location.reload();
}

