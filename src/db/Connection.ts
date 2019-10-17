import mongoose from 'mongoose';

const uri: string = 'mongodb://achraf:achraf123@ds057806.mlab.com:57806/outmind';


// var myVar = setInterval(connect, 5000);

connect();
function connect(){
    try{
        mongoose.connect(uri, (err: any) =>{
            if(err){
                console.log(err + 'Retrying in 5 secondes')
                setTimeout(() => {
                    connect();
                }, 5000);
            }else{
                console.log('Connexion réussite')
            }
        }); 
    }catch(e){
        console.log(e + 'Retrying in 5 secondes')
        setTimeout(() => {
            connect();
        }, 5000);
    }
}

export default mongoose;