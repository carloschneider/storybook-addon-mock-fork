"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = Request;

var _url2 = require("./url");

function Request(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof input === 'object') {
    this.method = options.method || input.method || 'GET';
    this.url = input.url;
    this.body = options.body || input.body || null;
  } else {
    this.method = options.method || 'GET';
    this.url = input;
    this.body = options.body || null;
  }

  var _url = (0, _url2.getBaseUrl)(this.url);

  if (_url.search) {
    this.searchParams = Object.fromEntries(new URLSearchParams(_url.search));
  }
}