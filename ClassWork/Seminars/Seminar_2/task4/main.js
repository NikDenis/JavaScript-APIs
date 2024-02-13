const submitBtn = document.querySelector("#submit");
const result1 = document.querySelector("#result-q1 span");
const result2 = document.querySelector("#result-q2 span");
const result3 = document.querySelector("#result-q3 span");
const inputs1 = document.querySelectorAll('input[name="q1"]');
const inputs2 = document.querySelectorAll('input[name="q2"]');
const inputs3 = document.querySelectorAll('input[name="q3"]');
const boxResult = document.querySelector(".result");

console.log(result3);
submitBtn.addEventListener("click", (e) => {
  boxResult.style.display = "block";
  let arr = [];

  inputs1.forEach((item) => {
    if (item.checked) {
      result1.textContent = item.value;
    }
  });

  inputs2.forEach((item) => {
    if (item.checked) {
      result2.textContent = item.value;
    }
  });

  inputs3.forEach((item) => {
    if (item.checked) {
      arr.push(item.value);
    }
  });

  arr.forEach((item) => {
    console.log(!result3.childNodes.textContent);
    if (!result3.childNodes.textContent) {
      const span = document.createElement("span");
      span.textContent = item;
      result3.appendChild(span);
    }
  });
});

console.log(inputs2);
