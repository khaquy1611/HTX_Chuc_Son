$(function() {
  
    
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

    var url_string = window.location.href; // window.location.href
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    console.log(id);

    var request = $.ajax({
        
        url: `https://anicon.asia/v3/product/${id}`,
        type: "GET",
        dataType: "json"
      });
      
      request.done(function(msg) {
        console.log(msg.data);
        let image = JSON.parse(msg.data.ImgNames);
        console.log(image);
       
            $(".product__item__left").append(`
            <div class="product__item__left__img">
            
            <a href="#" class = "item">
            <img src="${image[0].link}" alt="" />
            </a>
            </div>
            `);

            $('.product__item__right').append(`
            <div class="product__item__right__details">
            <h1>${msg.data.Name}</h1>
            <p>Mã sản phẩm: <strong>${msg.data.Code}</strong></p>
            <p>HSD:<strong>${msg.data.ExpireDes}</strong></p>
            <p>Quy cách ${msg.data.QuyCach}: <strong>500 gr</strong></p>
            <p>${msg.data.Description}</p>
            <b>${msg.data.PriceSell} VNĐ</b>
            </div>
            `);

      });
      
      request.fail(function(jqXHR, textStatus) {
       console.log(textStatus);
      });




      var request = $.ajax({
        
        url: `https://anicon.asia/v3/product?page_id=${id}`,
        type: "GET",
        dataType: "json"
      });
      
      request.done(function(msg) {
        console.log(msg.ListData);
        var element = msg.ListData;
        console.log(element);
      
        // console.log(image);

       let carouselItem = document.querySelectorAll(".owl-carousel--item");
       console.log(carouselItem);
        let carouselItemLength = carouselItem.length;
       

       for (let i = 0 ; i <  msg.ListData.length ; i++){
            let image = JSON.parse(msg.ListData[i].ImgNames);
           $(".owl-carousel").append(`
           <div class="owl-carousel--item">
            
      
            <img src="${image[0].link}" alt="">
           
                <h1>${msg.ListData[i].Name}</h1>
                <p> HSD: ${msg.ListData[i].ExpireDes} giờ</p>
                <p>Quy cách ${msg.ListData[i].QuyCach} : 500g</p>
            <span>${msg.ListData[i].PriceSell} VNĐ</span>  
            </div> 
        `)
       }
        
       


    $(".owl-carousel--item").click(function() {
        for (let i = 0 ; i <  msg.ListData.length ; i++){
        location.reload(`chi-tiet-san-pham.html/${msg.ListData[i]._id}`);
        }
    });
      const prevIcon = "<img  src='images/nextDetailsProduct.png' />"
      const nextIcon = "<img  src='images/prevDetailsProduct.png' />"
      $('.owl-carousel').owlCarousel({
          loop:true,
          responsiveClass:true,
          nav:true,
          autoPlay:true,
          autoplayTimeout:1000,
          navText: [
              prevIcon,
              nextIcon
          ],
          responsive:{
              0:{
                  items:3,
                  nav:true,
                  autoPlay:true,
                  autoplayTimeout:1000,  
              },
              600:{
                  items:1,
                  nav:true,
                  loop:true,
                  autoPlay:true,
                  autoplayTimeout:1000,  
              },
              480: {
              items:1,
              nav:false,
              autoPlay:true,
              autoplayTimeout:1000,  
              },
           
              320: {
                  items:1,
                  nav:false,
                  autoPlay:true,
                  autoplayTimeout:1000,  
              },
              280: {
                  items:1,
                  nav:false,
                  autoPlay:true,
                  autoplayTimeout:1000,  
              },
              768: {
                  items:2,
                  nav:false,
                  autoPlay:true,
              },
              540: {
                  items:1,
                  nav:false,
                  autoPlay:true,
              },
              1000:{
                  items:3,
                  nav:true,
                  loop:true,
                  autoPlay:true,
                  autoplayTimeout:1000,   
              },
              1903:{
                  items:3,
                  nav:true,
                  loop:true,
                  autoPlay:true,
                  autoplayTimeout:1000,   
              }
          }
      });
      
   
      
    
    
        // let image = JSON.parse(msg.data.ImgNames);
      
      
            
            

    });
      
      request.fail(function(jqXHR, textStatus) {
       console.log(textStatus);
      });


     
});