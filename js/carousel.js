

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }
    
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel.Next();
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, 2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        if(Carousel._interval) {
            clearInterval(Carousel._interval);
        }
        
        const currentItem = Carousel._arr[Carousel._sequence];
        
        const carouselDiv = document.getElementById("carousel");
        if(carouselDiv) {
            carouselDiv.innerHTML = `<img src="./assets/images/${currentItem.image}" alt="${currentItem.title}">`;
        }
        
        const carouselTitle = document.getElementById("carousel-title");
        if(carouselTitle) {
            carouselTitle.innerHTML = `<p>${currentItem.title} <a href="${currentItem.url}">Aqui</a></p>`;
        }
        
        Carousel._AtualizarIndicadores();
        
        Carousel._sequence++;
        
        if(Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        
        Carousel._interval = setInterval(function(){ Carousel.Next(); }, 2000);
    }
    
    static IrPara(index){
        if(Carousel._interval) {
            clearInterval(Carousel._interval);
        }
        
        Carousel._sequence = index;
        
        const currentItem = Carousel._arr[Carousel._sequence];
        
        const carouselDiv = document.getElementById("carousel");
        if(carouselDiv) {
            carouselDiv.innerHTML = `<img src="./assets/images/${currentItem.image}" alt="${currentItem.title}">`;
        }
        
        const carouselTitle = document.getElementById("carousel-title");
        if(carouselTitle) {
            carouselTitle.innerHTML = `<p>${currentItem.title} <a href="${currentItem.url}">Aqui</a></p>`;
        }
        
        Carousel._AtualizarIndicadores();
        
        Carousel._interval = setInterval(function(){ Carousel.Next(); }, 2000);
    }
    
    static _AtualizarIndicadores(){
        const pontosCarousel = document.querySelectorAll('.ponto-carousel');
        pontosCarousel.forEach((ponto, index) => {
            ponto.classList.remove('ativa');
            if(index === Carousel._sequence) {
                ponto.classList.add('ativa');
            }
        });
    }
};
