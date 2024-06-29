import {Grid} from '@mui/material'

const imgURL = [
    "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/9299074e5b9308b2.jpg?q=50",
    "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/19fa1370d0154baf.jpg?q=50",
    "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/478aad99953440bb.jpg?q=50"
]


const Midsection = () =>{
    return (
        // <div className="flex overflow-auto">
        //     {
        //         imgURL.map(image => (
        //             <img src={image} alt="Image" />
        //         ))
        //     }
        // </div>

        <Grid lg = {12} sm = {12} md = {12} xs = {12} container >
        {
            imgURL.map(image => (
                <Grid item lg = {4} md = {4} sm = {12} xs ={12} >
                    <img className='h-44' src={image} alt="Image" />
                </Grid>
            ))
        }
        </Grid>
    )
}

export default Midsection