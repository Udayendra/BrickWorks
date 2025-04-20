export const apiUrl = "http://localhost:8000/api/";
export const imageUrl = "http://localhost:8000/uploads/services/";
export const serviceImageUrl = "http://localhost:8000/uploads/services/";
export const projectImageUrl = "http://localhost:8000/uploads/projects/";
export const token = () =>{
    const data = JSON.parse(localStorage.getItem("userInfo"));
    return data.token;
}