const bride = {
    firstName : 'Kalyani',
    lastName : 'Singh'
}
const groom = {
    firstName : 'Rahul',
    lastName : 'Singh'
}

function User() {
    
    return (
        <div>
            <h1>Hello This is my House Awantika</h1>
            <h2>{groom['firstName']} {groom['lastName']}<br/>Weds<br/>{bride['firstName']} {bride['lastName']}</h2>    
        </div>
    )
}
export default User;