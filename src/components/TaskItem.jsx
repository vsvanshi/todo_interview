export const TaskItem = ({ task, onDelete, onToggle, onEdit }) => {
    return (
        <div className="flex items-center justify-between border p-2">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => onToggle(task.id)}
                />
                <div>
                    <p className={`${task.isCompleted ? 'line-through text-gray-500' : ''}`}>{task.title}</p>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="text-blue-600 font-semibold hover:cursor-pointer" onClick={() => onEdit(task)}>Edit</button>
                <button className="text-blue-600 font-semibold hover:cursor-pointer" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
}
