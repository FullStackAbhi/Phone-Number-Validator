const checkBtn = document.getElementById("check-btn");
const checkInput = document.getElementById("text-input");
const result = document.getElementById("results-div");
const clear = document.getElementById("clear-btn");

clear.addEventListener("click", () => {
  result.innerHTML = "";
  checkInput.value = "";
  result.classList.add("hide");
});

checkBtn.addEventListener("click", function (e) {
  if (checkInput.value <= "") {
    alert("Please provide a phone number");
  }

  var num =/^(?:1(-| ?)\d{3}\1\d{3}\1\d{4}|\d{3}(-| ?)\d{3}\2\d{4}|1?(\s) ?\(\d{3}\) ?\d{3}[- ]\d{4})$/;

  let phone = checkInput.value.match(num);
  console.log(phone);

  if (phone) {
    result.classList.remove("hide");
    result.innerHTML = `Valid US number: ${checkInput.value}`;
    checkInput.value = "";
  } else {
    result.classList.remove("hide");
    result.innerHTML = `Invalid US number: ${checkInput.value}`;
    checkInput.value = "";
  }
});
