class Auth {
    constructor(){
        this.authentication = false;
    }
    logIn(callback){
        this.authentication = true;
        callback()
    }
    logOut(callback){
        this.authentication = false
        callback()
    }
    isAuthenticated(){
        
        return this.authentication 
      
    }
 
}
let authentication = new Auth()
export default authentication ;