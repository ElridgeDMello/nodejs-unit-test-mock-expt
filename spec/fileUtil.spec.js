//'use strict';
//
//var proxyquire = require('proxyquire'),
//    pathStub = {},
//    fileUtil;
//
//fileUtil = proxyquire('../src/fileUtil', {'path': pathStub});
//pathStub.extname = function() {
//    return 'exterminate them.txt';
//};
//
//describe('the fileUtil module', function() {
//
//    //beforeEach(function() {
//    //    pathStub.extname = function() {
//    //        return 'exterminate them.txt';
//    //    };
//    //});
//
//    describe('the extnameAllCaps method', function() {
//
//        it('should convert the value of extname to all caps', function() {
//            expect(fileUtil.extnameAllCaps('whtever')).toEqual('EXTERMINATE THEM.TXT');
//        });
//    });
//
//});