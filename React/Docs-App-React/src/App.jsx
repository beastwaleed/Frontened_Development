import React, { useState } from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';

const App = () => {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    complexity: '',
    status: ''
  });

  const handleDoubleClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, formData]);
    setFormData({ description: '', complexity: '', status: '' });
    setShowForm(false);
  };

  const toggleStatus = (index) =>{
    const updatedCards =  [...cards];
    updatedCards[index].status = ( updatedCards[index].status==="Pending"? "Completed" : "Pending");
    setCards(updatedCards)
  }

  return (
    <div onDoubleClick={handleDoubleClick}>
      <Background />
      <Foreground cards={cards} toggleStatus={toggleStatus}/>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-black p-6 rounded-lg shadow-lg space-y-4 w-80"
          >
            <h2 className="text-lg font-bold">Add New Todo</h2>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="text"
              name="complexity"
              placeholder="Complexity"
              value={formData.complexity}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
