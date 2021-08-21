import * as React from 'react'
import '../styles/global.css'
import '../styles/Collapsible.css'
import Collapsible from 'react-collapsible'




const Prof = () => {

    return (
        <div id='prof_container'>
            <h2 style={{fontSize:'72px', maxHeight:'10vh',  marginBottom:'5vh', lineHeight:'10px', marginTop:'8%' }}>Prof</h2>
            
           
            <Collapsible transitionTime='155' trigger='Design' triggerTagName='div' >
                <p>Suspendisse elementum, metus a aliquet accumsan, purus velit mattis tortor,
                     in fringilla massa augue at elit. Etiam finibus mauris
                      sed purus suscipit pellentesque. Nulla libero ipsum,Suspendisse elementum,
                       metus a aliquet accumsan, purus velit mattis tortor, in fringilla massa augue at elit.
                       Etiam finibus mauris sed purus suscipit pellentesque. Nulla libero ipsum,</p>
            </Collapsible>
            

            <Collapsible transitionTime='155' trigger='Web Tech'triggerTagName='div'>
                <p>Lorem Ipsum Siaa</p>
            </Collapsible>
           
            
            <Collapsible transitionTime='155' trigger='Misc'triggerTagName='div'>
                <p>I dont know aht gowas je</p>
            </Collapsible>
            </div>
            
            
            
        
    )
}

export default Prof