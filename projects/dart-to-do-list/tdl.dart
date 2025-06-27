import "dart:io";

// an extension method to print all tasks in a given task list.
extension on List<Task> {
  void printTasks() {
    for (Task t in this) {
      print(t.getDetails());
    }
  }
}

void main() {
  List<Task> tasks = [];

  print("Welcome to dart CLI To-do List");
  while (true) {
    sleep(Duration(seconds: 1));
    print(
      "Choose an operation from the following:\n1. Add Task \n2. View Tasks \n3. Mark Task as Completed \n4. Delete Task\n5. Exit",
    );

    String? strOption = stdin.readLineSync();
    int option = int.parse(strOption ?? "2");

    switch (option) {
      // create a new task
      case 1:
        print("Enter a task description: ");
        tasks.add(Task(stdin.readLineSync() ?? ""));
        print("task added successfully at id = $starter");
        break;

      // list the available tasks
      case 2:
        print("Here is a list of the available tasks:");
        tasks.printTasks();
        break;

      // mark a task as complete
      case 3:
        print("Enter task id to mark it as complete:");
        int taskId = int.parse(stdin.readLineSync() ?? "0");
        if (tasks.length - 1 >= taskId) {
          tasks[taskId].markComplete();
          print("task at id = $taskId is marked as complete");
        } else {
          print("task does not exist please enter a correct id");
        }
        break;

      // delete a task
      case 4:
        print("Enter task id for deletion:");
        int taskId = int.parse(stdin.readLineSync() ?? "0");
        if (tasks.length - 1 >= taskId) {
          tasks.removeAt(taskId);
          print("task at id = $taskId has been deleted");
        } else {
          print("task does not exist please enter a correct id");
        }
        break;
      // exit the CLI
      case 5:
        print("Thank you for using dart CLI To-do List");
        exit(0);
    }
  }
}

int starter = 0;

class Task {
  int? id = starter;
  String? description;
  bool? isComplete;

  // constructor with a default description
  Task([String description = "no discription added"]) {
    starter++;
    this.description = description;
    isComplete = false;
  }

  // getDetails method for retriving the task details
  String getDetails() {
    String mark = (isComplete ?? false) ? '✅' : '⭕';
    return "$mark task $id: $description";
  }

  // mark the task as complete
  void markComplete() {
    this.isComplete = true;
  }
}
