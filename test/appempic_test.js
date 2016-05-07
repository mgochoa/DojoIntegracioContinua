'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('El nombre debe ser Manuel', function () {
    appempic.getName().should.equal('Manuel');
  });
  it('El apellido debe ser Ochoa', function () {
    appempic.getLastName().should.equal('Ochoa');
  });


});
