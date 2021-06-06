export const loginPost = {
  refresh:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYyMDU4NTM1NSwianRpIjoiNGY5YTc5ZmZmNDEzNDM5NmJlNjhlZTVhNjk4MWNjMDgiLCJ1c2VyX2lkIjoxfQ.9pi-sEjkVsU7yxnP26Xvf-E98CVp9HgRvE_sHI7Mi_E',
  access:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIwNDk5MjU1LCJqdGkiOiI3N2Q1MWNmNWM1ZGU0YzBmYjE3MDVlMDgzYjU4YjYyMSIsInVzZXJfaWQiOjF9.jPP3p030SSA4H72m1JpElYh-R-bF20CBcLwnxI7Lxjs',
};

export const userGet = {
  id: 1,
  user: 1,
  city: null,
};

export const profileStory = [
  {
    place: 'Парк горького',
    image: 'https://vse-sekrety.ru/uploads/posts/2015-12/1450044662_1.jpg',
    date: '2020-05-12',
    text: `Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы
        испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание.
        Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не
        понравилось. Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие
        чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное
        описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что
        понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.`,
    feedback: 'good',
  },
];

export const citiesGet = [
  {
    id: 0,
    name: 'Москва',
    isPrimary: true,
  },
  {
    id: 1,
    name: 'Санкт-Петербург',
    isPrimary: true,
  },
  {
    id: 2,
    name: 'Воронеж',
    isPrimary: false,
  },
  {
    id: 3,
    name: 'Алексин',
    isPrimary: false,
  },
  {
    id: 4,
    name: 'Барнаул',
    isPrimary: false,
  },
];

export const eventsGet = [
  {
    id: 1,
    booked: false,
    address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
    contact: 'Александра, +7 926 356-78-90',
    title: 'Субботний meet up: учимся проходить интевью',
    description:
      'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
    startAt: '2020-12-10T06:00:00Z',
    endAt: '2020-12-10T08:00:00Z',
    seats: 100,
    takenSeats: 69,
    city: 1,
  },
  {
    id: 2,
    booked: true,
    address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
    contact: 'Александра, +7 926 356-78-90',
    title: 'Субботний meet up: учимся проходить интевью',
    description:
      'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
    startAt: '2021-01-06T06:00:00Z',
    endAt: '2021-01-06T08:00:00Z',
    seats: 100,
    takenSeats: 3,
    city: 1,
  },
  {
    id: 3,
    booked: true,
    address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
    contact: 'Александра, +7 926 356-78-90',
    title: 'Субботний meet up: учимся проходить интевью',
    description:
      'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
    startAt: '2021-05-09T06:00:00Z',
    endAt: '2021-05-09T08:00:00Z',
    seats: 100,
    takenSeats: 30,
    city: 1,
  },
  {
    id: 4,
    booked: false,
    address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
    contact: 'Александра, +7 926 356-78-90',
    title: 'Субботний meet up: учимся проходить интевью',
    description:
      'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
    startAt: '2021-05-12T06:00:00Z',
    endAt: '2021-05-12T08:00:00Z',
    seats: 100,
    takenSeats: 100,
    city: 1,
  },
];

export const eventPost = {
  id: 2,
  event: 4,
};

