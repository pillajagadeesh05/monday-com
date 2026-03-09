import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '', trim: true },
    assignee: { type: String, default: 'Unassigned', trim: true },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Critical'],
      default: 'Medium'
    },
    status: {
      type: String,
      enum: ['Backlog', 'Working on it', 'Review', 'Done'],
      default: 'Backlog'
    },
    dueDate: { type: Date }
  },
  { timestamps: true }
);

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    owner: { type: String, required: true, trim: true },
    description: { type: String, default: '', trim: true },
    color: { type: String, default: '#0073ea' },
    tasks: [taskSchema]
  },
  { timestamps: true }
);

export const Project = mongoose.model('Project', projectSchema);
