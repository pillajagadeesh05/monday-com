import { useState } from 'react';

const initialTask = {
  title: '',
  assignee: '',
  priority: 'Medium',
  status: 'Backlog'
};

export const TaskForm = ({ onCreate }) => {
  const [formData, setFormData] = useState(initialTask);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onCreate(formData);
    setFormData(initialTask);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        required
        placeholder="Task title"
        value={formData.title}
        onChange={(event) => setFormData((prev) => ({ ...prev, title: event.target.value }))}
      />
      <input
        placeholder="Assignee"
        value={formData.assignee}
        onChange={(event) => setFormData((prev) => ({ ...prev, assignee: event.target.value }))}
      />
      <select
        value={formData.priority}
        onChange={(event) => setFormData((prev) => ({ ...prev, priority: event.target.value }))}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};
