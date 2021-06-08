

$(function() {
  $('#paging').pagination({
  dataSource: [1, 2, 3, 4, 5, 6 , 7 , 8 , 8 ,8],
  pageSize:2,
  afterPageOnClick:function(event , pageNumber) {
    loadPage(pageNumber);
  },
  afterPreviousOnClick:function(event , pageNumber) {
    loadPage(pageNumber);
  },
  afterNextOnClick:function(event , pageNumber) {
    loadPage(pageNumber);
  }
})


function loadPage(page) {
  $('.product__item').html("");
  $.ajax({
    url: `https://anicon.asia/v3/product?page_id=${page}&fbclid=IwAR3NtlsZsqAbuN25KP1cH_2X13y5bJYEuUjrZPZ0sX8qxf2XTHoEKM5eSnM`,
    type: "GET",
    data:"json"
  }).then(data => {
    console.log(data.ListData);
   
    // console.log(JSON.parse(data.ListData[1].ImgNames));
  for(let i = 1; i < data.ListData.length ; i++) {
      var element = data.ListData[i];
 
      var image = JSON.parse(element.ImgNames);
    
    
      $("#data-container").append(`
    
      <a href= 'productdetails.html?id=${element._id}'>
      <div class="product__item col-md-4">

      <div class="product__image">
      <img src="${image[0].link}" alt="" />
      </div>
      </a>
      <div class="product__text">
        <h1>${element.Name}</h1> 
        <p>${element.QuyCach}</p>
        <span><s>${element.PriceSell}</s> 20,000 VND/kg</span>
        </div>
      </div>
     
      `
      );

  }
 
  
  $(".product__image").click(function() {
    window.location.href = ``;
  });

  
  
  
  
 
  }).catch(err => {
    console.log(err);
  })
}
loadPage(1);





    // Scroll to Top
    $(window).scroll(function(){
        if($(window).scrollTop() > 0) {
            $(".header").addClass("sticky");
        }else {
            $(".header").removeClass("sticky");
        }
    });
    $("#topBtn").click(function() {
        $("html , body").animate({scrollTop:0} , 800);
        });
    
        $(window).scroll(function(){
            if($(this).scrollTop() > 300) {
                $("#topBtn").fadeIn();
            }else {
                $("#topBtn").fadeOut();
            }
        });
});