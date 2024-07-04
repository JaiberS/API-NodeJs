const Task = require('../src/models/task');

test('should create a task', async () => {
  const task = await Task.create({ title: 'Test Task', description: 'Description for test task' });
  expect(task.title).toBe('Test Task');
});

test('should find a task by ID', async () => {
  const task = await Task.findByPk(1);
  expect(task).toBeDefined();
});
