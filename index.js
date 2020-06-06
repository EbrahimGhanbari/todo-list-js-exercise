function newTask(title, description) {

  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markComplete: function() {
      this.complete = true;
    }

  };

  return task;
}

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


task1.logState();
task2.logState();
