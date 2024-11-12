import conf from "@/conf/config";
import {Client, Account, ID} from 'appwrite'
type CreateUserAccount = {
    name: string,
    email: string,
    username: string,
    password: string,
}
type LoginUserAccount = {
    email: string,
    password: string,
}

const appwriteClient = new Client()

appwriteClient.setEndpoint(conf.appwriteURL).setProject(conf.appwriteProjectId);

const account = new Account(appwriteClient)

export class AppwriteService{
    async createUserAccount({name, email, username, password}: CreateUserAccount){
       try{
        const userAccount = await account.create(ID.unique(), name, email, username, password)
        if(userAccount){
            return this.login({email, password})
        }
        else{
            return userAccount
        }
       } catch(error){
        throw error
       }
    }

    async login({email, password}: LoginUserAccount){
        try{
            return await account.createSession(email,password)
        } catch (error:any){
            throw error
        }
    }

    async isLoggedIN(): Promise<boolean>{
        try{
            const data =  await this.getCurrentUser();
            return Boolean(data)
        } catch (error){}
            return false 
    }


    async getCurrentUser(){
        try{
            return account.get()
        } catch (error){
            console.log("getCurrentUser error: "+ error)
        }
    }
    
    
    async logout(){
        try{
            return await account.deleteSession("current")
        } catch (error){
            console.log("logout error:" + error)
        }
    }
}

const appwriteService = new AppwriteService()

export default appwriteService