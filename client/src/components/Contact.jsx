
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Contact = () => {
  return (
    <div className=' flex bg-blue-500 text-white p-3 justify-center'>
        <div id="wrapper" className=' flex w-1/2 items-center justify-between'>
            <span>BE IN TOUCH WITH US:</span>
            <div id="mail">
                <input type="text" placeholder="Enter your email..." className='border-none p-2.5 rounded-md '/>
                <button className='bg-slate-900 p-2.5 rounded-md'>JOIN US</button>

            </div>
            <div id="icons" className='flex gap-2'>
                <FacebookIcon/>
                <InstagramIcon/>
                <GoogleIcon/>
                <PinterestIcon/>

            </div>
        </div>
    </div>
  )
}

export default Contact