# Feature: register function Test
# 注册功能测试
# 负责人：Ronnie
# 时间：2017-10-22



# Scenario: 两次密码输入不一致
# 如果注册的时候，两次输入的密码不一致，那么会有，密码不一致的提示
#     Given 导航到注册界面
#     When 在用户注册信息中填入注册信息
#     Then 点击注册按钮，注册失败，得到错误提示
# @email
# Scenario Outline:不同注册场景
#     Given 导航到注册界面
#     When 用户名输入'<username>',密码输入'<pass>',重复密码输入'<repass>',邮箱'<email>'
#     Then 点击提交,应该收到'<tipmessage>'
#     Examples:
#     |username|pass|repass|email|tipmessage|
#     |        |123|123|123@123.com|信息不完整|
#     |imhello|1234|4321|123@123.com|两次信息不一致。|




