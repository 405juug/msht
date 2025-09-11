const API_URL = "http://92.255.79.122:9999/api/v1/auth"

async function register(login, email, password){
   try{
     const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        body: JSON.stringify({
            login,
            email,
            password
        })
    })
    const data = await res.json()
    if (!res.ok) throw data
    
    return data
   }
   catch(e){
    console.log("error");
    
    throw e
   }
}

async function login(login, password){
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
            login,
            password
        })
    })
    return await res.json()
}
async function getCommentById(id){
    const res = await fetch(`${API_URL}/comment/${id}`, {
        method: "POST",
        
    })
    return await res.json()
}
export { register, login }