export const placesGet = [
  {
    chosen: false,
    category: 'Парки',
    title: 'Московский зоопарк 1',
    address: 'Адрес в одну строку',
    city: 'Москва',
    info: 'Пол, возраст, категория',
    sex: 'Девочка',
    age: 8,
    link: 'https://www.moscowzoo.ru/',
    text: 'Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, чт понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Common_zebra_at_masai_mara_kenya_02.jpg',
    id: 1,
  },
  {
    chosen: true,
    category: 'Выбор наставника',
    title: 'Воронежский зоопарк 2',
    address: 'Длинный адрес в две строки Длинный адрес в две строки Длинный адрес в две строки',
    city: 'Воронеж',
    info: 'Пол, возраст, категория',
    age: 12,
    type: 'Познавательное',
    link: 'https://www.moscowzoo.ru/',
    text: 'Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, чт понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Common_zebra_at_masai_mara_kenya_02.jpg',
    id: 2,
  },
  {
    chosen: true,
    category: 'Музеи',
    title: 'Эрмитаж',
    address: 'Адрес в одну строку',
    city: 'Санкт-Петербург',
    info: 'Пол, возраст, категория',
    sex: 'Мальчик',
    age: 16,
    link: 'https://www.moscowzoo.ru/',
    text: 'Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, чт понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Common_zebra_at_masai_mara_kenya_02.jpg',
    id: 3,
  },
  {
    chosen: false,
    category: 'Экскурсии',
    title: 'Московский зоопарк 4',
    address: 'Длинный адрес в две строки Длинный адрес в две строки Длинный адрес в две строки',
    city: 'Москва',
    info: 'Пол, возраст, категория',
    age: 26,
    type: 'Развлекательное',
    link: 'https://www.moscowzoo.ru/',
    text: 'Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, чт понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Common_zebra_at_masai_mara_kenya_02.jpg',
    id: 4,
  },
  {
    chosen: false,
    category: 'Парки',
    title: 'Воронежский зоопарк 1',
    address: 'Адрес в одну строку',
    city: 'Воронеж',
    info: 'Пол, возраст, категория',
    sex: 'Девочка',
    age: 8,
    link: 'https://www.moscowzoo.ru/',
    text: 'Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, чт понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Common_zebra_at_masai_mara_kenya_02.jpg',
    id: 5,
  },
  {
    chosen: true,
    category: 'Выбор наставника',
    title: 'Эрмитаж',
    address: 'Длинный адрес в две строки Длинный адрес в две строки Длинный адрес в две строки',
    city: 'Санкт-Петербург',
    info: 'Пол, возраст, категория',
    age: 12,
    type: 'Познавательное',
    link: 'https://www.moscowzoo.ru/',
    text: 'Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, чт понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Common_zebra_at_masai_mara_kenya_02.jpg',
    id: 6,
  },
  {
    chosen: true,
    category: 'Выбор наставника',
    title: 'Московский зоопарк 3',
    address: 'Адрес в одну строку',
    city: 'Москва',
    info: 'Пол, возраст, категория',
    sex: 'Мальчик',
    age: 16,
    link: 'https://www.moscowzoo.ru/',
    text: 'Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, чт понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Common_zebra_at_masai_mara_kenya_02.jpg',
    id: 7,
  },
  {
    chosen: false,
    category: 'Экскурсии',
    title: 'Воронежский зоопарк 4',
    address: 'Длинный адрес в две строки Длинный адрес в две строки Длинный адрес в две строки',
    city: 'Воронеж',
    info: 'Пол, возраст, категория',
    age: 26,
    type: 'Развлекательное',
    link: 'https://www.moscowzoo.ru/',
    text: 'Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, чт понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Common_zebra_at_masai_mara_kenya_02.jpg',
    id: 8,
  },
];

