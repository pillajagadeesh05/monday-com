import { useEffect, useState } from 'react';
import { api } from './api/client';
import { ProjectBoard } from './components/ProjectBoard';
import { ProjectForm } from './components/ProjectForm';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  const loadProjects = async () => {
    try {
      setError('');
      const data = await api.getProjects();
      setProjects(data);
    } catch (loadError) {
      setError(loadError.message);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleCreateProject = async (payload) => {
    await api.createProject(payload);
    await loadProjects();
  };

  const handleAddTask = async (projectId, payload) => {
    await api.createTask(projectId, payload);
    await loadProjects();
  };

  const handleMoveTask = async (projectId, taskId, payload) => {
    await api.updateTask(projectId, taskId, payload);
    await loadProjects();
  };

  return (
    <main className="layout">
      <header>
        <h1>FlowBoard</h1>
        <p>A monday.com-inspired light project management workspace.</p>
      </header>

      <ProjectForm onCreate={handleCreateProject} />

      {error && <p className="error">{error}</p>}

      <section className="board-grid">
        {projects.map((project) => (
          <ProjectBoard
            key={project._id}
            project={project}
            onAddTask={handleAddTask}
            onMoveTask={handleMoveTask}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
