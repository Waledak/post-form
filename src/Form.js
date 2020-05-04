import React, { useState } from 'react';
import axios from 'axios';
export const Form = () =>{
  const [title, setTitle] = useState("");
  const [poster, setPoster]=useState("");
  const [comment, setComment]=useState("");
  
  function sendForm(event){
    event.preventDefault();
    const data = {
      title,
      poster,
      comment
    };
    console.log(data)
    axios.post("https://post-a-form.herokuapp.com/api/movies/",data)
    .then(res => res.data)
    .then(res => {
      alert(`Film Envoyé`);
    })
    .catch(e => {
      console.error(e);
      alert(`Erreur lors de l'ajout du film : ${e.message}`);
    });
  }
  return(
    <form onSubmit={sendForm} style={{display: "flex",flexDirection: "column", width: "30vh",margin: "auto"}}>
      <h1>Formulaire:</h1>
      <input 
        name="title"
        placeholder="title" 
        value={title} 
        onChange={(event) => setTitle(event.target.value)} 
        type="text"
        required
      />
      <input 
        name="poster" 
        placeholder="url cover movie" 
        value={poster} 
        onChange={(event) => setPoster(event.target.value)} 
        type="text"
        required
      />
      <textarea 
        name="comment" 
        placeholder="comment..." 
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
        id="comment" 
        cols="15" 
        rows="5"
        required>
      </textarea>
      <button>Send</button>
    </form>
  );
}