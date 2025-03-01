//Hooks
import { useContext, useEffect, useState} from "react";

// Components
import { Link } from "react-router-dom";

// Utils
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { SideBarContext } from "../utils/SidebarContext";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setFilteredPopularVideo} from "../redux/popularVideoSlice";
import { addToSearch } from "../redux/searchSlice";


const Header = () => {
    // State
    const [searchInput, setSearchInput] = useState("");
    const [searchSuggestion, setSearchSuggestion] = useState([]);
    const [inputFocus, setInputFocus] = useState(false);

    // Context
    const {setSidebarState} = useContext(SideBarContext);

    // Redux
    const popularVideo = useSelector(store => store.popularVideoSlice.popularVideos); 
    const searchResultsRedux = useSelector(store => store.searchSlice.searchResults);
    const dispatch = useDispatch();

    const sidebarToggle = () => {
        setSidebarState(state => !state);
    }

    const localSearch = () => {
        const schInp = searchInput.toUpperCase();
        const filterResults = popularVideo.filter(i => {
            let title = i.snippet.title.toUpperCase();
            return(title.includes(schInp));
        })
        dispatch(setFilteredPopularVideo(filterResults));
    }

    const fetchSearchSuggestions = async() => {
        const _data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API+searchInput);
        const data = await _data.json();
        setSearchSuggestion(data[1]);
        const object = {
            [data[0]]: data[1],
        }
        dispatch(addToSearch(object));
    }

    useEffect(() => {
        if(searchInput.length === 0) {
            return;
        }

        if (searchResultsRedux[searchInput]) {
            setSearchSuggestion(searchResultsRedux[searchInput]);
        } else {
            const timer = setTimeout(() => {fetchSearchSuggestions()}, 200);
            return (() => {clearTimeout(timer)});
        }
    }, [searchInput])

    return (
        <div className="z-50 flex hover:cursor-pointer flex-row justify-between h-16 fixed w-full bg-white px-2 py-2 pl-3 items-center ">
            <div className="flex flex-row w-2/12 items-center h-full" >
                <img alt="Sidebar-icon" onClick={sidebarToggle} className="hover:cursor-pointer w-6 h-3/4 mx-2 " src="https://imgs.search.brave.com/jJtUaMpEKfzsgb9_JVG05f3X5hXfFyvi0yqwa4NFtQ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nL28vbWlz/Y2VsbGFuZW91cy9i/aWctZGF0YS1yZWd1/bGFyLW1vbm9jaHJv/bWUtaWNvbi9zaWRl/YmFyLTQucG5n"/>
                <Link className="h-full" to={"/"} onClick={(() => dispatch(setFilteredPopularVideo(popularVideo)))} >
                    <img alt="youtube-icon" className="hover:cursor-pointer w-14 ml-2 h-full " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX/////AAD/WVn/sbH/nJz/8fH/Kir/4uL/3t7/zs7/xsb/YGD/7e3/GBj/9fX/y8v/trb/19f/PT3/oaH/jIz/goL/fX3/c3P/bm7/paX/NDT/Dg7/SEj/+vr/wcH/vLz/VFT/IiL/aGj/k5P/UFD/LS3/X1//iYn/gID/Ojr/srL/nZ3/RUX/d3eHgOMVAAAEkklEQVR4nO2d22KiQAyGWdQFBRE84QnBc9ut7/96i9tuz4ZBAiPh/+560Zn8LTCTZCYxDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzSPyOq5l2UHQ7XYHg9469lut+ai9241Pk+k5nG23W8c5mmaSJKZ5dJz051l4nk5O492uPZq3Wn687g0G6W8HgW1ZbseLdKqJPNcKuuu4Nd9NQmf/PFwcNpv+8hcfy/5mc1gMn/dOONnNW/G6G1iuF5Ws2nPtgZ9qmiVDXjnKoofJLNXrD2zX4xbXsf3TcVG9qmssF8eTb3eY1LlxOLwfbR9ZDs+xW1Re1Nv2dQsh6W97hV7OONGtQIEkvllfJ9RtvCLhjW9k76DbcmUOvVsE+rrNzsU8v8C2bptz0pYuMPd/saXb3hvw8wgMdFt7E4G6QG+l29ibWKnvVk+6bb2Rk+xn9IKtqPBBt6E386Am0LpPT0KFpaWksH5L4Ttq6349P6QvrJQeUt1WFkLlMX3SbWQhWgoKJ7qNLITK13Sv28hCrLJjGu59x2Wy6GeHpga6bSxItrf/R7eJBcleEesSfbpGmCUwqvN6f2Gf9anxfus2sSC/s5zEGm+7X8jcfHd1W1iYbobCWLeBhcmK8Y90G1iYUYbCqW4DCzPNUHjUbWBhjhkKh7oNLMwwQ2Hdl8N0QaQFdlg9Cy1ra59OJvKGMEx/wTqeGvSSzxsMNo1oV727SacveqxzmZen4sw6pAK0h8ibVTP/jTmo2F2hg1G80WDzddSnSk8E0D7wmHWu/wqNzrjCz+qYVMi7aTPfB7ZnrCNT0Ns2XjvMj0P3nlnHvs6MVOiwzmV+HnxezYbJIRXynvL6otBwK0kuJ6RC3g/7V4XpjoL3IfkRMv8UPbLO9V2hYaxL38g9UtG2iHf6nxQa3mjDOsk3FpRC5ljijwrT17HcQAIZT+xsWOe6ojB9HctMcG0o94k58XRVoWGU6FeR6SeXd3NFKDS80vyqJaWQOYdPKUwnKysJRLnAlSosza+6I4WpP1rGRo5SaPNOla3QcEvwq6jTbcxn9hQUpn/VLe+kdKCGOfOkpJDfr6KyT7yBKFWFRjTfcE5LhaKYc2uqCtPXkfOcEpVf06Yw/QSYbNNSCplvkeRRmP55ubJC1KF95ksI+RSmfhXPRo4KmM5ZZngjp0KuADl1t0S3wtQChg3APSss/38o/z2U/y2Vvx7K39PI35fK9y3k+4fyfXz5cRrE2nJyh/FS+TFv+XkL+bkn+flD+Tlg+Xl8+WcxGnCeRv6ZKPnn2uSfTZR/vlT+GWH557zln9WXf99C/p0Z+fee5N9da8D9Q/l3SOXfA5Z/l1v+fXz5NRXk18WQX9tEfn0a+TWGGlAnSn6tL/n12uTX3GtA3UT5tS/l1y+VX4O2AXWEa7z5VqwFLb+eN/fptgpR7h0gvq5+A3oj1LR3QI7+Fg3oUVLHRTF3t6C6SczdK6gB/Z4a0LOrAX3XDPm984wG9D+8ILyH5Suy+5C+IbqX7GfE9gOmVYvq6QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBd/AeVenzu8wDl+AAAAAElFTkSuQmCC" />
                </Link>
            </div> 
            <div className="flex flex-row w-full h-full ml-2 justify-center items-center" >
                <div className="relative w-5/12 h-full" >
                    <input value={searchInput} onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} onChange={(e => setSearchInput(e.target.value))} type="text"  placeholder="Search" className="focus:border-blue-500 focus:outline-none border-2 pb-1 pl-6 items-center flex justify-center text-xl my-auto w-full h-full rounded-l-full border-gray-300" />
                    {searchInput.length > 0 && searchSuggestion.length > 0 && inputFocus &&(
                        <div className="absolute w-full top-full left-0 mt-2 z-50 bg-white rounded-lg shadow-2xl border-x border-gray-500" >
                            {searchSuggestion.map((it, i) => (
                                <div key={i} className="flex  items-center p-3 pl-5 w-full h-9 hover:bg-gray-200 hover:cursor-pointer" >
                                    <img className="w-4 mr-5 h-4" src="https://www.iconpacks.net/icons/2/free-icon-search-2903.png" alt="search-icon" />
                                    <p className="font-semibold" >{it}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button onClick={localSearch} className="p-2 rounded-r-full h-full hover:bg-gray-200 bg-gray-100 border-r-2 border-y-2 border-left-0 border-gray-300" >Search</button>
                <div className="w-11 h-12 ml-4 rounded-full bg-gray-100 flex items-center justify-center" >
                    <img className=" w-7 h-7 hover:cursor-pointer" src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" alt="voice search" />
                </div>
            </div>
            <div className="flex flex-row w-2/12 h-full items-center" >
                <img className="w-8 h-3/5 ml-10 hover:cursor-pointer" src="https://www.iconpacks.net/icons/2/free-icon-video-camera-2806.png" alt="create-icon" />
                <img className="w-8 h-3/5 mx-8 hover:cursor-pointer" src="https://www.iconpacks.net/icons/4/free-notification-bell-icon-13081.png" alt="notification-icon" />
                <img className="w-9 h-5/6 mr-1 hover:cursor-pointer"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="user-icon" />
            </div>

        </div>
    )
}

export default Header;