import axios from "axios";

const firstData = async (id) => {
    if (!id || typeof id !== "number"){
        return {
            success: false,
            message: "please provide a number type input",
        };
    }

        const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        const {data: posts} = await axios (`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        return {...user, posts}
    };

export default firstData;