export const mainGet = {
  event: {
    id: 11,
    tags: [
      {
        id: 111,
        name: 'Волонтёры',
        slug: 'volunteers',
      },
      {
        id: 112,
        name: 'Дети',
        slug: 'children',
      },
    ],
    title: 'Субботний meet up: учимся проходить интевью',
    startAt: '2021-05-08T19:22:00Z',
    endAt: '2021-05-08T21:22:00Z',
    address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
    contact: 'Александра, +7 926 356-78-90',
    remainSeats: 5,
    description:
      'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
    booked: true,
  },
  history: {
    id: 21,
    imageUrl: 'https://picsum.photos/870/520',
    title: 'История Марины и Алины',
  },
  place: {
    chosen: true,
    id: 31,
    title: 'Сплав на байдарках в две строки',
    address: 'усадьба Архангельское в две строки',
    category: 'Выбор наставника',
    info: 'Девочка, 10 лет. Активный отдых',
    sex: 'Девочка',
    age: 10,
    type: 'Активный отдых',
    text: 'Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и,\nАннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    imageUrl: 'https://picsum.photos/1125/394',
    link: 'https://www.moscowzoo.ru/',
  },
  articles: [
    {
      id: 41,
      color: '#C8D1FF',
      title:
        'Развитие детей-сирот отличается от развития детей, живущих в семьях. Все  этапы развития у детей-сирот проходят с искажениями и имеют ряд негативных  особенностей. ',
    },
    {
      id: 42,
      color: '#8CDD94',
      title:
        'У таких детей возникает ощущение отверженности. Оно приводит к напряженности и  недоверию к людям и, как итог, к реальному неприятию себя и окружающих.',
    },
  ],
  // movies: [
  //   {
  //     id: 51,
  //     imageUrl: 'https://picsum.photos/420/239',
  //     title: 'Жутко громко и запредельно близко',
  //     info: 'Василий Сигарев, Борисов-Мусотов (Россия), 2009 год',
  //     link: 'https://youtu.be/8VzzlhOyOSI',
  //     tags: [
  //       {
  //         id: 551,
  //         name: 'драма',
  //         slug: 'rubric',
  //       },
  //       {
  //         id: 552,
  //         name: 'документальный',
  //         slug: 'rubric',
  //       },
  //     ],
  //   },
  //   {
  //     id: 52,
  //     imageUrl: 'https://picsum.photos/420/239',
  //     title: 'Жутко громко и запредельно близко',
  //     info: 'Василий Сигарев, Борисов-Мусотов (Россия), 2009 год',
  //     link: 'https://youtu.be/8VzzlhOyOSI',
  //     tags: [
  //       {
  //         id: 551,
  //         name: 'комедия',
  //         slug: 'rubric',
  //       },
  //     ],
  //   },
  //   {
  //     id: 53,
  //     imageUrl: 'https://picsum.photos/420/239',
  //     title: 'Жутко громко и запредельно близко',
  //     info: 'Василий Сигарев, Борисов-Мусотов (Россия), 2009 год',
  //     link: 'https://youtu.be/8VzzlhOyOSI',
  //     tags: [
  //       {
  //         id: 552,
  //         name: 'драма',
  //         slug: 'rubric',
  //       },
  //     ],
  //   },
  //   {
  //     id: 54,
  //     imageUrl: 'https://picsum.photos/420/239',
  //     title: 'Жутко громко и запредельно близко',
  //     info: 'Василий Сигарев, Борисов-Мусотов (Россия), 2009 год',
  //     link: 'https://youtu.be/8VzzlhOyOSI',
  //     tags: [
  //       {
  //         id: 551,
  //         name: 'документальный',
  //         slug: 'rubric',
  //       },
  //     ],
  //   },
  // ],
  // video: {
  //   id: 61,
  //   title: 'Эфир с выпускником нашей программы',
  //   info: 'Иван Рустаев, выпускник программы',
  //   link: 'https://youtu.be/H980rXfjdq4',
  //   imageUrl: 'https://picsum.photos/1199/675',
  //   duration: 134,
  // },
  questions: [
    {
      id: 71,
      tags: [
        {
          id: 771,
          name: 'Ответственность',
          slug: 'rubric',
        },
      ],
      title: 'Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?',
    },
    {
      id: 72,
      tags: [
        {
          id: 771,
          name: 'Программа',
          slug: 'rubric',
        },
      ],
      title:
        'Возможно ли продлить срок участия в программе, если и я и мой «младший» хотим остаться в программе?',
    },
    {
      id: 73,
      tags: [
        {
          id: 771,
          name: 'Завершение отношений',
          slug: 'rubric',
        },
      ],
      title:
        'Что делать если Ваш младший решил закрыть пару, т.к. слишком занят с учебой и друзьями?',
    },
  ],
};

