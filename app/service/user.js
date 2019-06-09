const Service = require('egg').Service;

class UserService extends Service {
    async find(uid){
        const user = await this.ctx.db.query('select * from user where uid = ?',uid);
        console.log(this.ctx.db)

        const picture = await this.getPicture(uid);
        return {
            name: user.user_name,
            age:user.age,
            picture
        };
    }

    async getPicture(uid){
        const result = await this.ctx.curl(`http://photoserver/uid=${uid}`,{dataType: 'json'})
        return result.data
    }
}

module.exports = UserService;
