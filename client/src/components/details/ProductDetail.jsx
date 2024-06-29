import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Table , TableBody , TableCell , TableRow } from '@mui/material';
import { styled } from '@mui/system';

const styledIcon = styled(LocalOfferIcon)`
    padding: 15px;
    margin-right: 15px;
    color:#00CC00;

`
const Rows = styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    & > td{
        margin-top:10px;
        font-size:14px;
    }
`
const ProductDetail = ({product}) =>{

    const date = new Date(new Date().getTime() + (5*24*60*60*1000));
    return (
        <div className='mx-4'>
            <h1 className="font-semibold text-xl">{product.title.longTitle}</h1>
            <span className="text-gray-500">5 Ratings & 10 reviews</span>
                      
            <div className="flex gap-2 font-semibold">            
                <span> ₹{product.price.cost} </span>
                <span> <strike> ₹{product.price.mrp} </strike>  </span>
                <span className="text-green-600"> {product.price.discount} </span>
            </div>


            <h1 className="font-semibold">
                Available Offers
            </h1>

            <div className="flex flex-col gap-2 ">
                <span className="text-lg lg:text-base"><LocalOfferIcon sx={{ marginRight: '5px' ,color: '#00CC00' }}/>Bank Offer Get ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C</span>
                <span className="text-lg lg:text-base" ><LocalOfferIcon sx={{ marginRight: '5px',color: '#00CC00' }}/>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</span>
                <span className="text-lg lg:text-base" ><LocalOfferIcon sx={{ marginRight: '5px' ,color: '#00CC00' }}/>Bank Offer10% off on ICICI Bank Credit Card Transactions, up to ₹1000 on orders of ₹5,000 and aboveT&C</span>
                <span className="text-lg lg:text-base" ><LocalOfferIcon sx={{ marginRight: '5px' ,color: '#00CC00' }}/>Special PriceGet extra 74% off (price inclusive of cashback/coupon)T&C</span>
                <span className="text-lg lg:text-base" ><LocalOfferIcon sx={{ marginRight: '5px' ,color: '#00CC00' }}/>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*Know More</span>
            </div>

            <Table>
                <TableBody>
                    <Rows>
                        <TableCell style = {{color: '#878787'}}>Delivery</TableCell>
                        <TableCell style = {{fontWeight: 600 }}>Delivery By {date.toDateString()} | ₹40</TableCell>
                    </Rows> 

                    <Rows>
                        <TableCell style = {{color: '#878787'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </Rows> 

                    <Rows>
                        <TableCell style = {{color: '#878787'}}>Seller</TableCell>
                        <TableCell>
                            <span className='text-blue-500'>RetailNet</span>
                            <ol style={{ listStyleType: 'disc', marginLeft: '15px' }}>
                                <li>7 Days Service Center Replacement/Repair</li>
                                <li>GST invoice available</li>
                            </ol>
                        </TableCell>
                    </Rows> 

                    <Rows>
                        <TableCell style = {{color: '#878787'}}>
                            Description
                        </TableCell>
                        <TableCell>
                            {product.description}
                        </TableCell>
                    </Rows> 

                </TableBody>
            </Table>

        </div>
    )
}

export default ProductDetail