export const questionsGet = [
  {
    id: 71,
    tags: [
      {
        id: 771,
        name: 'Ответственность',
        slug: 'rubric',
      },
      {
        id: 772,
        name: 'Сомнения',
        slug: 'rubric',
      },
    ],
    title: 'Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?',
    answerText:
      'Настоящие дружеские отношения строятся на взаимном интересе, доверии и привязанности. Когда наставник для ребенка становится именно другом, а не просто знакомым или волонтером, то подопечный начинает быть искренне заинтересован в общении, начинает ждать встреч, звонить по телефону. Но тут важно, чтобы наставник оставался именно в роли друга, старшего брата или сестры, а не потенциального родителя. Перед включением ребенка в программу кураторы обязательно объясняют ребенку, кто такой наставник и какую роль он может сыграть в его жизни. Конечно, здесь многое зависит от умения самого наставника выстраивать отношения и границы, но, если человек сомневается в своих навыках, то в рамках нашей программы проводятся поддерживающие мероприятия, которые развивают компетенции наставников и их коммуникативные способности, которые помогают в общении с детьми, а также есть всегда возможность обратиться к куратору программы.',
  },
  {
    id: 72,
    tags: [
      {
        id: 773,
        name: 'Программа',
        slug: 'rubric',
      },
    ],
    title:
      'Возможно ли продлить срок участия в программе, если и я и мой «младший» хотим остаться в программе?',
    answerText:
      'Настоящие дружеские отношения строятся на взаимном интересе, доверии и привязанности. Когда наставник для ребенка становится именно другом, а не просто знакомым или волонтером, то подопечный начинает быть искренне заинтересован в общении, начинает ждать встреч, звонить по телефону. Но тут важно, чтобы наставник оставался именно в роли друга, старшего брата или сестры, а не потенциального родителя. Перед включением ребенка в программу кураторы обязательно объясняют ребенку, кто такой наставник и какую роль он может сыграть в его жизни. Конечно, здесь многое зависит от умения самого наставника выстраивать отношения и границы, но, если человек сомневается в своих навыках, то в рамках нашей программы проводятся поддерживающие мероприятия, которые развивают компетенции наставников и их коммуникативные способности, которые помогают в общении с детьми, а также есть всегда возможность обратиться к куратору программы.',
  },
  {
    id: 73,
    tags: [
      {
        id: 774,
        name: 'Завершение отношений',
        slug: 'rubric',
      },
      {
        id: 775,
        name: 'Сложности',
        slug: 'rubric',
      },
    ],
    title:
      'Что делать если Ваш младший решил закрыть пару, т.к. слишком занят с учебой и друзьями?',
    answerText:
      'Настоящие дружеские отношения строятся на взаимном интересе, доверии и привязанности. Когда наставник для ребенка становится именно другом, а не просто знакомым или волонтером, то подопечный начинает быть искренне заинтересован в общении, начинает ждать встреч, звонить по телефону. Но тут важно, чтобы наставник оставался именно в роли друга, старшего брата или сестры, а не потенциального родителя. Перед включением ребенка в программу кураторы обязательно объясняют ребенку, кто такой наставник и какую роль он может сыграть в его жизни. Конечно, здесь многое зависит от умения самого наставника выстраивать отношения и границы, но, если человек сомневается в своих навыках, то в рамках нашей программы проводятся поддерживающие мероприятия, которые развивают компетенции наставников и их коммуникативные способности, которые помогают в общении с детьми, а также есть всегда возможность обратиться к куратору программы.',
  },
];

