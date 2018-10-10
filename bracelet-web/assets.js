const IMAGES = [
    'bootstrap-cookie-alert/cubes.png'
];
const CSS = [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-cookie-alert/cookiealert.css'
];
const JS = [
    'jquery/dist/jquery.js',
    'lodash/lodash.js',
    'bootstrap/dist/js/bootstrap.js',
    'bootstrap-cookie-alert/cookiealert-standalone.js'
];

module.exports = [...JS, ...CSS, ...IMAGES];