import React, { useEffect } from 'react';
import { API, init_api } from './API'; // Replace with your actual API configuration
import { useParams } from 'react-router';

init_api();
const AccountActivation = () => {
    const { uid, token } = useParams();

    useEffect(() => {
        async function activateAccount() {
        try {
           
            const response = await API.post(`api/activate/${uid}/${token}`);


    
            if (response.status === 204) {
            alert('Account activated successfully.');
            }
        } catch (error) {
      
            alert('Error activating account.');
        }
        }  
        activateAccount();
    }, [uid, token]);

  return (
    <div>
      <h1>Account Activation</h1>
      <p>Please wait while we activate your account...</p>
    </div>
  );
};

export default AccountActivation;
