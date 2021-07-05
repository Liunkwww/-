// ==UserScript==
// @name         安徽创业云平台自动点击
// @namespace    https://www.ahcy.gov.cn/*
// @version      0.1
// @description  初期版本
// @author       诗雨
// @match        https://www.ahcy.gov.cn/*
// @grant        none
// ==/UserScript==

var autoClick=setInterval(
    function(){
        document.querySelector(".jbox-button.jbox-button-focus").click();
        //按键的css代号
    },60*100*10);
//中间为执行的时间间隔