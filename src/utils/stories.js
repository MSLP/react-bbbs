const fullStories = [
  {
    id: 0,
    imageUrl: 'https://picsum.photos/870/520',
    heading: 'Алина и Марина',
    together: 'Вместе с февраля 2013 года',
    text: `Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012 году, а в
  первые месяцы 2013-го после всех тестов и тренингов у меня появился младший – Никита. Надо сказать,
  что шёл я к этому довольно долго два или три года. Нет, не потому что собирался с мыслями. Я совершенно
  чётко осознавал, что накопил достаточный эмоциональный бэкграунд и готов делиться им с детьми, а точнее –
  с каким-то одним ребёнком.`,
    p1: `Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012 году, а в первые месяцы
  2013-го после всех тестов и тренингов у меня появился младший — Никита. Надо сказать, что шёл я к этому
  довольно долго два или три года. Нет, не потому что собирался с мыслями. Я совершенно чётко осознавал, что
  накопил достаточный эмоциональный бэкграунд и готов делиться им с детьми, а точнее — с каким-то одним ребёнком.
  Но большинство некоммерческих организаций, которые работают с сиротами, практикуют массовые выезды волонтёров
  к группам детей, а мне хотелось найти программу, где организуют индивидуальное общение взрослого и ребёнка,
  поскольку я понимал, что дети в интернатах гораздо больше нуждаются во внимании и индивидуальном общении, чем
  в подарках. На поиски подходящей программы ушло некоторое время, и вдруг в конце 2012 года общество сильно
  всколыхнулось после принятия «закона Димы Яковлева», все волонтёрские программы стали очень активны в Интернете,
  в том числе и «Старшие братья Старшие сёстры». Прочитав первую страницу на сайте «Старших братьев…», я понял:
  вот оно! И сразу заполнил заявку на участие в программе.`,
    bold: `Первые месяцы дружбы с Никитой были непростыми, мы привыкали друг к другу. Никита не верил, что я надолго в его жизни`,
    p: [
      `Переломить эту ситуацию помогли каникулы. Когда я впервые провожал его в зимний лагерь, он сказал, что
    не хочет уезжать, потому что, когда он вернётся, меня уже не будет рядом. Убеждения и заверения в том,
    что я никуда не денусь, не помогли, и даже то, что после каникул я пришёл, не добавило Никите уверенности в
    долгосрочности нашей дружбы. Ситуация повторилась летом: уезжая в лагерь, он снова боялся, что наша дружба
    кончится, но я снова встретил его осенью. И тогда Никита понял, что я в его жизни надолго и всерьёз, и стал
    доверять мне. Например, я могу позвонить и сказать, что на этих выходных у меня не получится приехать, и он
    совершенно спокойно спрашивает, приду ли я на следующих.`,
      `Сейчас всё хорошо, и я очень рад нашим встречам и общению. Вдохновляет то, что Никита начал больше
    рассказывать о своей жизни и друзьях, стал более открытым и чутким. Он даже запомнил дату нашей первой
    встречи, понимая, что это важная дата для нас обоих. Мы назвали эту дату днём рождения нашей пары, и, когда
    нам исполнилось три года, он всем в группе рассказывал о     нашем дне рождения и приглашал на торт.`,
      `Ещё одна радость — он учится рассуждать, понимать свои потребности и
    выбирать то, что ему больше нравится. Для стороннего наблюдателя это кажется неочевидным
    достижением, но, если знать, как неохотно воспитанники сиротских учреждений
    включают голову, особенно в ситуации выбора, то всё станет ясно. Тем не менее мне порой приходится
    прилагать некоторые усилия к тому, чтобы он аргументировал свой выбор. Например, когда я спрашиваю:
    «Куда мы пойдем: в парк Горького или в кино?» —
    он какое-то время пытается угадать «правильный ответ», но, когда видит, что со мной этот номер не
    проходит, начинает объяснять, почему сделал тот или иной выбор.`,
      `Переломить эту ситуацию помогли каникулы. Когда я впервые провожал его в
    зимний лагерь, он сказал, что не хочет уезжать, потому что, когда он вернётся, меня уже не будет
    рядом. Убеждения и заверения в том, что я никуда не денусь, не помогли, и даже то,
    что после каникул я пришёл, не добавило Никите уверенности в долгосрочности нашей дружбы. Ситуация
    повторилась летом: уезжая в лагерь, он снова боялся, что наша дружба кончится, но я снова встретил
    его осенью. И тогда Никита понял, что я в его жизни надолго и всерьёз, и стал доверять мне.
    Например, я могу позвонить и сказать, что на этих выходных у меня не получится приехать, и он
    совершенно спокойно спрашивает, приду ли я на следующих.`,
    ],
    writeTo: 'написать Алине',
    link: '/',
    images: [
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      'https://pics.uvic.ca/sites/default/files/styles/w700/public/2021-02/PICS-Student-Award-700x525.png?itok=29d3Vz0_',
      'https://i1.wp.com/observapics.fiocruz.br/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-03-at-00.04.04.jpeg?resize=1080%2C675',
    ],
  },
  {
    id: 1,
    imageUrl: 'https://picsum.photos/870/520',
    heading: 'Кирилл и Никита',
    together: 'Вместе с февраля 2013 года',
    text: `Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012 году, а в
    первые месяцы 2013-го после всех тестов и тренингов у меня появился младший – Никита. Надо сказать,
    что шёл я к этому довольно долго два или три года. Нет, не потому что собирался с мыслями. Я совершенно
    чётко осознавал, что накопил достаточный эмоциональный бэкграунд и готов делиться им с детьми, а точнее –
    с каким-то одним ребёнком.`,
    p1: `Волонтёром в программе «Старшие Братья Старшие Сёстры» я стал в 2012 году, а в первые месяцы
    2013-го после всех тестов и тренингов у меня появился младший — Никита. Надо сказать, что шёл я к этому
    довольно долго два или три года. Нет, не потому что собирался с мыслями. Я совершенно чётко осознавал, что
    накопил достаточный эмоциональный бэкграунд и готов делиться им с детьми, а точнее — с каким-то одним ребёнком.
    Но большинство некоммерческих организаций, которые работают с сиротами, практикуют массовые выезды волонтёров
    к группам детей, а мне хотелось найти программу, где организуют индивидуальное общение взрослого и ребёнка,
    поскольку я понимал, что дети в интернатах гораздо больше нуждаются во внимании и индивидуальном общении, чем
    в подарках. На поиски подходящей программы ушло некоторое время, и вдруг в конце 2012 года общество сильно
    всколыхнулось после принятия «закона Димы Яковлева», все волонтёрские программы стали очень активны в Интернете,
    в том числе и «Старшие братья Старшие сёстры». Прочитав первую страницу на сайте «Старших братьев…», я понял:
    вот оно! И сразу заполнил заявку на участие в программе.`,
    bold: `Первые месяцы дружбы с Никитой были непростыми, мы привыкали друг к другу. Никита не верил, что я надолго в его жизни`,
    p: [
      `Переломить эту ситуацию помогли каникулы. Когда я впервые провожал его в зимний лагерь, он сказал, что
      не хочет уезжать, потому что, когда он вернётся, меня уже не будет рядом. Убеждения и заверения в том,
      что я никуда не денусь, не помогли, и даже то, что после каникул я пришёл, не добавило Никите уверенности в
      долгосрочности нашей дружбы. Ситуация повторилась летом: уезжая в лагерь, он снова боялся, что наша дружба
      кончится, но я снова встретил его осенью. И тогда Никита понял, что я в его жизни надолго и всерьёз, и стал
      доверять мне. Например, я могу позвонить и сказать, что на этих выходных у меня не получится приехать, и он
      совершенно спокойно спрашивает, приду ли я на следующих.`,
      `Сейчас всё хорошо, и я очень рад нашим встречам и общению. Вдохновляет то, что Никита начал больше
      рассказывать о своей жизни и друзьях, стал более открытым и чутким. Он даже запомнил дату нашей первой
      встречи, понимая, что это важная дата для нас обоих. Мы назвали эту дату днём рождения нашей пары, и, когда
      нам исполнилось три года, он всем в группе рассказывал о     нашем дне рождения и приглашал на торт.`,
      `Ещё одна радость — он учится рассуждать, понимать свои потребности и
      выбирать то, что ему больше нравится. Для стороннего наблюдателя это кажется неочевидным
      достижением, но, если знать, как неохотно воспитанники сиротских учреждений
      включают голову, особенно в ситуации выбора, то всё станет ясно. Тем не менее мне порой приходится
      прилагать некоторые усилия к тому, чтобы он аргументировал свой выбор. Например, когда я спрашиваю:
      «Куда мы пойдем: в парк Горького или в кино?» —
      он какое-то время пытается угадать «правильный ответ», но, когда видит, что со мной этот номер не
      проходит, начинает объяснять, почему сделал тот или иной выбор.`,
      `Переломить эту ситуацию помогли каникулы. Когда я впервые провожал его в
      зимний лагерь, он сказал, что не хочет уезжать, потому что, когда он вернётся, меня уже не будет
      рядом. Убеждения и заверения в том, что я никуда не денусь, не помогли, и даже то,
      что после каникул я пришёл, не добавило Никите уверенности в долгосрочности нашей дружбы. Ситуация
      повторилась летом: уезжая в лагерь, он снова боялся, что наша дружба кончится, но я снова встретил
      его осенью. И тогда Никита понял, что я в его жизни надолго и всерьёз, и стал доверять мне.
      Например, я могу позвонить и сказать, что на этих выходных у меня не получится приехать, и он
      совершенно спокойно спрашивает, приду ли я на следующих.`,
    ],
    writeTo: 'написать Алине',
    link: '/',
    images: [
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      'https://pics.uvic.ca/sites/default/files/styles/w700/public/2021-02/PICS-Student-Award-700x525.png?itok=29d3Vz0_',
      'https://i1.wp.com/observapics.fiocruz.br/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-03-at-00.04.04.jpeg?resize=1080%2C675',
    ],
  },
  {
    id: 2,
    heading: 'Алик и Артем',
    images: [
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      'https://pics.uvic.ca/sites/default/files/styles/w700/public/2021-02/PICS-Student-Award-700x525.png?itok=29d3Vz0_',
      'https://i1.wp.com/observapics.fiocruz.br/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-03-at-00.04.04.jpeg?resize=1080%2C675',
    ],
    p: [],
  },
  {
    id: 3,
    heading: 'Нина и Виталик',
    images: [
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      'https://pics.uvic.ca/sites/default/files/styles/w700/public/2021-02/PICS-Student-Award-700x525.png?itok=29d3Vz0_',
      'https://i1.wp.com/observapics.fiocruz.br/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-03-at-00.04.04.jpeg?resize=1080%2C675',
    ],
    p: [],
  },
];

export default fullStories;
