//Dependency Imports
import React from "react";

//Style Imports
import styles from './style.module.css';

const RequestForm = _props => {
    const handleSubmit = event => {
        event.preventDefault();
        console.log('Form has been "submitted"');
    }

    return (
        <div className={styles.formContainer}>
            <h2>Paste request below</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    name="request"
                />
                <button>Parse</button>
            </form>
        </div>
    );
}

export default RequestForm;