export const booksGet = [
  {
    title: 'Жизнь после утраты',
    author: 'Волкан Вамик, Зинтл Элизабет',
    year: 2011,
    description:
      'Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    genre: 'Научные',
    id: 80,
  },
  {
    title: 'Жизнь после утраты',
    author: 'Волкан Вамик, Зинтл Элизабет',
    year: 2011,
    description:
      'Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    genre: 'Научные',
    id: 81,
  },
  {
    title: 'Жизнь после утраты',
    author: 'Волкан Вамик, Зинтл Элизабет',
    year: 2011,
    description:
      'Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    genre: 'Научные',
    id: 82,
  },
  {
    title: 'Жизнь после утраты',
    author: 'Волкан Вамик, Зинтл Элизабет',
    year: 2011,
    description:
      'Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    genre: 'Художественные',
    id: 83,
  },
  {
    title: 'Жизнь после утраты',
    author: 'Волкан Вамик, Зинтл Элизабет',
    year: 2011,
    description:
      'Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    genre: 'Научные',
    id: 84,
  },
  {
    title: 'Жизнь после утраты',
    author: 'Волкан Вамик, Зинтл Элизабет',
    year: 2011,
    description:
      'Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    genre: 'Художественные',
    id: 85,
  },
];

export const moviesGet = [
  {
    id: 51,
    imageUrl: 'https://picsum.photos/420/239',
    title: '1+1 / Неприкасаемые (2011) - трейлер',
    info: `Год выпуска: 2011
    Страна: Франция
    Жанр: Драма, Комедия, Биография
    Альтернативное название: «Один плюс один», «Неприкасаемые»
    Режиссер: Оливье Накаш, Эрик Толедано
    В ролях: Франсуа Клюзе, Омар Си, Анн Ле Ни, Одри Флеро, Жозефин де Мо, Клотильд Молле, Альба Гайя Крагеде Беллуджи, Сирил Менди, Салимата Камате, Абса Дьяту Тур
    1+1 / Неприкасаемые 2011 трейлер`,
    link: 'https://www.youtube.com/watch?v=tTwFeGArcrs&ab_channel=%D0%A2%D1%80%D0%B5%D0%B9%D0%BB%D0%B5%D1%80%D1%8B%D0%BA%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%D0%BC%D0%A2%D1%80%D0%B5%D0%B9%D0%BB%D0%B5%D1%80%D1%8B%D0%BA%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%D0%BC',
    tags: [
      {
        id: 551,
        name: 'Драма',
        slug: 'rubric',
      },
      {
        id: 552,
        name: 'Комедия',
        slug: 'rubric',
      },
    ],
  },
  {
    id: 52,
    imageUrl: 'https://picsum.photos/420/239',
    title: 'HUMAN',
    info: 'Фильм Янна Артус-Бертранда - трейлер',
    link: 'https://www.youtube.com/watch?v=-pKLClMwysE&ab_channel=HUMANRusseHUMANRusse',
    tags: [
      {
        id: 551,
        name: 'Документальный',
        slug: 'rubric',
      },
    ],
  },
  {
    id: 53,
    imageUrl: 'https://picsum.photos/420/239',
    title: 'Джуманджи: новый уровень - трейлер',
    info: `В ролях: Дуэйн Джонсон, Карен Гиллан («Мстители: Финал», «Джуманджи: Зов джунглей»), Кевин Харт («Полтора шпиона», «Джуманджи: Зов джунглей»), Джек Блэк («Ужастики», «Джуманджи: Зов джунглей»), Ник Джонас («Джуманджи: Зов джунглей») Дэнни Гловер и Дэнни ДеВито
    Режиссёр: Джейк Кэздан («Джуманджи: Зов джунглей», «Очень плохая училка»)`,
    link: 'https://www.youtube.com/watch?v=E_116VG-djE&ab_channel=SonyPicturesRUSonyPicturesRU',
    tags: [
      {
        id: 551,
        name: 'Комедия',
        slug: 'rubric',
      },
    ],
  },
  {
    id: 54,
    imageUrl: 'https://picsum.photos/420/239',
    title: 'Того Togo – 2019 - Трейлер',
    info: 'Трейлер фильма Того / Togo В главных ролях: Уиллем Дефо , Джулианна Николсон, Кристофер Хейердал, Майкл Гэстон, Майкл МакЭлхаттон',
    link: 'https://www.youtube.com/watch?v=JNulISUkk9s&ab_channel=SonyPicturesRUSonyPicturesRU',
    tags: [
      {
        id: 551,
        name: 'Драма',
        slug: 'rubric',
      },
      {
        id: 552,
        name: 'Исторический',
        slug: 'rubric',
      },
    ],
  },
  {
    id: 55,
    imageUrl: 'https://picsum.photos/420/239',
    title: 'Жутко громко и запредельно близко',
    info: 'Василий Сигарев, Борисов-Мусотов (Россия), 2009 год',
    link: 'https://youtu.be/8VzzlhOyOSI',
    tags: [
      {
        id: 556,
        name: 'Документальный',
        slug: 'rubric',
      },
      {
        id: 557,
        name: 'Комедия',
        slug: 'rubric',
      },
    ],
  },
];

