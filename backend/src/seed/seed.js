import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import { Project } from '../models/Project.js';

dotenv.config();

const seedData = [
  {
    name: 'Website Redesign',
    owner: 'Product Team',
    description: 'Refresh landing pages and improve onboarding conversion.',
    color: '#0073ea',
    tasks: [
      {
        title: 'Wireframe homepage',
        assignee: 'Nora',
        priority: 'High',
        status: 'Working on it'
      },
      {
        title: 'Implement hero A/B test',
        assignee: 'Leo',
        priority: 'Medium',
        status: 'Backlog'
      }
    ]
  },
  {
    name: 'Mobile App QA',
    owner: 'Engineering',
    description: 'Finalize QA for version 3.1 release.',
    color: '#00c875',
    tasks: [
      {
        title: 'Regression suite',
        assignee: 'Maya',
        priority: 'Critical',
        status: 'Review'
      }
    ]
  }
];

const run = async () => {
  await connectDB();
  await Project.deleteMany({});
  await Project.insertMany(seedData);
  console.log('Database seeded');
  process.exit(0);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
