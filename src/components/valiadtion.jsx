const checkValidation=(email,password)=>{
    
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
    {
        
        return 'Invalid Email address'
    }
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/))
    {
        return 'Invalid password'
    }
    return null
}
export default checkValidation