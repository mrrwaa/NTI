const fs = require('fs')

class Task {
    balance=0
    myData = null
    readData(){
        try{
            this.myData = JSON.parse(fs.readFileSync('all.json').toString())
            if(!Array.isArray(this.myData)) throw new Error('')
        }
        catch(e){
            this.myData=[]
        }
    }

    writeData(){
        fs.writeFileSync('all.json', JSON.stringify(this.myData))
    }

    addData(data){ 
        let info = { 
            id: new Date().getTime(), 
            name:data.name,
            balance:data.balance,
            status: data.status
        }
       
        this.readData()
        this.myData.push(info)
        this.writeData()    
    }

    Deposit (argv){ 
        let  x = argv.x ; 
        this.readData()
        let customer = this.myData.findIndex(user =>  user.id== argv.id)
        if(customer==-1) { console.log('not found');}
        else{
            this.readData()
            this.myData.forEach(user =>{
                    if (x > 10000  ) {console.log('put less than 10000')}
                     else{
                        user.balance += x
                        this.writeData() 
                     }  
            })    
        }
    }
    Withdrawal(argv){
        let  y = argv.y ; 
        this.readData()
        let customer = this.myData.findIndex(user =>  user.id== argv.id)
        if(customer==-1) { console.log('not found');}
        else{
            this.readData()
            this.myData.forEach(user =>{
                
                    if (  y > 5000 ){
                        console.log('you can not get money ')
                    }
                    else {
                        user.balance -= y
                        this.writeData()  
                    }    
                }
            )    
        }
    }
    delete(argv){
        this.readData()
        let x = this.myData.findIndex(user => user.id== argv.id)
        if(x==-1) return console.log('not found');
        this.myData.splice(x,1)
        this.writeData()
    }
}

let mytask = new Task()
module.exports = mytask