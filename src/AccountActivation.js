import React, { useEffect } from 'react';
import { API, init_api } from './API'; // Replace with your actual API configuration
import { useParams } from 'react-router';

init_api();
const AccountActivation = () => {
    const { uid, token } = useParams();

    useEffect(() => {
        async function activateAccount() {
        try {
            console.log("started assignment")
            const response = await API.get(`activate/${uid}/${token}`);
            console.log("called response")
            if (response.status === 204) {
            alert('Account activated successfully.');
            }
        } catch (error) {
            console.error(error);
            alert('Error activating account.');
        }
        }
        console.log("completed task")
        activateAccount();
        console.log("all around success")
    }, [uid, token]);

  return (
    <div>
      <h1>Account Activation</h1>
      <p>Please wait while we activate your account...</p>
    </div>
  );
};

export default AccountActivation;
