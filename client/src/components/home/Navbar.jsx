import { navData } from "../constants/data"

const Navbar = () =>{
    return (
        <div className="overflow-auto gap-5 lg:gap-0 bg-white flex justify-between p-3 cursor-pointer mx-3 ">
            {
                navData.map(data =>{
                    return <div key = {data.id} className="flex flex-col justify-center items-center font-bold">
                        <img src= {data.url} alt="nav" />
                        <p>{data.text}</p>
                    </div>
                })
            }
            
        </div>
    )
}

export default Navbar