const myInput1 = document.getElementById('myInput');
const todoList = document.querySelector('.todo-list');
const myRestore = document.querySelector('.myRes');

myInput.addEventListener('keydown', (e) => {
  if (e.code === 'Enter' && myInput.value && e.target.value) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerText = `${myInput1.value}`;
    todoList.append(listItem);

    const myLabel = document.createElement('label');
    myLabel.className = "container1";
    const myInput = document.createElement('input');
    myInput.type = "checkbox";
    myLabel.append(myInput);
    const mySpan = document.createElement('span');
    mySpan.className = "checkmark";
    myLabel.append(mySpan);
    const myList = document.querySelector('.place');
    myList.append(myLabel);

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    listItem.appendChild(span);

    span.onclick = function() {
      myRestore.classList.remove('d-none');
      var div = this.parentElement;
      myLabel.classList.add('d-none');
      listItem.classList.add('d-none');
      // div.style.display = "none";
      // myLabel.style.display = "none";
    }    

    myInput.onclick = function() {
      if(listItem.style.color === 'gray') {
        listItem.style.color = 'black';
        listItem.style.textDecoration = 'none';
      }
      else {
        listItem.style.color = 'gray';
        listItem.style.textDecoration = 'line-through';   
      }
    }
    myInput1.value = '';
    myInput1.focus();
  }
  const myResButton = document.querySelector('.myResBut');
  const allListItems = Array.from(document.getElementsByTagName('li'));
  const allLabels = Array.from(document.getElementsByTagName('label'));
  myResButton.onclick = function() {

    for(let i=0; i<allLabels.length;i++) {
      allLabels[i].classList.remove('d-none');
      console.log("ffds");
    }
    for(let i=0; i<allListItems.length;i++) {
      allListItems[i].classList.remove('d-none');
    }
  }
});



