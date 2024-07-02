const Header = () => {
    return (
        <div className="flex flex-row flex-between">
            <div>
                <div>Sidebar icon</div>
                <div>Youtube icon</div>
            </div>
            <div>
                <input type="text" placeholder="search" />
                <button>Search</button>
                <button>Voice Search</button>
            </div>
            <div>
                <div>create icon</div>
                <div>Notification icon</div>
                <div>User pfp</div>
            </div>

        </div>
    )
}

export default Header;