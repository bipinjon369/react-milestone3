export default function Task ({ taskName, taskStatus, onDelete, onUpdate, updateTaskStatus }: { taskName: string; taskStatus: boolean, onDelete: () => void, onUpdate: () => void, updateTask: () => void, updateTaskStatus: () => void  }) {
    return (
        <div className="bg-task-bg-color rounded-[8.61px]">
            <div className="flex justify-between px-[17.22px] py-[19.37px]">
                <div className="flex items-center gap-[9px]">
                    <button onClick={updateTaskStatus}>
                        <img src={!taskStatus ? "check-circle.png" : "check-circle-checked.png"}/>
                    </button>
                    <p className={!taskStatus ? 'text-task-text font-raleway' : 'text-task-text font-raleway text-completed-task-color line-through'}>{taskName}</p>
                </div>
                {!taskStatus && <div className="flex items-center gap-[17.2px]">
                    <button onClick={onUpdate}>
                        <img src="edit.png"/>
                    </button>
                    <button onClick={onDelete}>
                        <img src="delete.png"/>
                    </button>
                </div>}
            </div>
        </div>
    )

}