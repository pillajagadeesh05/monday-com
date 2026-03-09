import { TaskForm } from './TaskForm';

const statuses = ['Backlog', 'Working on it', 'Review', 'Done'];

export const ProjectBoard = ({ project, onAddTask, onMoveTask }) => {
  return (
    <section className="card project-board">
      <div className="project-header">
        <span className="color-pill" style={{ backgroundColor: project.color }} />
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <small>Owner: {project.owner}</small>
        </div>
      </div>

      <TaskForm onCreate={(task) => onAddTask(project._id, task)} />

      <div className="task-columns">
        {statuses.map((status) => (
          <article key={status} className="task-column">
            <h3>{status}</h3>
            {project.tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div key={task._id} className="task-item">
                  <strong>{task.title}</strong>
                  <span>{task.assignee || 'Unassigned'}</span>
                  <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                  <select
                    value={task.status}
                    onChange={(event) =>
                      onMoveTask(project._id, task._id, {
                        status: event.target.value
                      })
                    }
                  >
                    {statuses.map((nextStatus) => (
                      <option key={nextStatus}>{nextStatus}</option>
                    ))}
                  </select>
                </div>
              ))}
          </article>
        ))}
      </div>
    </section>
  );
};
