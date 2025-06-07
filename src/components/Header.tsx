export default function Header () {
    return (
        <>
            <div className='bg-nav-green sticky top-0'>
                <div className="flex py-[24px] pl-[71px] items-center">
                    <div className="pr-3">
                        <img src='logo.png' className="logo" alt="Vite logo" />
                    </div>
                    <h1 className="text-nav-header-text text-white">To-Do List</h1>
                </div>
            </div>
        </>
    )
}