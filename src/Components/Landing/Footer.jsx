import {BrandInstagram, BrandLinkedin, BrandTiktok, BrandTwitter} from 'tabler-icons-react';
import next4Logo from './icon.png'
function Footer() {
    return (
  <section className='section6' id='section-6' style={{marginTop: '20px', height: '200px', width: '100%'}}>
  
  <h3 style={{marginLeft: '50px', marginTop: '40px'}}> Complement the college counseling process. </h3>
  <div style={{marginTop: '20px', marginLeft: '50px'}}>
    <button style={{marginRight: 8, padding: '20px 40px', fontFamily: 'DM Sans', border: 'none', padding: '15px 45px', borderRadius: '10px 10px 10px 10px', cursor: 'pointer', backgroundColor: '#99d98c'}}> Get started </button>
    <button style={{padding: '20px 20px', width: '220px', fontFamily: 'DM Sans',top: '51.3%', border: 'none', padding: '15px 45px', color: '#FFFFFF', borderRadius: '10px 10px 10px 10px', cursor: 'pointer', backgroundColor: '#1e6091'}}> Contact us </button> 
  </div>
  
  <div style={{display: 'flex'}}>
   
  <div style={{display: 'flex', alignItems: 'center', margin: '16px 69% 0 0'}}>
  <div style={{display: 'flex', alignItems: 'center'}}>
  <h4 style={{marginBottom: 0,fontSize: '12px',marginRight: 1, marginLeft: 50}}> <i>Revolutionizing college counseling. </i></h4>
  <img src={next4Logo} width={40} />
  </div>

  </div>

  <div className='social-icons' style={{ marginTop: '24px', marginLeft: 'auto', marginRight: '36px'}}>
  <BrandInstagram sx={{marginRight: 20}} />
  <BrandLinkedin  sx={{marginRight: 20}} />
  <BrandTiktok  sx={{marginRight: 20}} />
  <BrandTwitter  sx={{marginRight: 50}} />
 
  </div>
 
  </div>
  
  
  

    </section>
          
    )
}

export default Footer