export const videosGet = [
  {
    id: 541,
    imageUrl: 'https://picsum.photos/420/239',
    title:
      'Репортаж о программе "Старшие Братья Старшие Сестры" на Первом канале в передаче "Доброе утро"',
    info: 'Репортаж о программе "Старшие Братья Старшие Сестры" на Первом канале в передаче "Доброе утро"',
    link: 'https://www.youtube.com/watch?v=yLuQxkENBsg',
    tag: {
      name: 'Ресурсная группа',
      id: 110,
    },
  },
  {
    id: 542,
    imageUrl: 'https://picsum.photos/420/239',
    title: 'Старшие и Младшие. Мария и Максим',
    info: 'Ролик  - победитель в конкурсе видеороликов о наших "Старших" и "Младших" на ежегодном вечере "Наставник года 2020"',
    link: 'https://www.youtube.com/watch?v=OBwE5wQWfMA&list=PLGXCe1KkwauZXNDNreyywAR2lZjGvSQmF&ab_channel=NastavnikiNastavniki',
    tag: {
      name: 'Эксперт',
      id: 110,
    },
    chosen: true,
  },
  {
    id: 543,
    imageUrl: 'https://picsum.photos/420/239',
    title: 'Место встречи добрых дел',
    info: 'В Деньзащиты детей мы анонсировали акцию, которую стартовали совместно с благотворительным сервисом Сбербанка  - Сбербанк Вместе и журналом Woman.ru!',
    link: 'https://www.youtube.com/watch?v=COpr-rJgfk8&list=PLGXCe1KkwauZXNDNreyywAR2lZjGvSQmF&index=4&ab_channel=NastavnikiNastavniki',
    tag: {
      name: 'Пары',
      id: 110,
    },
  },
  {
    id: 544,
    imageUrl: 'https://picsum.photos/420/239',
    title: 'История дружбы. Ульяна и Света',
    info: 'История дружбы. Ульяна и Света',
    link: 'https://www.youtube.com/watch?v=MqUjMATgDyI&list=PLGXCe1KkwauZXNDNreyywAR2lZjGvSQmF&index=14&ab_channel=NastavnikiNastavniki',
    tag: {
      name: 'События',
      id: 110,
    },
  },
  {
    id: 545,
    imageUrl: 'https://picsum.photos/420/239',
    title: 'Ануш Овсепян - гость проекта "Главные герои" на Meet for Charity',
    info: 'Руководитель филиала программы "Старшие Братья Старшие Сестры" и директор по развитию программы в России  Ануш  Овсепян стала гостем проекта "Главные герои" на Meet for Charity!',
    link: 'https://www.youtube.com/watch?v=STboNuUYv6E&ab_channel=NastavnikiNastavniki',
    tag: {
      name: 'Медиа о нас',
      id: 110,
    },
  },
];

