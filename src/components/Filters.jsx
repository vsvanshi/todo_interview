export const Filters = ({filter, setFilter}) => {
    const buttons = ["All", "Active", "Completed"]
    return (
        <div className="flex justify-center gap-2 mb-4">
            {
                buttons.map((btn) => (
                    <button 
                    key={btn}
                        className={`px-4 py-2 rounded border ${filter === btn ? 'bg-blue-600 text-white' : ''}`}
                        onClick={() => setFilter(btn)}>
                        {btn}
                    </button>
                ))
            }
        </div>
    );
}
