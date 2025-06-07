export default function TaskHeader ({ onClick, isAddScreen }: { onClick: () => void, isAddScreen: boolean }) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    });

    return (
        <div className={!isAddScreen ? 'flex justify-between' : 'flex flex-col'}>
            {isAddScreen && 
                <div className={`ml-auto pb-2`}>
                    <button onClick={onClick}>
                        <img src="x-close.png"/>
                    </button>
                </div>
                }
            <div className="flex flex-col justify-between">
                <h1 className="text-task-header-text font-raleway pb-2">Today</h1>
                <p className="text-task-date-text text-task-date-text-color font-raleway">{formattedDate}</p>
            </div>
            {!isAddScreen && <button onClick={onClick} className="bg-nav-green rounded-[12px]">
                <div className="flex items-center px-[19.5px] py-[17px]">
                    <p className="text-white font-raleway text-button-text pr-[10px]">Add New Task</p>
                    <div>
                        <img src="plus.png"/>
                    </div>
                </div>
            </button>
            }
        </div>
    )

}