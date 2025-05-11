import { useEffect, useState } from "react";

export const TaskForm = ({onSubmit, editTask}) => {
    const [title, setTitle] = useState('');

    // for edit 
    useEffect(() => {
        if(editTask) {
            setTitle(editTask.title);
        }
    }, [editTask]);

    // on submiting
    const handelSubmit = (event) => {
        event.preventDefault();
        onSubmit({title});
        setTitle('');
    }
    return (
        <form className="mb-4" onSubmit={handelSubmit}>
            <div className="border p-4 rounded-xl border-gray-400">
                <label className="font-bold text-2xl block mb-2">Add Task</label>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Enter a new task"
                        className="flex-1 border px-4 py-2 rounded-lg"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <button className="bg-blue-500 px-4 py-2 rounded text-white font-semibold hover:cursor-pointer">
                        {
                            editTask ? 'Edit' : 'Add'
                        }
                    </button>
                </div>
            </div>
        </form>
    );
}
