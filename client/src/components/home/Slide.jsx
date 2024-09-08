import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown'
import AlarmClockIcon from './clock';
import { Link } from 'react-router-dom';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const Slide = ( {products , title , timer = false } ) =>{

    const renderer = ({hours , minutes , seconds } ) =>{
        return <span> {hours} : {minutes} : {seconds} </span>
    }

    return (

        <div className=" my-3 flex flex-col bg-white pt-2 px-2 gap-2 ">
            
            <div className='flex justify-between items-center'>

                <div className='flex gap-2 '>
                    <h2 className='font-bold'>{title}</h2>
                 
                    {
                    timer && 
                    
                    <><Countdown date = {Date.now() + 5.04e+7 } renderer={renderer}/>
                    <AlarmClockIcon/></>

                    }
                </div>
                <div className="">
                    <button className = 'p-2 text-white  rounded-md m-auto bg-blue-400'>VIEW ALL</button>
                </div>
            </div>

            <hr className='border-1 border-black'/>
           
            <Carousel
                responsive = {responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl = {true}
                centerMode={true}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {

                products.map(product => (

                    <Link to = {`product/${product.id}`}>
                    
                    <div className="m-2 flex flex-col items-center">
                        <img className='w-[150px] h-[150px]' src = {product.url} alt = "product " />

                        <p className='font-bold'>{product.title.shortTitle}</p>
                        <p className='text-green-500'>Discount : {product.price.discount}</p>
                        <p className='text-gray-500'>{product.tagline}</p>
                    </div>

                    </Link>
                ))

                }

            </Carousel>
           
        </div>
    )

}
export default Slide