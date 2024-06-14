import React, { useEffect, useState } from 'react';

const AddProduction = () => {
    // État contenant la liste des tâches
    const [prods, setProds] = useState([]);
    // État contenant la tâche saisie
    const [prod, setProd] = useState('');
    // Récupérer et afficher toutes les tâches => hook useEffect
    useEffect(() => {
        fetch('/api/productions')
            .then(response => response.json())
            .then(data => setProds(data));
    }, []);
    // Ajouter une tâche => POST
    const addProduction = (e) => {
        e.preventDefault();
        fetch('/api/productions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prod })
        })
            .then(response => response.json())
            .then(newProd => setProds([...prods, newProd]));
        setProd('');
    };
    // Modifier une tâche => PUT
    const updateProd = (id, updatedProd) => {
        fetch(`/api/productions/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProd),
        })
            .then(response => response.json())
            .then(updatedProd => {
                setProds(prods.map(todo => (todo._id === id ? updatedProd : todo)));
            });
    };
    // Supprimer une tâche => DELETE
    const deleteProd = (id) => {
        fetch(`/api/productions/${id}`, { method: 'DELETE' })
            .then(() => {
                setProds(prods.filter(prod => prod._id !== id));
            });
    };
    return (
        <div>
            <form onSubmit={addProduction}>
                <input
                    type="text"
                    value={prod}
                    onChange={e => setProd(e.target.value)}
                    placeholder="Nouvelle Prod" />
                <button>Add Prod</button>
            </form>
            <ul>
                {prods.map(prod => (
                    <li key={prod._id}>
                        <input
                            type="text"
                            value={prod.prod}
                            onChange={e => updateProd(prod._id, {
                                prod: e.target.value,
                                completed: prod.completed
                            })}
                        />
                        <input
                            type="checkbox"
                            checked={prod.completed}
                            onChange={e => updateProd(prod._id, {
                                prod: prod.prod,
                                completed: e.target.checked
                            })}
                        />
                        <button onClick={() => deleteProd(prod._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddProduction;