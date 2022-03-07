import React from 'react';
import './FooterPage.css';
import { 
  MDBCol, 
  MDBContainer, 
  MDBRow, 
  MDBFooter,
  MDBIcon,
} from 'mdb-react-ui-kit';

/* image url */

import qrcodeWeixin from './assets/img/qrcode_smartlearning_BNU_1.jpeg';



function FooterPage(){
  const contact = [
    {address: '12F, Block A, Jingshi Technology Building, No. 12 Xueyuan South Road, Haidian District, Beijing, China',
     phone:'0750-123456',
     addressUrl: 'https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%8C%97%E4%BA%AC%E5%AD%A6%E9%99%A2%E5%8D%97%E8%B7%AF12%E5%8F%B7%E4%BA%AC%E5%B8%88%E7%A7%91%E6%8A%80%E5%A4%A7%E5%8E%A6%EF%BC%88%E5%AD%A6%E5%88%9B%E5%A4%A7%E5%8E%A6%EF%BC%89A%E5%BA%A76%E5%B1%82%E5%8B%A4%E6%80%9D%E6%95%99%E8%82%B2/newmap=1&ie=utf-8&vt=map/',
     postcode: '100082',
     email:'xxx@gmail.com',
     objectID: 0,
    },
  ];
  
  return(
    <MDBFooter>
      <MDBContainer fluid className=" text-center">
        <MDBRow>

          <MDBCol md="6">

            <h4 className="text-uppercase fw-bold mb-4" > Contact </h4>
            
              {contact.map((item, index) =>
                <div1 key={index} >
                  <li className="list-unstyled"> 
                  
                        <i className='fas fa-home me-3'></i> {item.address}, {item.postcode}
                  </li>          
                  <li className="list-unstyled"> <i className='fas fa-phone me-3'></i> {item.phone} </li> 
                  <li className="list-unstyled"> <i className='fas fa-envelope me-3'></i> {item.email} </li> 
                </div1>                    
              )}     
          </MDBCol>
              
          <MDBCol md="2"> 

          </MDBCol >
          
          <MDBCol md="4">    
        <section className='mb-4'>

            <h4>Get connected with us:</h4>
 
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon far icon="envelope" size="lg" />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#00C957' }}
            href={qrcodeWeixin}
            role='button'
          >
            <MDBIcon fab icon='weixin ' />
          </a>
        </section>    
          </MDBCol>
          
        </MDBRow>
          
      </MDBContainer>

    
      <div className="footer-copyright text-center py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>    
            &copy; {new Date().getFullYear()} Copyright: SLIBNU Laboratory 
      </div>
    </MDBFooter> 
  );
}

export default FooterPage;