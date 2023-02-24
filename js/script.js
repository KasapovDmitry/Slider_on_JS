// Объект с информацией
    const content = [
        {id: 1, foto: './img/admiral.jpg', city: 'Rostov-on-Don LCD admiral', area: '81 m2', time: '3.5 months', cost: 'Upon request'},
        {id: 2, foto: './img/sochi.jpg', city: 'Sochi Thieves', area: '105 m2', time: '4 months', cost: 'Upon request'},
        {id: 3, foto: './img/patriotic.jpg', city: 'Rostov-on-Don Patriotic', area: '93 m2', time: '3 months', cost: 'Upon request'},
    ];
    const sliderWrap = document.querySelector('.slider-wrapper');

    function initSlider() {
        if (!content || !content.length){
            sliderWrap.innerHTML += `
            <div class="slider-slide">
                <div class="main1-top">
                    <div class="main1-title">
                        Completed<br>
                        projects
                    </div>
                    <div class="main1-text">
                        <p>
                            Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families
                        </p>
                    </div>
                </div>    
                <div class="presentation">
                    <img src="./img/admiral.jpg" alt="Фото номера">
                </div>
                <div class="info">
                    <div class="info-blok">
                        <div class="info-blok-title">City:</div>
                        <div class="info-blok-text">Rostov-on-Don LCD admiral</div>
                    </div>
                    <div class="info-blok">
                        <div class="info-blok-title">Apartment area:</div>
                        <div class="info-blok-text">81 m<sup>2</sup></div>
                    </div>
                    <div class="info-blok">
                        <div class="info-blok-title">Repair time:</div>
                        <div class="info-blok-text">3.5 months</div>
                    </div>
                    <div class="info-blok">
                        <div class="info-blok-title">Repair Cost:</div>
                        <div class="info-blok-text">Upon request</div>
                    </div>
                </div>
            </div>
            `;
        } else {
            // Элементы управления
            let sliderArrows = document.querySelectorAll(".slider__arrow");
            let sliderDots = document.querySelector(".dots");
            let sliderTabs = document.querySelector('.tabs-row');


            initSlides();
            initArrows();
            initDots();
            initTabs();

            function initSlides() {
                content.forEach((element, index) => {
                    sliderWrap.innerHTML += `
                        <div class="slider-slide slider-slide${index} ${index === 0? "active" : ""}" data-index="${index}">
                            <div class="main1-top">
                                <div class="main1-title">
                                    Completed<br>
                                    projects 
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--------</span>
                                </div>
                                <div class="main1-text">
                                    <p>
                                        Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families
                                    </p>
                                </div>
                            </div>    
                            <div class="presentation">
                                <img src="${element.foto}" alt="Фото номера">
                            </div>
                            <div class="info">
                                <div class="info-blok">
                                    <div class="info-blok-title">City:</div>
                                    <div class="info-blok-text">${element.city}</div>
                                </div>
                                <div class="info-blok">
                                    <div class="info-blok-title">Apartment area:</div>
                                    <div class="info-blok-text">${element.area}</div>
                                </div>
                                <div class="info-blok">
                                    <div class="info-blok-title">Repair time:</div>
                                    <div class="info-blok-text">${element.time}</div>
                                </div>
                                <div class="info-blok">
                                    <div class="info-blok-title">Repair Cost:</div>
                                    <div class="info-blok-text">${element.cost}</div>
                                </div>
                            </div>
                        </div>
                    `;
                })
            }

            function initArrows() {
                sliderArrows.forEach(arrow => {
                    arrow.addEventListener("click", function() {
                        let curNumber = +sliderWrap.querySelector(".active").dataset.index;
                        let nextNumber;
                        if (arrow.classList.contains("arrow-prev")) {
                            nextNumber = curNumber === 0? content.length - 1 : curNumber - 1;
                        } else {
                            nextNumber = curNumber === content.length - 1? 0 : curNumber + 1;
                        }
                        moveSlider(nextNumber);

                    })
                });
            }

            function initDots() {
                content.forEach((image, index) => {
                    let dot = `<span class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></span>`;
                    sliderDots.innerHTML += dot;
                });
        
                sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
                    dot.addEventListener("click", function() {
                        moveSlider(this.dataset.index);
                    });
                });
            }

            function initTabs() {
                let tabs = sliderTabs.querySelectorAll(".main1-tab");
                
                tabs.forEach( (tab, index) => {
                    tab.classList.add("n" + index);
                    if (index === 0) {
                        tab.classList.add("active");
                    }
                    tab.addEventListener("click", function() {
                        moveSlider(index);
                    })
                });

            }

            function moveSlider(num) {
                sliderWrap.querySelector(".active").classList.remove("active");
                sliderWrap.querySelector(".slider-slide" + num).classList.add("active");

                sliderDots.querySelector(".active").classList.remove("active");
                sliderDots.querySelector(".n" + num).classList.add("active");

                sliderTabs.querySelector(".active").classList.remove("active");
                sliderTabs.querySelector(".n" + num).classList.add("active");
            }
        }
    }

document.addEventListener('DOMContentLoaded', function() {
    initSlider();
});