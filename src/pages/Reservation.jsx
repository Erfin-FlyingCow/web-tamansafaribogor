import React from 'react';
import Form from '../Component/Form';
import TextReservasi from '../Component/TextReservasi';


function Reservation() {

    return(
        <div className='mx-8 my-8'>
            <div className=' text-center'>
            </div>
            <div className='grid grid-cols-2 p-6'>
                <Form />
                <TextReservasi /> 


            </div>

        </div>
    )
}

export default Reservation;