export const articlesGet = [
  {
    title: 'Причины подростковой агрессии',
    author: 'Ирина Стасенко, педагог-психолог',
    link: 'https://www.google.com/',
    text: 'Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. статьи в несколько абзацев.',
    id: 91,
  },
  {
    title: 'Самоубийство в подростковом возрасте. Интервью с психологом',
    author: 'Ирина Стасенко, педагог-психолог',
    link: 'https://www.google.com/',
    text: 'Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. статьи в несколько абзацев.',
    id: 92,
  },
  {
    title: 'Фотосессия на природе',
    author: 'Ирина Стасенко, педагог-психолог',
    link: 'https://www.google.com/',
    text: 'Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. статьи в несколько абзацев.',
    id: 93,
  },
  {
    title: 'Причины подростковой агрессии',
    author: 'Ирина Стасенко, педагог-психолог',
    link: 'https://www.google.com/',
    imageUrl: 'https://picsum.photos/420/239',
    text: 'Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. статьи в несколько абзацев.',
    id: 94,
    chosen: true,
  },
  {
    title: 'Самоубийство в подростковом возрасте. Интервью с психологом',
    author: 'Ирина Стасенко, педагог-психолог',
    link: 'https://www.google.com/',
    text: 'Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. статьи в несколько абзацев.',
    id: 95,
  },
  {
    title: 'Фотосессия на природе',
    author: 'Ирина Стасенко, педагог-психолог',
    link: 'https://www.google.com/',
    text: 'Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. статьи в несколько абзацев.',
    id: 96,
  },
];

export const materialsGet = [
  {
    title: 'Психологические особенности детей-сирот',
    text: 'Здесь будет текст материала, подготовленного экспертами организации',
    imageUrl: 'https://picsum.photos/420/239',
    id: 100,
  },
  {
    title: 'Особенности социально дезадаптивных детей',
    text: 'Здесь будет текст материала, подготовленного экспертами организации',
    imageUrl: 'https://picsum.photos/420/239',
    id: 101,
  },
  {
    title: 'Привязанность',
    text: 'Здесь будет текст материала, подготовленного экспертами организации',
    imageUrl: 'https://picsum.photos/420/239',
    id: 102,
  },
  {
    title: 'Проявление агрессии у детей-сирот',
    text: 'Здесь будет текст материала, подготовленного экспертами организации',
    imageUrl: 'https://picsum.photos/420/239',
    id: 103,
  },
  {
    title: 'Социальная адаптация',
    text: 'Здесь будет текст материала, подготовленного экспертами организации',
    imageUrl: 'https://picsum.photos/420/239',
    id: 104,
  },
  {
    title: 'Проявление агрессии у детей-сирот',
    text: 'Здесь будет текст материала, подготовленного экспертами организации',
    imageUrl: 'https://picsum.photos/420/239',
    id: 105,
  },
];

export const rightsGet = [
  {
    title: 'Трудоустройство для детей инвалидов',
    tag: { name: 'Трудоустройство', id: 120 },
    text: '',
    id: 1200,
  },
  {
    title: 'Льготы детей на жильё',
    tag: { name: 'Жильё', id: 121 },
    text: '',
    id: 1201,
  },
  {
    title: 'Пенсионное обеспечение для детей-сирот',
    tag: { name: 'Пенсии', id: 122 },
    text: '',
    id: 1202,
  },
  {
    title: 'Жилье для выпускников детских домов',
    tag: { name: 'Жильё', id: 123 },
    text: '',
    id: 1203,
  },
  {
    title: 'Льготные условия пользования общественным транспортом',
    tag: { name: 'Транспорт', id: 124 },
    text: '',
    id: 1204,
  },
  {
    title: 'Мед.помощь детям-сиротам',
    tag: { name: 'Медицина', id: 125 },
    text: '',
    id: 1205,
  },
];
