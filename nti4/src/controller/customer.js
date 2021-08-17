const fs = require('fs')

class Task {
    balance=0
    myData = null
    readData(){
        try{
            this.myData = JSON.parse(fs.readFileSync('src/model/data.json').toString())
            if(!Array.isArray(this.myData)) throw new Error('')
        }
        catch(e){
            this.myData=[]
        }
    }

    writeData(){
        fs.writeFileSync('src/model/data.json', JSON.stringify(this.myData))
    }

    addData(name ,balance){ 
        let info = { 
            _id: new Date().getTime(),
            name , balance
        }
        this.readData()
        this.myData.push(info)
        this.writeData()    
    }

    Deposit (userId,x){  
        this.readData()
        let customer = this.myData.findIndex(user =>  user._id == userId)
        if(customer==-1) { console.log('not found');}
        else{
            this.readData()
            this.myData[customer].balance = parseInt( this.myData[customer].balance)
        
           this.myData[customer].balance +=  parseInt(x)
           this.writeData()
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
    searchUser(userId){
      this.readData()
        let index = this.myData.findIndex(user=> user._id == userId)
        console.log(this.myData[index])
        return this.myData[index]
    }

    editUser(userId, newData){
       this.readData()
        let index =this.myData.findIndex(user=> user._id == userId)
        newData._id =this.myData[index]._id
        this.myData[index] = newData
        this.writeData()
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