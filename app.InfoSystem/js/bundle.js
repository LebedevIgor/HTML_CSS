(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _data = require('./json/data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTable = function createTable(data) {
	var rowsAmount = [];
	for (var i = 0; i < _data2.default[Object.keys(_data2.default)[0]].length; i++) {
		rowsAmount.push(i);
	}var table = '\n\t\t<table>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t' + Object.keys(_data2.default).map(function (th) {
		return '<td>' + th + '</td>';
	}).join('\n\t\t\t\t\t') + '\n\t\t\t\t</tr>\n\t\t\t\t' + rowsAmount.map(function (index) {
		return '<tr>\n\t\t\t\t\t\t\t' + Object.keys(_data2.default).map(function (td) {
			return '<td>' + _data2.default[td][index] + '</td>';
		}).join('\n\t\t\t\t\t\t\t') + '\n\t\t\t\t\t\t</tr>';
	}).join('\n\t\t\t\t') + '\n\t\t\t</tbody>\n\t\t</table>\n\t';
	return table;
};

var table = createTable(_data2.default);

document.querySelector('#table').innerHTML = table;

},{"./json/data.json":2}],2:[function(require,module,exports){
module.exports={"№":["1","2","3","4","5","6","7"],"время":["08:00 - 09:35","09:45 - 11:20","11:30 - 13:05","13:45 - 15:20","15:30 - 17:05","17:15 - 18:50","19:00 - 20:35"],"14.04.2022 Четверг Нечетная":["","","МДК.01.02 Прикладное программирование Булатов А.С. 212(13)","Администрирование и конфигурирование системы 1С: Предприятие Воронин Ф.А. 215(13)","","",""],"15.04.2022 Пятница Нечетная":["","","МДК.02.02 Технология разработки и защита баз данных Кравченко Н.В. 1 КЦ(15)","Администрирование и конфигурирование системы 1С: Предприятие (диф.зачет) Воронин Ф.А. 218(13)","МДК.02.01 Инфокоммуникационные системы и сети Завьялова И.О. 103(13)","Информационная безопасность и защита информации (диф.зачет) Петрова М.И. 215(13)",""],"16.04.2022 Суббота Нечетная":["","","","МДК.02.01 Инфокоммуникационные системы и сети Завьялова И.О. 218(13)","МДК.02.01 Инфокоммуникационные системы и сети Завьялова И.О. 218(13)","",""],"18.04.2022 Понедельник Четная":["Учебная практика Кравченко Н.В. 4 КЦ(15)","Учебная практика Кравченко Н.В. 4 КЦ(15)","Учебная практика Кравченко Н.В. 4 КЦ(15)","","","",""],"19.04.2022 Вторник Четная":["Учебная практика Кравченко Н.В. 4 КЦ(15)","Учебная практика Кравченко Н.В. 4 КЦ(15)","Учебная практика Кравченко Н.В. 4 КЦ(15)","","","",""],"20.04.2022 Среда Четная":["Учебная практика Кравченко Н.В. 4 КЦ(15)","Учебная практика Кравченко Н.В. 4 КЦ(15)","Учебная практика Кравченко Н.В. 4 КЦ(15)","","","",""],"21.04.2022 Четверг Четная":["Учебная практика Кравченко Н.В. 4 КЦ(15)","Учебная практика Кравченко Н.В. 4 КЦ(15)","Учебная практика Кравченко Н.В. 4 КЦ(15)","","","",""]}
},{}]},{},[1]);
