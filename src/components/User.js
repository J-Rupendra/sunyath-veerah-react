const User =({name, location}) =>{
    return(
        <div className="user-card">
            <h3>name: {name}</h3>
            <h3>name: {location}</h3>
            <h3>From Functional component</h3>
        </div>
    )
}

export default User