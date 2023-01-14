const functions = {
    generateTables: async (db) => {
        await db.schema.hasTable('test').then(async (e) => {
            if(!e){
                console.log('no')
            }
            else{
                console.log('yes')
            }
        })
    }
}

module.exports = functions