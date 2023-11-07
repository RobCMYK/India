$("#bDate").on("input",  function () {
  var birthDate = {};
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;


  console.log(birthDate);
  var years = (birthDate - today); 
  birthDate = document.getElementById("bDate").value;
  if (years <= 13) {
      alert("You must enter a valid date!");
  }
  else 
    {
      console.log(birthDate);
    };

const form = document.querySelector('form');

form.addEventListener('submit', (e) => 
{
  e.preventDefault();
  const dataFromUser = new FormData(form);
  const obj = Object.fromEntries(dataFromUser);

  const json = JSON.stringify(obj);
  localStorage.setItem('formj', json);

  window.location.href = 'index.html';
})


})

$(function () {
    //what radio value did they select?
  
    $("#formSubmit").on("click", (e) => {
      //ii. Package the data
      
      e.preventDefault();
    });
  
    $("input[type=radio]").on("change", function () {
      // var $this = $(this);
      // if ($this.is(":checked")) alert("a");
  
      //myFunctionToLoadinStuffInThatPlaceForIndia(someData);
  
      let radioChoice = $("input[type=radio]:checked").val(); // A or B
  
      if (radioChoice === "A") {
        $("#letterWordsSelect")
          .empty()
          .append(`<option value="banana">A</option>`)
          .append(`<option value="brains">AA</option>`)
          .append(`<option value="bbq">AAA</option>`);
      } else if (radioChoice === "B") {
        //`<option value="${optValue}">${optText}</option>`
  
        $("#letterWordsSelect")
          .empty()
          .append(`<option value="banana">banana</option>`)
          .append(`<option value="brains">brains</option>`)
          .append(`<option value="bbq">bbq</option>`);
      } else {
        $("#letterWordsSelect")
          .empty()
          .append(`<option value="banana">pick a letter...A or B</option>`);
      }
    });
  });
  