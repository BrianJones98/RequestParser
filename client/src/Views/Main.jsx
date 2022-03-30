//Dependency Imports
import React from 'react';

//Component Imports
import RequestForm from '../Components/RequestForm';
import ResultWindow from '../Components/ResultWindow';

//Style Imports
import styles from './style.module.css';

const Main = _props => {
    return (
        <div className={styles.appWrapper}>
            <h1>Request Parser</h1>
            <div className={styles.contentWrapper}>
                <RequestForm />
                <ResultWindow />
            </div>
        </div>
    );
}

export default Main;