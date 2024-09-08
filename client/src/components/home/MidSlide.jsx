import Slide from "./Slide"


const MidSlide = ( { products , title , timer }) =>{
    return (
        <div className="my-3 flex items-center gap-2 h-[320px]">
            <div className="w-[100%] lg:w-[80%]"> 
                <Slide products={products} title={title} timer ={timer} />
            </div> 
            <div>
                <img className = 'hidden lg:block cursor-pointer w-[300px] h-[320px]' src = "https://rukminim2.flixcart.com/fk-p-flap/1060/1620/image/68f558247fbdfa6d.jpg?q=60" />
            </div>
        </div>
    )
}

export default MidSlide