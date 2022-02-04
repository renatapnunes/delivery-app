'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('products',
    [
      {
        id: 1,
        name: 'Skol Lata 250ml',
        price: 2.20,
        url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        price: 7.50,
        url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
      },
      {
        id: 3, 
        name: 'Antarctica Pilsen 300ml',
        price: 2.49,
        url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
      },
      {
        id: 4,
        name: 'Brahma 600ml',
        price: 7.50,
        url_image: 'http://localhost:3001/images/brahma_600ml.jpg',
      },
      {
        id: 5,
        name: 'Skol 269ml',
        price: 2.19,
        url_image: 'http://localhost:3001/images/skol_269ml.jpg',
      },
      {
        id: 6,
        name: 'Skol Beats Senses 313ml',
        price: 4.49,
        url_image: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
      },
      {
        id: 7,
        name: 'Becks 330ml',
        price: 4.99,
        url_image: 'http://localhost:3001/images/becks_330ml.jpg',
      },
      {
        id: 8,
        name: 'Brahma Duplo Malte 350ml',
        price: 2.79,
        url_image: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg',
      },
      {
        id: 9,
        name: 'Becks 600ml',
        price: 8.89,
        url_image: 'http://localhost:3001/images/becks_600ml.jpg',
      },
      {
        id: 10,
        name: 'Skol Beats Senses 269ml',
        price: 3.57,
        url_image: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg',
      },
      {
        id: 11,
        name: 'Stella Artois 275ml',
        price: 3.49,
        url_image: 'http://localhost:3001/images/stella_artois_275ml.jpg',
      },
      {
        id: 12,
        name: 'Antartica Original 600ml',
        price: 7.79,
        url_image: 'http://localhost:3001/images/antartica_original_600ml.png',
      },
      {
        id: 13,
        name: 'Bohemia 350ml',
        price: 3.00,
        url_image: 'http://localhost:3001/images/bohemia_350ml.png',
      },
      {
        id: 14,
        name: 'Budweiser 330ml',
        price: 4.04,
        url_image: 'http://localhost:3001/images/budweiser_330ml.png',
      },
      {
        id: 15,
        name: 'Caninha da Roça',
        price: 3.79,
        url_image: 'http://localhost:3001/images/caninha_da_roca_S2_500ml.png',
      },
      {
        id: 16,
        name: 'Catuaba Selvagem 1L',
        price: 4.00,
        url_image: 'http://localhost:3001/images/catuaba_selvagem_1l.png',
      },
      {
        id: 17,
        name: 'Colorado 600ml',
        price: 12.00,
        url_image: 'http://localhost:3001/images/colorado_600ml.png',
      },
      {
        id: 18,
        name: 'Corona 330ml',
        price: 6.00,
        url_image: 'http://localhost:3001/images/corona_330ml.png',
      },
      {
        id: 19,
        name: 'Corote 500ml',
        price: 3.00,
        url_image: 'http://localhost:3001/images/corotinho_500ml.png',
      },
      {
        id: 20,
        name: 'Eisenbahn 350ml',
        price: 3.79,
        url_image: 'http://localhost:3001/images/eisenbahn_350ml.png',
      },
      {
        id: 21,
        name: 'Glacial 350ml',
        price: 0.01,
        url_image: 'http://localhost:3001/images/melhor_cerveja_do_mundo_350ml.png',
      },
      {
        id: 22,
        name: 'Patagonia 740ml',
        price: 13.00,
        url_image: 'http://localhost:3001/images/patagonia_740ml.png',
      },
      {
        id: 23,
        name: 'Pitú 350ml',
        price: 7.86,
        url_image: 'http://localhost:3001/images/pitu_350ml.png',
      },
      {
        id: 24,
        name: 'Sol 330ml',
        price: 4.29,
        url_image: 'http://localhost:3001/images/solzinha_maravilhosa_330ml.png',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};
