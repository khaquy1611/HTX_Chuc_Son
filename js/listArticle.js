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
          url: `https://anicon.asia/v3/new?page_id=${page}&fbclid=IwAR2zlggPYweTAovF31DYbOtvwFY580XKkpUrh35nBmUMD4LRHpWns98B5y4`,
          type: "GET"
        }).then(data => {
          console.log(data.ListData);
         
          console.log(JSON.parse(data.ListData[1].ImgNames));
        for(let i = 1; i < data.ListData.length ; i++) {
            var element = data.ListData[i];
       
            var image = JSON.parse(element.ImgNames);
          
          
            $("#data-container").append(`<div class="article_item col-md-4">
            <a href='./chitiettin.html?id=${element._id}'>
            <div class="article_image">
                <img src="${element.ImgMain}" alt="" />
            </div>
            </a>
            <div class="article__border">
                <div class="article__text">
                    <h1>${element.Subject}</h1>
                    <p>${element.Content1}</p>
                    <p>
                        <span>CN 25 Th04, 2021</span>
                        <a href="${element.YoutubeLink}">Đọc Thêm >></a>
                    </p>
                </div>
            </div>
           
        </div>`);
         
        }
      
        
       
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