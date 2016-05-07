'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('El nombre debe ser Pedro', function () {
    appempic.getName().should.equal('Pedro');
  });
  it('El apellido debe ser Perez', function () {
    appempic.getLastName().should.equal('Perez');
  });


});
