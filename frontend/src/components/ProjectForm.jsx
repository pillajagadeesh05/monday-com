import { useState } from 'react';

const initialState = {
  name: '',
  owner: '',
  description: '',
  color: '#0073ea'
};

export const ProjectForm = ({ onCreate }) => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onCreate(formData);
    setFormData(initialState);
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Create Project</h2>
      <input
        required
        placeholder="Project name"
        value={formData.name}
        onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
      />
      <input
        required
        placeholder="Owner"
        value={formData.owner}
        onChange={(event) => setFormData((prev) => ({ ...prev, owner: event.target.value }))}
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
      />
      <label>
        Accent color
        <input
          type="color"
          value={formData.color}
          onChange={(event) => setFormData((prev) => ({ ...prev, color: event.target.value }))}
        />
      </label>
      <button type="submit">Add Project</button>
    </form>
  );
};
