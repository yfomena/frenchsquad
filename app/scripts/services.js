'use strict';

angular.module('frenchsquadApp')
.constant("baseURL","http://localhost:8081/")
        .service('loginFactory', ['$resource','baseURL',function($resource,baseURL) {


        }])

        .service('corporateFactory',['$resource','baseURL',function($resource,baseURL) {


        }])

       .service('contactusFactory',['$resource','baseURL',function($resource,baseURL){

        }])
;
