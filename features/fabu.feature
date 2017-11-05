Feature: fabu function Test
发布话题功能测试
负责人：Ronnie
时间：2017-10-29



Scenario: 不选择板块
    Given 导航到发布话题界面
    When 输入标题,输入话题
    Then 点击提交，得到错误提示
