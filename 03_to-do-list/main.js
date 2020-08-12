// TO DO
window.addEventListener("DOMContentLoaded", function() {
  let ul = document.querySelector("ul");
  ul.id = "target-container";
  
  let list = document.querySelectorAll("li");
  list.forEach(function(li) {
    // li.addEventListener("click", function() {
    //   // console.log("!");
    //   li.classList.toggle("checked");
    // });
    addToggle(li);
    li.setAttribute("draggable", "true");
    li.id = "source-container";

    // li.addEventListener('dragstart', dragStart);
    li.addEventListener('drag', drag);
    // li.addEventListener('dragenter', dragEnter);
    
  });
  
  let close = document.querySelectorAll(".close");
  close.forEach(function(span) {
    // span.addEventListener("click", function() {
    //   // console.log("!");
    //   span.parentElement.remove();
    // });
    addClose(span);
  });

  let addbtn = document.querySelector("#addBtn");
  addbtn.addEventListener("click", function() {
    // console.log("!");
    let input = document.querySelector("#input");
    // console.log(input);

    let newLi = document.createElement("li");
    newLi.textContent = input.value;
    let newClose = document.createElement("span");
    newClose.classList.add("close");
    newClose.textContent = "x";
    newLi.appendChild(newClose);
    ul.appendChild(newLi);
    input.value = "";
    
    // newLi.addEventListener("click", function() {
      //   // console.log("!");
      //   newLi.classList.toggle("checked");
      // });
    addToggle(newLi);
    newLi.setAttribute("draggable", "true");
    newLi.id = "source-container";
    // newLi.addEventListener('dragstart', dragStart);
    newLi.addEventListener('drag', drag);

    // newClose.addEventListener("click", function() {
    //   // console.log("!");
    //   newClose.parentElement.remove();
    // });
    addClose(newClose);
  });

  // ul.
});

function addToggle(li) {
  li.addEventListener('click', function(e){
    li.classList.toggle("checked");
  });
}

function addClose(close) {
  close.addEventListener("click", function(e) {
    close.parentElement.remove();
  });
}

function drag(event) {
  // console.log(event.target);
  let other = document.elementFromPoint(event.clientX, event.clientY);
  console.log(other);

  if (event.target !== other && event.movementY >= 0) {
    other.insertAdjacentElement("afterend", event.target);
  } else if (event.target !== other && event.movementY <= 0) {
    other.insertAdjacentElement("beforebegin", event.target);
  }

}

// function dragEnter(event) {
  // console.log(event.target);
  // overY = event["screenY"];
  // console.log(event.clientX);
  // console.log("li_y" + overY);
  // console.log(moving);
  // if (event.clientX > event["screenY"]) {
  //   console.log("往下");
    // dragging.insertAdjacentElement("beforebegin", event.target);
    // event.dataTransfer.setData('text/plain', event.target.id);
  // } else {
  //   console.log("往上");
    // event.target.insertAdjacentElement("afterend", event.target);
  // }
  // event.target.parentElement.insertAdjacentElement("afterbegin", event.target);
// }

// function dropped(event) {
//   // console.log('dropped');
//   cancelDefault(event);
//   let id = event.dataTransfer.getData('text/plain');
//   // window.aa = event;
//   event.target.parentElement.insertAdjacentElement("beforeend", document.querySelector('#' + id));
// }

function cancelDefault(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}