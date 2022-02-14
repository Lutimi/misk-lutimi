let is_ok = false;
let data = 1000;
const error = 'No se puedo resolver';

const products = [
    {
        id: 1,
        name: 'Cupcake de Fresa',
        stock: 86,
        cost: 20,
    },
    {
        id: 2,
        name: 'Tamalito',
        stock: 20,
        cost: 14,
    },
    {
        id: 3,
        name: 'Chocolate',
        stock: 12,
        cost: 25,
    },
    {
        id: 4,
        name: 'Torta',
        stock: 10,
        cost: 60,
    },
]


const customFetch = (data, timeout, error) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products) {
                resolve(data);
            } else {
                reject(error);
            }
        }, timeout);
    });
};


customFetch(products, 2000,error)
    .then((data) => console.log( data))
    .catch((error) => console.log('Hubo un error Ver los resultados aqui: ', error));