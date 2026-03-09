// Run with: mongosh mongodb://127.0.0.1:27017/monday_clone scripts/mongodb-init.js

db = db.getSiblingDB('monday_clone');

db.projects.deleteMany({});

db.projects.insertMany([
  {
    name: 'Marketing Campaign',
    owner: 'Growth Team',
    description: 'Launch Q3 multi-channel campaign.',
    color: '#ffcb00',
    tasks: [
      {
        title: 'Prepare messaging brief',
        description: 'Coordinate with design and product marketing.',
        assignee: 'Alicia',
        priority: 'High',
        status: 'Working on it',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  }
]);

print('MongoDB initialization complete.');
