import axios from './axios'

export default {
    register : async ({username,email,role,password})=>{return await axios.post('/api/auth/register',{
                    username, 
                    email,
                    role,
                    password
                })
    },
    login :async ({email,password})=>{
        return await axios.post('/api/auth/login',{
            email,
            password
        })
    }

}