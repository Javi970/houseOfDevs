const Properties = require("../models/Properties");
const db = require("../db");


const fakeData = [
  {
    title: "Departamento 2 ambientes",
    addres: "calle 43",
    country: "argentina",
    district: "buenos aires",
    description:
      "La inmobiliaria 101 pisos presenta en exclusiva este maravilloso piso de diseño en frente de la estación de fcc con parada vullpelleres listo para entrar a vivir.",
    availability: true,
    rooms: 2,
    category: "departamento",
    price: "3009",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/128286/32684598/535284921.jpg?rule=web_948x542",
  },
  {
    title: "Casa 4 ambientes",
    addres: "calle 12",
    country: "argentina",
    district: "Capital Federal",
    description:
      "ESPECTACULAR ÁTICO DÚPLEX ÚNICO EN LA ZONA. REFORMA INTEGRAL CON MATERIALES DE MÁXIMA CALIDAD.",
    availability: true,
    rooms: 4,
    category: "casa",
    price: "250000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/99202/32080851/530881831.jpg?rule=web_948x542",
  },
  {
    title: "departamento 3 ambientes",
    addres: "calle 40",
    country: "argentina",
    district: "buenos aires",
    description:
      "IMAGINA TU NUEVA VIDA!!!VIVIENDAS EXCLUSIVAS EN MURCIA NORTE.!",
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
    description: "linda casa",
    availability: true,
    rooms: 2,
    category: "ph",
    price: "2509",
    image:
      "https://www.mapropiedades.com.ar/resources/original/propiedades/7899449/countrygolf-205_small.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Casa 3 ambientes",
    addres: "calle 13",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "12007",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Estancia 3 ambientes",
    addres: "calle 76",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Duplex 3 ambientes",
    addres: "calle 200",
    country: "argentina",
    district: "buenos Aires",
    description: "epic casa",
    availability: true,
    rooms: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
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

