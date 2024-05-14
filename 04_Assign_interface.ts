interface ITask{
    title : string;
    description? : string;
    completed? : boolean;
}

let objTask : ITask = {
    title: "",
    description: "",
    completed: false
}

let objTask1 : ITask =  {
    title : "Finish Project Report",
}

let objTask2 : ITask = {
    title : "Buy Groceries",
    description : "Milk,bread,eggs"
}

let objTask3 : ITask = {
    title : "Clean Room",
    completed : true,
}

function displayTask(task : ITask) : void{
console.log(`Title : ${task.title}, Description : ${task.description ?? 'none'}, 
Completed : ${task.completed ? 'yes' : 'no'}`);
}

displayTask(objTask1);
displayTask(objTask2);
displayTask(objTask3);



