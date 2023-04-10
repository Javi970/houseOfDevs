const Properties = require("../models/Properties");
const db = require("../db");

const fakeData = [
  {
    title: "Departamento 2 ambientes",
    addres: "calle 43",
    country: "argentina",
    district: "buenos aires",
    description:
      "La inmobiliaria  presenta en exclusiva este maravilloso piso de diseño en frente de la estación de fcc con parada vullpelleres listo para entrar a vivir.",
    availability: true,
    rooms: 2,
    category: "departamento",
    price: "3009",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/128286/32684598/535284921.jpg?rule=web_948x542",
  },
  {
    title: "Duplex 4 ambientes",
    addres: "calle 12",
    country: "argentina",
    district: "Capital Federal",
    description:
      "ESPECTACULAR ÁTICO DÚPLEX ÚNICO EN LA ZONA. REFORMA INTEGRAL CON MATERIALES DE MÁXIMA CALIDAD.",
    availability: true,
    rooms: 4,
    category: "duplex",
    price: "250000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/99202/32080851/530881831.jpg?rule=web_948x542",
  },
  {
    title: "departamento 3 ambientes",
    addres: "calle 40",
    country: "argentina",
    district: "buenos aires",
    description: "departamento lujoso ya amueblado, con vistas a la playa!",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "1200",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/102490/29556180/444717742.jpg?rule=web_948x542",
  },
  {
    title: "Ph 2 Ambientes",
    addres: "calle 22",
    country: "argentina",
    district: "buenos aires",
    description: "Lindo Ph listo para estrenar ",
    availability: true,
    rooms: 2,
    category: "ph",
    price: "2509",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/132104/30465436/544779235.jpg?rule=web_948x542",
  },

  {
    title: "Departamento 3 ambientes",
    addres: "calle 90",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "12009",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/102760/32451262/528102800.jpg?rule=web_948x542",
  },
  {
    title: "Departamento 3 ambientes",
    addres: "calle 109",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "1209",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/133246/31439298/498900441.jpg?rule=web_948x542",
  },
  {
    title: "Casa 3 ambientes",
    addres: "calle 13",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "casa",
    price: "12007",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/88332/14243320/170525813.jpg?rule=web_948x542",
  },
  {
    title: "Estancia 3 ambientes",
    addres: "calle 76",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "casa",
    price: "120000",
    image:
      "https://app.programainmobiliario.com/files/property/961292/557012341.jpg",
  },
  {
    title: "Duplex 3 ambientes",
    addres: "calle 200",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "duplex",
    price: "120000",
    image:
      "https://app.programainmobiliario.com/files/property/961292/557012341.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    addres: "calle 188",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/133618/31935324/520787965.jpg?rule=web_948x542",
  },
  {
    title: "Departamento 3 ambientes",
    addres: "calle 2",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/87286/29228135/433943410.jpg?rule=web_948x542",
  },
  {
    title: "Departamento 3 ambientes",
    addres: "calle 100",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://static.fotocasa.es/images/anuncio/2021/07/13/160691746/1549924370.jpg?rule=web_948x542",
  },
  {
    title: "Departamento 3 ambientes",
    addres: "calle 4",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/101719/30725170/479164682.jpg?rule=web_948x542",
  },
  {
    title: "Departamento 3 ambientes",
    addres: "calle 85",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/105281/31665519/504857412.jpg?rule=web_948x542",
  },
  {
    title: "Departamento 3 ambientes",
    addres: "calle 4",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/128207/32253790/521518684.jpg?rule=web_948x542",
  },
  {
    title: "Departamento 3 ambientes",
    addres: "calle 4",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/133519/30884173/523332694.jpg?rule=web_948x542",
  },
  {
    title: "Departamento 3 ambientes",
    addres: "calle 59",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "122342",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/125826/31925742/512821205.jpg?rule=web_948x542",
  },
  {
    title: "Departamento 3 ambientes",
    addres: "calle falsa 123",
    country: "brasil",
    district: "rio de janerio",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/136029/32483472/529186386.jpg?rule=web_948x542",
  },
];

const seed = () => {
  Properties.bulkCreate(fakeData).then((propertys) => {
    console.log("SEED TERMINADO");
    return propertys;
  });
};

db.sync()
  .then(seed)
  .then(() => console.log("Todo salio bien"))
  .catch((error) => console.log("TODO SALIO MAL", error));
