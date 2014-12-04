/**
 * Created by dupenghui on 2014/12/4.
 */
require.config({
    "baseUrl":"./",
    "paths":{
        "cssRoot":"../..",
        'jquery':'.././libs/jquery-1.7.1.min',
        'angular':'.././libs/angular/angular.min',
        'angularRoute':'.././libs/angular/angular-route.min',
        "angularSanitize":".././libs/angular/angular-sanitize.min",
        'controller':'script/controller',
        'directive':'script/directive',
        'css':'.././libs/require/css',
        'text':'.././libs/require/text',
        'angularUiRoute':'.././libs/angular/angular-ui-router.min',
        'css-builder': '.././libs/require/css-builder',
        'normalize': '.././libs/require/normalize'

    },
    "shim":{
        "angular":{
            "deps":["jquery"],
            "exports":"angular"
        },
        "angularSanitize":["angular"],
        'angularRoute': ['angular'],
        'angularUiRoute':["angular"]

    }

});