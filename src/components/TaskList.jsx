import { TaskItem } from "./TaskItem";

export const TaskList = ({tasks, onDelete, onToggle, onEdit}) => {
     if (tasks.length === 0) return <p className="text-center text-gray-500">No tasks to show.</p>;
    return (
        <div className="space-y-2">
            {
                tasks.map(myTask => (
                    <TaskItem 
                        key={myTask.id}
                        task={myTask}
                        onDelete={onDelete} 
                        onToggle={onToggle} 
                        onEdit={onEdit}
                    />
                ))
            }
        </div>
    );
}
