// This was a test code

// function myFunction() {
//     let reason = document.getElementById("spend");
//     console.log("reason.value")
// }

// End of test code



// function to automatically input the value in the "remaining Amount" Field

// function remaining(){
//     let totBudget = document.getElementById("fund");
//     let totSpent = document.getElementById("spend");
//     let Remainder = document.getElementById("rem");

//     let remainder = totBudget.value - totSpent.value;
//     Remainder.value = remainder;

//     console.log(totSpent)

//     let test = document.getElementById("spend");
//     console.log("Function called")
// }

// This is the arrow function for the above

remaining = () => {
  let totBudget = document.getElementById("fund");
  let totSpent = document.getElementById("spend");
  let Remainder = document.getElementById("rem");

  let remainder = totBudget.value - totSpent.value;
  Remainder.value = remainder;
};

// function to check value

check = () => {
  let price = document.getElementById("price").value; //.valueAsNumber is used to get the value as a type of number, for validation purpose
  let day = document.getElementById("day").value;
  var regex = /^[0-9]+$/; // this is used to make sure the input is number   //regex syntax => /^[range, or inclusion]+$/
  var regex2 = /^[0-9,0-9,"/"0-9,0-9,"/"0-9,0-9,0-9,0-9]+$/;
  if (price.match(regex) && day.match(regex2)) {
    addInfo();
  } else {
    alert("Invalid Inputs");
    alert(
      "Price should contain only number and Date should be in DD/MM/YYYY format"
    );
  }
  // if (typeof price == 'number'){
  //     console.log("Number Inputed")
  // }
  // else{
  //     console.log("Give the right input")
  // }
  // console.log(typeof price)
};

//function to add information

let list = [];
addInfo = () => {
  
  let correctPrice = price.value;
  let reason = document.getElementById("reason").value;
  let day = document.getElementById("day").value;

  let listItem = {
    Price: correctPrice,
    Reason: reason,
    Day: day,
  };

  list.push(listItem);
  displayInfo();

  console.log(list);
};

// function to display the information

displayInfo = (listItem) => {
  let tagPri = document.getElementById("information-p");
  let tagReas = document.getElementById("information-r");
  let tagDa = document.getElementById("information-d");
    tagPri.innerHTML = " "
    tagReas.innerHTML = " "
    tagDa.innerHTML = " "

  list.map((listItem) => {
      let priceTag = document.createElement("p");
      priceTag.innerText = listItem.Price;
      let reasonTag = document.createElement("p");
      reasonTag.innerText = listItem.Reason;
      let dayTag = document.createElement("p");
      dayTag.innerText = listItem.Day;

      tagPri.appendChild(priceTag);
      tagReas.appendChild(reasonTag);
      tagDa.appendChild(dayTag);
  });
};
