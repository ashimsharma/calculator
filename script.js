let btn = document.getElementsByClassName('btn');
let input = document.getElementById('input');
let init_str = '';

Array.from(btn).forEach((item) => {
  let operators = ['+', '-', '*', '/'];
  item.addEventListener('click', (e) => {
    let count = 0;
    if (item.innerText === '=') {
      if(init_str !== ''){
        let result = eval(init_str);
        input.innerHTML = result;
        init_str = result;
      }
      else{
        input.innerHTML = '0';
      }
    }
    else if (item.innerText === 'C') {
      input.innerHTML = '';
      init_str = '';
    }
    else if (operators.includes(item.innerText)) {
      input.innerHTML = '';
      init_str = init_str + item.innerText;
    }

    else {
      input.innerHTML = input.innerHTML + item.innerText;
      init_str = init_str + item.innerText;
    }
  })
});
