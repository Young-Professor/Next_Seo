export const getProducts=async ()=>{
    const response= await fetch('https://campus-closet-server.vercel.app/items/products',{
    // const response= await fetch('https://base-backend-omega.vercel.app/api/products',{
        method: "GET",
        headers:{
            "content-type":"application/json"
        }
    })
    return response.json();
   }
export const getProductById=async (id)=>{
    const response= await fetch('https://campus-closet-server.vercel.app/items/products/'+id,{
        method: "GET",
        headers:{
            "content-type":"application/json"
        }
    })
    return response.json();
   }