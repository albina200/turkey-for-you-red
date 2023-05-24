let transferList = document.querySelector('#transferList');
let tursList = document.querySelector('#tursList');
console.log(transferList);

let stor = {
    transfer: [
        { name: 'Аэропорт - Анталия', price: 'Цена: 25$' },
        { name: 'Аэропорт - Кемер', price: 'Цена: От 40$ - 60$' },
        { name: 'Аэропорт - Чиралы/Олимпос', price: 'Цена: 75$' },
        { name: 'Аэропорт - Кунду', price: 'Цена: 35$' },
        { name: 'Аэропрот - Белек', price: 'Цена: 45$' },
        { name: 'Аэропорт - Сиде', price: 'Цена: От 55$ - 60$' },
        { name: 'Аэропорт - Аланья', price: 'Цена: От 60$ до 80$' },
    ],

    turs: [
        { img: './img/turs/27.ПещераАлтынбешик.jpg', title: 'Пещера Алтынбешик', link: './turs/27.peshera-altinbeshik.html' },
        { img: './img/turs/26.Афродисиас.jpg', title: 'Афродисиас', link: './turs/26.afrodisias.html' },
        { img: './img/turs/25.ДемреМираКекова.jpg', title: 'Демре мира кекова', link: './turs/25.demre-mira-kekova.html' },

        { img: './img/turs/24.ПляжКапуташ.jpg', title: 'Пляж Капуташ', link: './turs/24.plyaj-kaputash.html' },
        { img: './img/turs/23.Олюдениз.jpg', title: 'Олюдениз', link: './turs/23.oludeniz.html' },
        { img: './img/turs/22.ОстровСулуада.jpg', title: 'Остров Сулуада', link: './turs/22.ostrov-suluada.html' },

        { img: './img/turs/21.Каппадокия.jpg', title: 'Каппадокия (1день)', link: './turs/21.kappadokia-za-1-deny.html' },
        { img: './img/turs/20.Каппадокия.jpg', title: 'Каппадокия (2дня)', link: './turs/20.kappadokia-za-2-dnya.html' },
        { img: './img/turs/19.Каппадокия.jpg', title: 'Каппадокия (3дня)', link: './turs/19.kappadokia-za-3-dnya.html' },

        { img: './img/turs/18.ГринКаньон.jpg', title: 'Грин Каньон', link: './turs/18.green-kanyon.html' },
        { img: './img/turs/17.КаньонГёйнюк.jpg.jpg', title: 'Каньон Гёйнюк', link: './turs/17.kanyon-geynyuk.html' },
        { img: './img/turs/16.ТазыКаньон.png', title: 'Тазы Каньон', link: './turs/16.tazi-kanyon.html' },

        { img: './img/turs/15.Адрасан.jpg', title: 'Адрасан', link: './turs/15.adrasan.html' },
        { img: './img/turs/14.ОгниХимера.png', title: 'Огни Химера', link: './turs/14.gora-himera.html' },
        { img: './img/turs/13.ГораТахталы.jpg', title: 'Гора Тахталы', link: './turs/13.gora-tahtali.html' },

        { img: './img/turs/12.Аланья1.jpg', title: 'Аланья 1', link: './turs/12.alanya-1.html' },
        { img: './img/turs/11.Аланья2.jpg', title: 'Аланья 2', link: './turs/11.alanya-2.html' },
        { img: './img/turs/10.Аланья3.jpg', title: 'Аланья 3', link: './turs/10.alanya-3.html' },

        { img: './img/turs/9.ЛавандовыеПоля.jpg', title: 'Лавандовые Поля', link: './turs/9.lavandovie-poly-v-isparte.html' },
        { img: './img/turs/8.ЦветущиеЛилии.jpg', title: 'Цветущие Лилии', link: './turs/8.cvetushie-liliyi.html' },
        { img: './img/turs/7.ФестивальРозВИспарте.jpg', title: 'Фестиваль Роз В Испарте', link: './turs/7.festival-ros-v-isparte.html' },

        { img: './img/turs/6.ГорнолыжныйКурортУлудаг.jpg', title: 'Горнолыжный Курорт Улудаг', link: './turs/6.gornolijniy-kurort-uludag.html' },
        { img: './img/turs/5.ГорнолыжныйКурортСалда.jpg', title: 'Горнолыжный Курорт Салда', link: './turs/5.gornolijniy-kurort-salda.html' },
        { img: './img/turs/4.ГорнолыжныйКурорПаландокен.jpg', title: 'Горнолыжный Курор Паландокен', link: './turs/4.gornolijniy-kurort-palandoken.html' },

        { img: './img/turs/3.ГорнолыжныйКурортСаклыкент.jpg', title: 'Горнолыжный Курорт Саклыкент', link: './turs/3.gornolijniy-kurort-saklikent.html' },
        { img: './img/turs/2.ГорнолыжныйКурортДавраз.jpg', title: 'Горнолыжный Курорт Давраз', link: './turs/2.gornolijniy-kurort-davrazm.html' },
        { img: './img/turs/1.ГорнолыжныйКурортЭрджи.jpg', title: 'Горнолыжный Курорт Эрджи', link: './turs/1.gornolijniy-kurort-arjies.html' },
    ]
}

function tursRander() {
    for (let i = 0; i < stor.turs.length; i++) {
        let tursItemDiv = document.createElement('div');
        tursItemDiv.classList.add('swiper-slide');

        let tursItemImg = document.createElement('img');
        tursItemImg.src = stor.turs[i].img;
        tursItemDiv.appendChild(tursItemImg);

        let tursItemLink = document.createElement('a');
        tursItemLink.innerHTML = stor.turs[i].title;
        tursItemLink.href = stor.turs[i].link;

        tursItemDiv.appendChild(tursItemLink);

        tursList.appendChild(tursItemDiv);
    }
}

tursRander()

function transferRander() {
    for (let i = 0; i < stor.transfer.length; i++) {
        let transferItemDiv = document.createElement('div');
        transferItemDiv.classList.add('swiper-slide');

        let transferItemName = document.createElement('h3');
        transferItemName.innerHTML = stor.transfer[i].name;

        let transferItemPrice = document.createElement('p');
        transferItemPrice.innerHTML = stor.transfer[i].price;

        let transferItemLink = document.createElement('a');
        transferItemLink.innerHTML = 'Заказать';
        transferItemLink.setAttribute('id', 'reserveTransfer');
        transferItemLink.setAttribute('href', '#form');
        transferItemLink.setAttribute('class', 'button-order');

        transferItemDiv.appendChild(transferItemName);
        transferItemDiv.appendChild(transferItemPrice);
        transferItemDiv.appendChild(transferItemLink);

        transferList.appendChild(transferItemDiv);
    }
}

transferRander()
