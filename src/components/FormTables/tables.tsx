import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Replace with your server's URL
});
interface Suggestion {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  suggestion: string;
  // Add other fields if necessary
}

const Tables = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    // Fetch suggestions when the component mounts using the 'api' instance
    api.get('/Contacts').then((response) => {
      setSuggestions(response.data);
    });
  }, []);

  const fetchSuggestions = () => {
    api.get('/Contacts')
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  
  
  const deleteSuggestion = (id: number) => {
    // Send a request to the server to delete the suggestion
    api.delete(`/Contacts/${id}`);
  };

  return (
    <div className="container">
      <h2>Contacts Submission</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Suggestion</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.map((suggestion, index) => (
            <tr key={index}>
              <th scope="row">{suggestion.id}</th>
              <td>{suggestion.first_name}</td>
              <td>{suggestion.last_name}</td>
              <td>{suggestion.email}</td>
              <td>{suggestion.suggestion}</td>
              <td>
                <button className='btn btn-danger' onClick={() => deleteSuggestion(suggestion.id)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default Tables;
