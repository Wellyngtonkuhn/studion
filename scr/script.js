$(document).ready(function(){

    // Menu
    $('.navbarBtnMobile').on('click', function(){
        $('.menuMobile').toggleClass('active');
        $(this).find("i").toggleClass('fa-bars');
        $(this).find("i").toggleClass('fa-times');
    })

    // Carousel
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

      setInterval(() => {
        const numberCollection = document.querySelectorAll(".counter_number");

        numberCollection.forEach((number) => {
          const currentNumber = Number(number.textContent);
          const total = currentNumber + 1;
          number.textContent = total;

          console.log(total.toLocaleString());
        });
      }, 1000);

      const counterOption = {
        delay: 10,
        time: 1000,
      }

      $(".counter_number").counterUp(counterOption)
  });