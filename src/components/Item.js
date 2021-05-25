import React from 'react';
import { Button } from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Item.css';

export const Item = ({ title, desc, descLink, backgroundImg, LeftBtnTxt, LeftBtnLink, RightBtnTxt, RightBtnLink, twoButtons, first }) => {
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className='item__container'>
                <div className='item__text'>
                    <p>
                        {title}
                    </p>
                    <div className='item__textDesc'>
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
                <div className='item__lowerThird'>
                    <div className='item__buttons'>
                        <Button imp='primary' text='ORDER' link={LeftBtnLink} />
                        {
                            twoButtons && (
                                <Button imp='secondary' text='LEARN MORE' link={RightBtnLink} />
                            )
                        }
                    </div>
                    {first && (
                        <div className='item__expand'>
                            <ExpandMoreIcon />
                        </div>

                    )}
                </div>
            </div>

        </div>
    )
}
