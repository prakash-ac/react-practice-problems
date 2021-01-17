import React from 'react';
import classes from './Item.css';

const item = (props) =>{

        return(
            <div className={classes.Item}>
                <div className={classes.ItemDescription}>
                    {props.title}
                </div>

                <div className={classes.Button}
                    onClick={props.clicked}>
                    &#10005;
                </div>
                
                <div className={classes.ItemValue}>
                    ${props.amount}
                </div>

            </div>
        )

}

export default item;