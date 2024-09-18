import React,{useEffect,useState} from "react";

function Fnewsapi(){
    const[data,setData] = useState([]);

    useEffect(() =>{
        fetch('https://newsapi.org')
        .then(response => response.json())
        .then(data =>setData(data.articles));
    });
    return(
        <>
        <h1>Function Newsapi</h1>
        <table border={3}>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Title</th>
                <th>Name</th>
                <th>Author</th>
                <th>Description</th>
                
                
            </tr>
            {data.map((value) => (
                <tr>
                    <td>{value.source.id}</td>
                    <td><img src={value.urlToImage} width={200} height={100}/></td>
                    <td>{value.title}</td>
                    <td>{value.source.name}</td>
                    <td>{value.author}</td>
                    <td>{value.description}</td>
                  
                </tr>
            ))}
        </table>
        </>
    );
}
export default Fnewsapi;
