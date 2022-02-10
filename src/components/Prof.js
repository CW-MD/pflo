import * as React from 'react'
import '../styles/global.css'
import '../styles/Collapsible.css'
import Collapsible from 'react-collapsible'
import {Link} from 'gatsby'




const Prof = () => {

    return (
        <div id='prof_container'>
            <h2 className='prof_header'>Proficiencies</h2>
            
           
            <Collapsible transitionTime='155' trigger='Design' triggerTagName='div' fontFamily="RedHatDisplay"  >
                <p className='innerCollapse'>Suspendisse elementum, metus a aliquet accumsan, purus velit mattis tortor,
                     in fringilla massa augue at elit. Etiam finibus mauris
                      sed purus suscipit pellentesque. Nulla libero ipsum,Suspendisse elementum,
                       metus a aliquet accumsan, purus velit mattis tortor, in fringilla massa augue at elit.
                       Etiam finibus mauris sed purus suscipit pellentesque. Nulla libero ipsum,</p>
            </Collapsible>
            

            <Collapsible transitionTime='155' trigger='Web Tech'triggerTagName='div' >
                <p className='innerCollapse'>Lorem Ipsum Siaa</p>
            </Collapsible>
           
            
            <Collapsible transitionTime='155' trigger='Misc'triggerTagName='div'>
                <p className='innerCollapse'>I dont know aht gowas je</p>
            </Collapsible>
            </div>
            
            
            
        
    )
}

export default Prof