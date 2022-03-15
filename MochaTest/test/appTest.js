const assert = require('chai').assert;
const { addNumbers } = require('../app');
const app = require('../app');

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', function(){
    describe('sayHello()', function(){
        it('sayHello should return hello', function(){
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string', function(){
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', function(){
        it('addNumbers should be above 5', function(){
            assert.isAbove(addNumbersResult, 5);
        });
    
        it('addNumbers should return type number', function(){
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});