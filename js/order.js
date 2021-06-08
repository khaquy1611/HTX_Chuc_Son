$(function() {
   
  // const selectedAll = document.querySelectorAll(".selected");

  // selectedAll.forEach((selected) => {
  //   const optionsContainer = selected.previousElementSibling;
  //   console.log(optionsContainer);
  //   const searchBox = selected.nextElementSibling;
  
  //   const optionsList = optionsContainer.querySelectorAll(".option");
  
  
     
  
  
  //   selected.addEventListener("click", () => {
  //     if (optionsContainer.classList.contains("active")) {
  //       optionsContainer.classList.remove("active");
  //     } else {
  //       let currentActive = document.querySelector(".options-container.active");
  
  //       if (currentActive) {
  //         currentActive.classList.remove("active");
  //       }
  
  //       optionsContainer.classList.add("active");
  //     }
  
  //     // searchBox.value = "";
  //     // filterList("");
  
  //     // if (optionsContainer.classList.contains("active")) {
  //     //   searchBox.focus();
  //     // }
  //   });
  
  //   optionsList.forEach((o) => {
  //     o.addEventListener("click", () => {
  //       selected.innerHTML = o.querySelector("label").innerHTML;
  //       optionsContainer.classList.remove("active");
  //     });
  //   });
  
  // //   searchBox.addEventListener("keyup", function (e) {
  // //     filterList(e.target.value);
  // //   });
  
  //   const filterList = (searchTerm) => {
  //     searchTerm = searchTerm.toLowerCase();
  //     optionsList.forEach((option) => {
  //       let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
  //       if (label.indexOf(searchTerm) != -1) {
  //         option.style.display = "block";
  //       } else {
  //         option.style.display = "none";
  //       }
  //     });
  //   };
  
  // });
  


  // Nhấp vào nút add và thêm trường vào 
  let wrapper__field = document.querySelector(".query");
    let max__field = 5;
  let addBtn = document.querySelector(".add");
  console.log(addBtn);
  console.log(wrapper__field);
  let x = 1;

  $(addBtn).click(function(e) {
    e.preventDefault();
    console.log(x);
    if(x <=  max__field) {
     
        $(wrapper__field).append(`
        
        <div class="col-md-6">
                   
        <div class="select-container" multiple>
          <select name="" id="">
            <option value="">Súp Lơ / (IK77)</option>
            <option value="">Hà Nội</option>
            <option value="">Hồ Chí Minh</option>
            <option value="">Bắc Giang</option>
            <option value="">Nghệ An</option>
            <option value="">Cao Bằng</option>
          </select>

          <i class="fas fa-chevron-down"></i>
        </div>

      </div>

      <div class="col-md-3">
        <div class="select-number">
            <input type="number" name="" value="200" max=""  min="" />
          </div>
      </div>
      <div class="col-md-3">
        <div class="select-container" multiple>
          <select name="" id="">
            <option value="">kg</option>
            <option value="">Hà Nội</option>
            <option value="">Hồ Chí Minh</option>
            <option value="">Bắc Giang</option>
            <option value="">Nghệ An</option>
            <option value="">Cao Bằng</option>
          </select>

          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
     
    
      `);
      x++;
    }
  });


});
