
require('../../lib/core/_cache.js');

var assert = require('assert');

describe('core/_cache.js', function(){
  it('thinkCache is function', function(){
    assert.equal(think.isFunction(global.thinkCache), true)
  })
  it('get cache with no name', function(){
    var data = thinkCache('welefen');
    assert.deepEqual(data, {})
  })
  it('get cache with name', function(){
    var data = thinkCache('welefen', 'name');
    assert.deepEqual(data, undefined)
  })
  it('get cache with name', function(){
    thinkCache('welefen', 'name', 'suredy');
    var data = thinkCache('welefen', 'name');
    assert.deepEqual(data, 'suredy')
  })
  it('set cache data with object', function(){
    var data = {
      name: 'fasdfasdf'
    }
    thinkCache('welefen', data);
    var data = thinkCache('welefen', 'name');
    assert.deepEqual(data, 'fasdfasdf')
  })
  it('set cache data', function(){
    var data = {
      name: 'fasdfasdf'
    }
    thinkCache('welefen', 'name', data);
    var value = thinkCache('welefen', 'name');
    assert.deepEqual(value, data)
  })
  it('remove cache data', function(){
    var data = {
      name: 'fasdfasdf'
    }
    thinkCache('welefen', data);
    thinkCache('welefen', 'name', null);
    var value = thinkCache('welefen', 'name');
    assert.equal(value, undefined);
  })
})