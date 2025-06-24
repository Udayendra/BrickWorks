

export const apiUrl = "https://brickworks-api.onrender.com/api/";
export const imageUrl = "https://brickworks-api.onrender.com/uploads/services/";
export const serviceImageUrl = "https://brickworks-api.onrender.com/uploads/services/";
export const projectImageUrl = "https://brickworks-api.onrender.com/uploads/projects/";
// export const apiUrl = "http://localhost:9010/api/";
// export const imageUrl = "http://localhost:9010/uploads/services/";
// export const serviceImageUrl = "http://localhost:9010/uploads/services/";
// export const projectImageUrl = "http://localhost:9010/uploads/projects/";
// export const apiUrl = "https://brickworksbackend.infinityfreeapp.com/api/";
// export const imageUrl = "https://brickworksbackend.infinityfreeapp.com/uploads/services/";
// export const serviceImageUrl = "https://brickworksbackend.infinityfreeapp.com/uploads/services/";
// export const projectImageUrl = "https://brickworksbackend.infinityfreeapp.com/uploads/projects/";


export const token = () =>{
    const data = JSON.parse(localStorage.getItem("userInfo"));
    return data.token;
}