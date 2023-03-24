import './CareerList.css';
import {ArrowBigDown} from 'tabler-icons-react';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {init_api, API} from '../../../API';
import {changeMainCareer} from '../../../redux/careers/careerActions'



function CareerList () {


    const listCareer = useSelector(state => state.career.careerList);
    const [careerNums, setCareerNums] = useState([]);
    const [listItems, setListItems] = useState([]);
    const [changedID, setChangedID] = useState(null);
    const [test, setTest] = useState(0);
    const dispatch = useDispatch();

    
    const changeMainCareerListElement = (id) => {
        
        //changeMainCareer(id);

        console.log(id);
        setTest(id);
    };

    const ListItem = (props) => {
        
        

        return <li
                onMouseDown={() => changeMainCareerListElement(props.val_id)}> {props.value} </li>
    };

    useEffect(() => {
 
        const fetchCareerList = async() => {
            init_api();
            var tempData = [];
            for(var i = 0; i < listCareer.length; i++) {
                await API.get(`/api/career/${listCareer[i]}/`)
                .then((response) => {
                    tempData.push(response.data);
                })
            }

            setCareerNums(tempData);
            const tempItems = careerNums.map((data) => {
                
                return <ListItem key = {data.id} val_id = {data.id} value = {data.name} />
            });

            
            setListItems(tempItems);
        }

        fetchCareerList();

    });

    useEffect(() => {

        console.log("Main career effect");

        dispatch(changeMainCareer(test));

    }, [test]);

    
    
   

    

    const onArrowPressed = () => {
        console.log(test);

    }

    

    return (
        <div className='container'>
            <h1 data-testid = "CL-Title"> Career List </h1>
            <ul>
                {listItems}
            </ul>

            

            <ArrowBigDown 
            size = {48}
            strokeWidth = {2}
            color = {'black'}
            onClick = {onArrowPressed}/>
        </div>
    );
};

export default CareerList;