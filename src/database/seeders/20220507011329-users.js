'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('users',
    [
      {
        name: 'Julio',
        email: 'julio@gmail.com',
        password: 'e10adc3949ba59abbe56e057f20f883e', // 123456 - senha descriptografada
        coins: 100,
        role: 'user'
      },
      {
        name: 'Joao',
        email: 'joao@gmail.com',
        password: 'fcea920f7412b5da7be0cf42b8c93759', // 1234567 - senha descriptografada
        coins: 0,
        role: 'admin'
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
