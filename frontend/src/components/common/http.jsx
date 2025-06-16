

export const apiUrl = "http://localhost:9000/api/";
export const imageUrl = "http://localhost:9000/uploads/services/";
export const serviceImageUrl = "http://localhost:9000/uploads/services/";
export const projectImageUrl = "http://localhost:9000/uploads/projects/";
// export const apiUrl = "https://brickworksbackend.infinityfreeapp.com/api/";
// export const imageUrl = "https://brickworksbackend.infinityfreeapp.com/uploads/services/";
// export const serviceImageUrl = "https://brickworksbackend.infinityfreeapp.com/uploads/services/";
// export const projectImageUrl = "https://brickworksbackend.infinityfreeapp.com/uploads/projects/";


export const token = () =>{
    const data = JSON.parse(localStorage.getItem("userInfo"));
    return data.token;
}