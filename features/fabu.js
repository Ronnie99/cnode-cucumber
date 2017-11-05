require('chromedriver');
let { Builder } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
let { defineSupportCode } = require('cucumber');
// let By = { Builder }.By;
let assert = require('assert');
defineSupportCode(function ({Given, When, Then}) {
    Given('导航到发布话题界面', function () {
        driver.get('http://192.168.21.128:3000')

        return driver.findElement({css:'#create_topic_btn > span'}).click();
    })
    When('输入标题,输入话题', function () {
        driver.findElement({id:'title'}).sendKeys('我不会为了留你假装可怜兮兮');
        return driver.actions().mouseMove(driver.findElement({className:'CodeMirror-code'}).clcik()).sendKeys('他不姓黑，不怕黑，选了光').perform();
    })
    Then('点击提交，得到错误提示', function () {
        return driver.findElement({className:'span-primary submit_btn'}).click()
    })
})
