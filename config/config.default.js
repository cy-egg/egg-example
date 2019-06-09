exports.keys = 'GRTjfG'
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
}
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0'
}
exports.middleware = [
    'robot'
]

exports.robot = {
    ua: [
        /Baiduspider/i,
        /curl/i
    ]
}

exports.mysql = {
    client: {
        host: 'mysql.com',
        port: '3306',
        user: 'test_user',
        pasword: 'test_password',
        database: 'test'
    },
    app: true,
    agent: false
}
