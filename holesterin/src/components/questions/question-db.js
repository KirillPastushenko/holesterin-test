export const questionsDB = [
    {
        'id': 1, 
        'text' : 'Ваша дата рождения',
        'type': 'datetime'
    },

    {
        'id': 2, 
        'text' : 'Ваш пол?',
        'type' : 'radio',
        'values': [
            'Да',
            'Нет'
        ],
    },

    {
        'id': 3, 
        'text' : 'Ваш рост?',
        'type' : 'textinput',
        'ed' : 'см'
    },

    {
        'id': 4, 
        'text' : 'Ваш вес?',
        'type' : 'textinput',
        'ed' : 'кг'
    },

    {
        'id': 5, 
        'text' : 'Место вашего постоянного проживания?',
        'type' : 'selectbox',
        'values' : [
            'Москва','Санкт-Петербург','Севастополь','Республика Адыгея (Адыгея)','Республика Алтай','Республика Башкортостан','Республика Бурятия','Республика Дагестан','Республика Ингушетия','Кабардино-Балкарская Республика','Республика Калмыкия','Карачаево-Черкесская Республика','Республика Карелия','Республика Коми','Республика Крым','Республика Марий Эл','Республика Мордовия','Республика Саха (Якутия)','Республика Северная Осетия – Алания','Республика Татарстан (Татарстан)','Республика Тыва','Удмуртская Республика','Республика Хакасия','Чеченская Республика','Чувашская Республика – Чувашия','Алтайский край','Забайкальский край','Камчатский край','Краснодарский край','Красноярский край','Пермский край','Приморский край','Ставропольский край','Хабаровский край','Амурская область','Архангельская область','Астраханская область','Белгородская область','Брянская область','Владимирская область','Волгоградская область','Вологодская область','Воронежская область','Ивановская область','Иркутская область','Калининградская область','Калужская область','Кемеровская область','Кировская область','Костромская область','Курганская область','Курская область','Ленинградская область','Липецкая область','Магаданская область','Московская область','Мурманская область','Нижегородская область','Новгородская область','Новосибирская область','Омская область','Оренбургская область','Орловская область','Пензенская область','Псковская область','Ростовская область','Рязанская область','Самарская область','Саратовская область','Сахалинская область','Свердловская область','Смоленская область','Тамбовская область','Тверская область','Томская область','Тульская область','Тюменская область','Ульяновская область','Челябинская область','Ярославская область','Город Москва','Город Санкт-Петербург','Город Севастополь','Еврейская автономная область','Ненецкий автономный округ','Ханты-Мансийский автономный округ – Югра','Чукотский автономный округ','Ямало-Ненецкий автономный округ'
        ]
    },

    {
        'id': 6, 
        'text' : 'Есть ли у вас сердечно-сосудистые заболевания?',
        'type' : 'radio',
        'values': [
            'Да',
            'Нет'
        ],
    },

    {
        'id': 7, 
        'text' : 'Есть ли у вас сопутствующие заболевания?',
        'type' : 'checkboxes',
        'values': [
            'нет заболеваний',
            'сахарный диабет',
            'хроническая болезнь почек', 
            'ревматоидный артрит', 
            'хроническая обструктивная болезнь легких'
        ],
    },

    {
        'id': 8, 
        'text' : 'Знаете ли вы ваш уровень холестерина?',
        'type' : 'radio',
        'values': [
            'Да',
            'Нет'
        ],
        'child': {
            'text' : 'Укажите ваш показатель',
            'type' : 'textinput',
            'ed' : 'Ммоль/л',
        }
    },

    {
        'id': 9, 
        'text' : 'Знаете ли вы ваш уровень артериального систолического давления?',
        'type' : 'radio',
        'values': [
            'Да',
            'Нет'
        ],
        'child': {
            'text' : 'Укажите ваш показатель',
            'type' : 'textinput',
            'ed' : 'мм рт. ст.',
        }
    },

    {
        'id': 10, 
        'text' : 'Знаете ли вы ваш уровень сахара крови?',
        'type' : 'radio',
        'values': [
            'Да',
            'Нет'
        ],
        'child': {
            'text' : 'Укажите ваш показатель',
            'type' : 'textinput',
            'ed' : 'Ммоль/л',
        }
    },


    {
        'id': 11, 
        'text' : 'Курите ли вы?',
        'type' : 'radio',
        'values': [
            'Нет',
            'Курю менее 10 лет подряд',
            'Курю более 10 лет подряд, менее 1 пачки в день',
            'Курю более 10 лет подряд, более 2 пачек в день'
        ],
    },

    {
        'id': 12, 
        'text' : 'Были ли у вашего близкого родственника моложе 65 лет сердечно-сосудистые заболевания?',
        'type' : 'radio',
        'values': [
            'Да',
            'Нет'
        ],
    },

    {
        'id': 13, 
        'text' : 'Занимаетесь ли вы спортом 150 минут в неделю?',
        'type' : 'radio',
        'values': [
            'Да',
            'Нет'
        ],
    },

    {
        'id': 14, 
        'text' : 'Сколько шагов вы проходите в день?',
        'type' : 'radio',
        'values': [
            'Менее 10 тысяч шагов',
            'Более 10 тысяч шагов'
        ],
    }
];
 