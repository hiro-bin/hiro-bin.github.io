const fs = require('fs');
const main_view = fs.readFileSync('./index.html', 'utf-8');
const calculator_view = fs.readFileSync('./calculator.html', 'utf-8');
const lotto_view = fs.readFileSync('./lotto.html', 'utf-8');
const todolist_view = fs.readFileSync('./todolist.html', 'utf-8');
const css_view = fs.readFileSync('./style.css', 'utf-8');

function main(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(main_view);
    response.end();
}

function calculator(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(calculator_view);
    response.end();
}

function lotto(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(lotto_view);
    response.end();
}

function todolist(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(todolist_view);
    response.end();
}

function css(response) {
    response.writeHead(200, {'Content-Type': 'text/css'});
    response.write(css_view);
    response.end();
}

let handle = {};
handle['/'] = main;
handle['/calculator'] = calculator;
handle['/lotto'] = lotto;
handle['/todolist'] = todolist;
handle['/style.css'] = css;

exports.handle = handle;