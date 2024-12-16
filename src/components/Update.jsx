import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUsers = useLoaderData()
    const handleSubmit = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
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