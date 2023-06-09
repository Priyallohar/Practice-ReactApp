import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';


function AddUser(props) {

    const[enteredUsername , setEnteredUsername] = useState("")
    const[enteredAge , setEnteredAge] = useState("")
    const [error , setError] = useState()

    function AddUserhandler(event){
        event.preventDefault();
        if(enteredUsername.trim().length === 0|| enteredAge.trim().length === 0){
            setError({
                title:"invalid input",
                message:"Please enter a valid name and age"
            })
            return;
        }

        if(+enteredAge <1){
            setError({
                title:"invalid age",
                message:"Please enter a valid age"
            })
            return
        }

        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('')
        setEnteredAge('')
    }

    function usernameChangeHandler(event){
        setEnteredUsername(event.target.value)
    }

    function ageChangeHandler(event){
        setEnteredAge(event.target.value)
    }
    
    const errorHandler = () => {
        setError(null);
      };

    return(
        <Wrapper className={classes.backdrop}>
            {error&&<ErrorModal title = {error.title} message = {error.message} onConfirm= {errorHandler}/>}
        <Card className = {classes.input}>
        <form onSubmit={AddUserhandler}>
            <label htmlFor='username' > UserName</label>
            <input type='text' id='username' value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor='age'>Age(Years)</label>
            <input type='number' id='age' value={enteredAge} onChange={ageChangeHandler}/>
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </Wrapper>
    )

}

export default AddUser;