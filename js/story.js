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
        
            url: `https://anicon.asia/v3/new/${id}`,
            type: "GET",
            dataType: "json"
          });
          
          request.done(function(msg) {
            console.log(msg.data);
            let sub__image = JSON.parse(msg.data.ImgNames);
            console.log(sub__image);
            $('.main__img__story').append(`
            <div class="main__img__item">
            <a href="${msg.data.YoutubeLink}">
            <img src="${msg.data.ImgMain}" class="img-responsive" alt="" />
            <p>${msg.data.Content1}</p>
            </div>
            </a>
            `);
            for(let i = 0 ; i < sub__image.length ; i++){
            $('.sub__img__story').append(`
            <div class="col-md-6 story__img__item story__img__left">
            <a href="${msg.data.YoutubeLink}\ ${sub__image[i].uid}">
                <img src="${sub__image[i].link}" class="w-100 img-responsive" alt="">
            </a>
            </div>   
            `);
            
            }

            $('.sub__img__story').append(`
            <p>${msg.data.Content1}</p> 
            `);
          });
          
          request.fail(function(jqXHR, textStatus) {
           console.log(textStatus);
          });


});