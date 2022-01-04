$(document).ready(function(){
    $('.slider').slick({
      dots: false,
      autoplay:true,
      prevArrow: '<button type="button" class="slick-prev slider-prev-arrow">Previous</button>',
      nextArrow : '<button type="button" class="slick-next slider-next-arrow">Next</button>'
    });

    $('.slide-depoimentos').slick({
        dots: false,
        autoplay:true,
        prevArrow: '<button type="button" class="slick-prev slider-prev-arrow">Previous</button>',
        nextArrow : '<button type="button" class="slick-next slider-next-arrow">Next</button>'
      });


    $(".footer-form-btn").on('click', () =>{
        const email = $('#email').val()
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'kuhnwellyngton@gmail.com',
            From : email,
            Subject : "Por favor me adicione na newsletter",
            Body : `Olá, 
                Eu gostaria de ser adicionado na newsletter do site.
                Meu email é ${email}.
                
                Obrigado!`
        }).then(
          message => alert(message)
        );
    })
  });