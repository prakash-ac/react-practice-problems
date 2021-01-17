import React, { Component } from 'react';
import Input from './Input/Input';
import Button from './Button/Button';
import classes from './Form.css'

class Form extends Component{
    state = {
        dataFields: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First name',
                    label: 'First Name',
                },
                value: '',
                validationRules: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            lastName:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last name',
                    label: 'Last Name',
                },
                value: '',
                validationRules: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your email',
                    label: 'Email',
                },
                value: '',
                validationRules: {
                    required: true,
                    validString: true,
                },
                valid: false,
                touched: false,
            },
            date: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    label: 'Date of Birth',
                },
                value: '',
                validationRules: {
                    required: true,
                    validString: false,
                    allowFutureDate: false,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter password',
                    label: 'Password',
                },
                value: '',
                secretValue: '',
                validationRules: {
                    required: true,
                    minLength: 8,
                },
                valid: false,
                touched: false,
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Re-enter password',
                    label: 'Confirm Password'
                },
                value: '',
                secretValue: '',
                validationRules: {
                    required: true,
                    mustMatch: true,
                },
                valid: false,
                touched: false,
            },

        },
        isFormValid: false,
        touched: false,
    }

    validated = (value, rules) =>{
        let isValid = true;

        // check if the value is empty or not
        if(rules && rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        // validate email
        if(rules.validString){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
            isValid = re.test(String(value).toLowerCase());
        }

        // validate date
        if(!rules.allowFutureDate){
            let inputDate  = value.split('-').join('');
            let [currentMonth, currentDay, currentYear] =  new Date().toLocaleDateString().split('/');
            if(parseInt(currentMonth, 10) < 10){
                currentMonth = "0" + currentMonth;
            }
            let currentDate = currentYear + currentMonth + currentDay;
            if(parseInt(currentDate, 10) < parseInt(inputDate, 10)){
                isValid = false;
            }
        }
        // validate password
        if(value.length < rules.minLength){
            isValid = false;
        }
        
        // match password
        if(rules.mustMatch){
            const password = this.state.dataFields.password.value;
            const confirmPassword = this.state.dataFields.confirmPassword.value;
            isValid = password === confirmPassword;
            console.log(password, confirmPassword);
        }
    
        return isValid;
    };

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedDataFields = {
            ...this.state.dataFields
        };

        // individual field
        const updatedFormData = {
            ...updatedDataFields[inputIdentifier]
        }
        
        if(inputIdentifier === 'password' || inputIdentifier === 'confirmPassword'){
            updatedFormData.secretValue = event.target.value;
            let encreptedString = '';
            for(let i=0;i<event.target.value.length;i++){
                encreptedString += '*';
            }
            updatedFormData.value = encreptedString;
        } else{
            updatedFormData.value = event.target.value;
        }
        updatedFormData.valid = this.validated(updatedFormData.value, updatedFormData.validationRules);
        updatedFormData.touched = true;
        updatedDataFields[inputIdentifier] = updatedFormData;
        let formIsValid = true;
        
        for(let inputIdentifier in updatedDataFields){
            console.log(updatedDataFields[inputIdentifier].valid)
            formIsValid = updatedDataFields[inputIdentifier].valid && formIsValid;
        }
        this.setState({dataFields: updatedDataFields, isFormValid: formIsValid});
    };

    submitButtonHandler = (event)=>{
        event.preventDefault();
    };

    render(){
        const dataFieldsArray = [];
        for(let key in this.state.dataFields){
            dataFieldsArray.push({
                id: key,
                config: this.state.dataFields[key],
            });
        }

        let form = (
            <form onSubmit={(event) => this.submitButtonHandler(event)} >
                {dataFieldsArray.map(formElement => {
                    return(
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            touched={formElement.config.touched}
                            valueType={formElement.id.includes('Name') ? (formElement.id.substring(0, formElement.id.length-4) + ' ' +  formElement.id.substring(formElement.id.length-4).toLowerCase()) : formElement.id}
                            changed={(event) => this.inputChangeHandler(event, formElement.id)}
                            keyPressed={(event) => this.inputChangeHandler(event, formElement.id)}
                        />
                    )
                })}
                <Button btnType="Submit" disabled={!this.state.dataFields.isFormValid===true}>Sign Up</Button>
            </form>
        )
        return(
            <div className={classes.PracticeProblemFour}>
                <p><strong>Practice Problem 4</strong></p>
                <div className={classes.Form}>
                    {form}
                </div>
            </div>
        )
    }
}

export default Form;