/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx52f4e540510a18db',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '791ac21747b30feb3767fb895f0cd48a',

  PROVINCE: '山东',
  CITY: '淄博',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqZTcw5GJBIb5HdOT8EPj_PRoPmM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '1-DAktaWlrQtQq9FFDa1X0eKofTXCPJ23_OtZrqp17k',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2000', date: '02-10',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2000', date: '03-15',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '08-18',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-05-13' },
        { keyword: 'know_day', date: '2022-08-18' },
      ],
    },
    // {
    //   // 想要发送的人的名字
    //   name: '宝贝',
    //   // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
    //   id: 'oqZTcw_lslwzyOBm-Cg81UrVPqYI',
    //   // 使用微信测试号：你想对他发送的模板消息的模板ID
    //   useTemplateId: 'vm9bVXUXGufQPHrcZAawodK7-Oe4aY9SsOKgezbp2LQ',
    //   // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
    //   horoscopeDate: '03-15',
    //   festivals: [
    //     // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    //     {
    //       type: '*生日', name: '宝贝', year: '2000', date: '02-10',
    //     },
    //     // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    //     {
    //       type: '生日', name: '宝贝', year: '2000', date: '03-15',
    //     },
    //     {
    //       type: '节日', name: '相识纪念日', year: '2022', date: '08-18',
    //     },
    //   ],
    //   // 我们在一起已经有xxxx天了的配置
    //   customizedDateList: [
    //     // 在一起的日子
    //     { keyword: 'love_day', date: '2023-05-13' },
    //   ],
    // },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'WL3TCvbuRZaECYCJVQ9TchkHZ0vT2USiI-gE9IMwJb4',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqZTcw5GJBIb5HdOT8EPj_PRoPmM',
    }
  ],

}

module.exports = USER_CONFIG

