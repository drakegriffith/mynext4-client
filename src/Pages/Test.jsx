import { API, init_api } from "../API";
import axios from "axios";


function test () {

    const Axiostest = () => {
        
        axios.get('http://127.0.0.1:8000/api/colleges/1/')
        .then(res => {
            console.log(res.data.description)
        }).catch(err => {
            console.log(err)
        });
    }

    
        
    const APITest = () => {
        
        init_api();
        API.get('/colleges/1/')
        .then(res => {
            console.log(res.data.description);
        }).catch(err => {
            console.log(err);
        })
               
    }
    
    return (
        <div>
            <h1> Hello World </h1>
            <button onClick={Axiostest}> Test Axios </button>
            <button onClick={APITest}> Test API </button>

        </div>
    )
}

export default test;