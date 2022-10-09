import React from 'react'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';


const Footer = () => {
    return (
        <>
            {/* <footer>
                <div class="text-center" style={{ display: "flex", background: "linear-gradient(to top, #202020, #1b1a1f, #15141d, #0f0b1b, #07001a)", height: "3rem", color: "#bba9a9", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                    Copyright &copy; www.myentertainment14.com. All rights reserved!
                </div>
            </footer> */}
            <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#21081a' }}>
                <MDBContainer className=''></MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © Copyright:
                    <a className='text-white' href='www.myentertainment14.com'>
                        All rights reserved By myentertainment14.com
                    </a>
                </div>
            </MDBFooter></>
    )
}

export default Footer