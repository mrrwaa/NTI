const yargs = require('yargs')
const functions = require('./myFunction')
yargs.command({
    command:"addCustomer",
    describe:"add new Customer",
    builder:{
        name:{demandOption:true, type:"string"},
        balance:{demandOption:true, type:"number"},
        status:{type:"boolen"}
    },
    handler:function(argv){ functions.addData(argv)}
})

yargs.command({
    command:"Deposit",
    describe:"Deposit",
    builder:{
    x:{ type:"number"},
       
    },
    handler:function(argv){ functions.Deposit(argv)}
})

yargs.command({
    command:"Withdrawal",
    describe:"Withdrawal",
    builder:{
        y:{ type:"number"},
       
    },
    handler:function(argv){ functions.Withdrawal(argv)}
})
yargs.command({
    command:"delete",
    describe:"delete customeer",
    builder:{
        id:{type:"number"}
    },
    handler:function(argv){ functions.delete(argv)}
})

yargs.argv