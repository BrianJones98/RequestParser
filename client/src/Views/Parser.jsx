//Dependency Imports
import React from 'react';

//Component Imports
import RequestForm from '../Components/RequestForm';
import ResultWindow from '../Components/ResultWindow';

//Style Imports
import styles from './style.module.css';

const Parser = _props => {
    return (
        <div>
            <div className={styles.viewWrapper}>
                <RequestForm />
                <ResultWindow />
            </div>
        </div>
    );
}

export default Parser;