import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUsers = useLoaderData()
    console.log(loadedUsers);
    const handleSubmit = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name,email}
        console.log(name,email);

        fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
        })
    }

    return (
        <div>
            <p>Update info of  {loadedUsers.name}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={loadedUsers?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUsers?.email} id="" />
                <br />
                <input type="submit" value="Update User" />

            </form>
        </div>
    );
};

export default Update;