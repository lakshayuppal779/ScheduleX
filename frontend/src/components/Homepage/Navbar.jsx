import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"
import { logoutAPI } from "../../utils/constants"
export const Navbar = ()=>{
    const navigate = useNavigate()
    const handler = async ()=>{
        try {
            const accessToken = Cookies.get('accessToken');
            const response = await fetch(logoutAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${accessToken}`
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                Cookies.remove('refreshToken')
                Cookies.remove('accessToken')
                navigate('../login')
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    }
    return(
        <div className="h-1/6 flex justify-between items-center bg-gradient-to-r from-blue-700 to-blue-900 px-4">
            <Link to="../home">
            <div className="flex items-center">
                {/* {<img src="ScheduleX logo" alt="ScheduleX" className="w-15 h-15s rounded-lg" />} */}
                <h1 className="text-white text-3xl ml-2 font-bold">ScheduleX</h1>
            </div>
            </Link>
            <div className="flex items-center space-x-10 text-lg">
                <Link to="../data">
                    <div className="cursor-pointer text-white hover:underline transition duration-300">
                        Add Data
                    </div>
                </Link>
                <a href="https://www.piet.co.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition duration-300">
                    About the College
                </a>
                <Link to="./Schedule">
                <div className="text-white hover:underline transition duration-300">
                    Schedules
                </div>
                </Link>
                <button className="px-4 py-2 bg-green-400 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out focus:outline-none" onClick={handler}>
                    Logout
                </button>
            </div>
        </div>
    )
}