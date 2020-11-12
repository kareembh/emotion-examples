import React from 'react';
import InfoCard from './InfoCard'

export default function App() {

    const cardText = 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';
    const cardTitle= 'Info Card';
    const cardButtonText = 'Contact Us';
    return (
     <div>
         <InfoCard 
            cardTitle={cardTitle} 
            cardText={cardText} 
            cardButtonText={cardButtonText} 
         />
     </div>  
    )
}