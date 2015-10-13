var proxyquire =  require('proxyquire')
    , assert     =  require('assert')
    , pathStub   =  { }
    , myModuleStub = { };

// when no overrides are specified, path.extname behaves normally
var foo = proxyquire('../src/foo', { 'path': pathStub, './myFsModule': myModuleStub });
//assert.equal(foo.extnameAllCaps('file.txt'), '.TXT');// override path.extname
pathStub.extname = function (file) { return 'Exterminate, exterminate the .TXT';};
myModuleStub.bar = function (count) {return count + ' baz'};


describe('the foo module', function() {
    "use strict";

    it('has a extnameAllCaps method', function() {
       expect(foo.extnameAllCaps).toBeDefined();
    });

    describe('the extnameAllCaps method', function() {
        it('capitalizes the result from path.extname', function() {
            var result = foo.extnameAllCaps('whatever');
            expect(result).toEqual('EXTERMINATE, EXTERMINATE THE .TXT');
        });
    });

    describe('the basenameAllCaps method', function() {
        it('returns the default basename value, capitalized', function() {
            expect(foo.basenameAllCaps('/a/b/file.txt')).toEqual('FILE.TXT');
        });
    });

    describe('the countBars method', function() {
        it('defaults to the number passed as arg', function() {
            expect(foo.countBars(29)).toEqual('29 baz');    // overrides true implementation '29 bars'
        });
    });
});

// path.basename and all other path module methods still function as before
assert.equal(foo.basenameAllCaps('/a/b/file.txt'), 'FILE.TXT');