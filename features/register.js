// require('chromedriver');
// let { Builder } = require('selenium-webdriver');

// let driver = new Builder().forBrowser('chrome').build();

// let { defineSupportCode } = require('cucumber');

// let assert = require('assert');


// defineSupportCode(function ({ Given, When, Then }) {

//     When('在用户注册信息中填入注册信息', function () {
//         driver.findElement({ id: "loginname" }).sendKeys("xiaoming");
//         driver.findElement({ id: "pass" }).sendKeys("1234567");
//         driver.findElement({ id: "re_pass" }).sendKeys("654321")
//         driver.findElement({ id: "email" }).sendKeys("xiamin@163.com");
//     });

//     Then('点击注册按钮，注册失败，得到错误提示', async function () {
//         driver.findElement({ css: ".span-primary" }).click();
//         let errtip = await driver.findElement({ css: "#content > div > div.inner > div > strong" }).getText();

//         return assert.deepEqual("两次密码输入不一致。", errtip);
//     });

//     Given('导航到注册界面', function () {
//         driver.get("http://118.31.19.120:3000/");
//         driver.findElement({ xpath: "/html/body/div[1]/div/div/ul/li[5]/a" }).click();
//     });
//     When('用户名输入{string},密码输入{string},重复密码输入{string},邮箱{string}', function (string, string2, string3, string4) {
//         // Write code here that turns the phrase above into concrete actions
//         console.log("username,", string, "password", string2, "repass", string3, "email", string4)

//         driver.findElement({ id: "loginname" }).sendKeys(string);
//         driver.findElement({ id: "pass" }).sendKeys(string2);
//         driver.findElement({ id: "re_pass" }).sendKeys(string3)
//         return driver.findElement({ id: "email" }).sendKeys(string4);
//     });
//     Then('点击提交,应该收到{string}',async function (string) {
//         await driver.findElement({ css: ".span-primary" }).click();
//         let errtip = await driver.findElement({ css: "#content > div > div.inner > div > strong" }).getText();
//         return assert.deepEqual(string, errtip);
//     });

// });









