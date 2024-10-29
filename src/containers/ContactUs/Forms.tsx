import React from 'react'
import CustomerSupportForm from './CustomerSupportForm'
import GeneralContactForm from './GeneralContactForm'

interface FormProps {
  activeForm : number  
}

function Forms({activeForm} : FormProps ) {
  return (
    <div>
        { activeForm == 1 &&<CustomerSupportForm/> }
        { activeForm == 2 &&<GeneralContactForm/>}
        
    </div>
  )
}

export default Forms