import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import TestCss from '../css/TestCss.css';

const Test = () => {

    const [inputMainBlock , setInputMainBlock]= useState({
        Id : "mainBlock",
        firstBlock : "",
        secondBlock : "",
        thirdBlock : "",
        fourthBlock : "",
        fifthBlock : "",
        sixthBlock : "",
        seventhBlock : "",
        eightthBlock : "",
        ninthBlock : "" ,

        firstSubBlock : {
            Id : "firstSubBlock",
            firstBlock : "",
            secondBlock : "",
            thirdBlock : "",
            fourthBlock : "",
            fifthBlock : "",
            sixthBlock : "",
            seventhBlock : "",
            eightthBlock : "",
            ninthBlock : "" 
        },
        secondSubBlock : {
            Id : "secondSubBlock",
            firstBlock : "",
            secondBlock : "",
            thirdBlock : "",
            fourthBlock : "",
            fifthBlock : "",
            sixthBlock : "",
            seventhBlock : "",
            eightthBlock : "",
            ninthBlock : "" 
        },
        thirdSubBlock : {
            Id : "thirdSubBlock",
            firstBlock : "",
            secondBlock : "",
            thirdBlock : "",
            fourthBlock : "",
            fifthBlock : "",
            sixthBlock : "",
            seventhBlock : "",
            eightthBlock : "",
            ninthBlock : "" 
        },
        fourthSubBlock : {
            Id : "fourthSubBlock",
            firstBlock : "",
            secondBlock : "",
            thirdBlock : "",
            fourthBlock : "",
            fifthBlock : "",
            sixthBlock : "",
            seventhBlock : "",
            eightthBlock : "",
            ninthBlock : "" 
        },
        fifthSubBlock : {
            Id : "fifthSubBlock",
            firstBlock : "",
            secondBlock : "",
            thirdBlock : "",
            fourthBlock : "",
            fifthBlock : "",
            sixthBlock : "",
            seventhBlock : "",
            eightthBlock : "",
            ninthBlock : "" 
        },
        sixthSubBlock : {
            Id : "sixthSubBlock",
            firstBlock : "",
            secondBlock : "",
            thirdBlock : "",
            fourthBlock : "",
            fifthBlock : "",
            sixthBlock : "",
            seventhBlock : "",
            eightthBlock : "",
            ninthBlock : "" 
        },
        seventhSubBlock : {
            Id : "seventhSubBlock",
            firstBlock : "",
            secondBlock : "",
            thirdBlock : "",
            fourthBlock : "",
            fifthBlock : "",
            sixthBlock : "",
            seventhBlock : "",
            eightthBlock : "",
            ninthBlock : "" 
        },
        eightthSubBlock : {
            Id : "eightthSubBlock",
            firstBlock : "",
            secondBlock : "",
            thirdBlock : "",
            fourthBlock : "",
            fifthBlock : "",
            sixthBlock : "",
            seventhBlock : "",
            eightthBlock : "",
            ninthBlock : "" 
        },
        ninthSubBlock : {
            Id : "ninthSubBlock",
            firstBlock : "",
            secondBlock : "",
            thirdBlock : "",
            fourthBlock : "",
            fifthBlock : "",
            sixthBlock : "",
            seventhBlock : "",
            eightthBlock : "",
            ninthBlock : "" 
        }
    });

    const { Id , firstBlock , secondBlock , thirdBlock , fourthBlock , fifthBlock , sixthBlock , seventhBlock , eightthBlock , ninthBlock} = inputMainBlock;

    const onChangeInputElement = (e) => {
        const { value , name } = e.target;
        console.log(e.target.id);
        setInputMainBlock({
            ...inputMainBlock,
            [name] : value,
        })
    }

    useEffect(() => {
        console.log('inputMainBlock ---> ' , inputMainBlock);
    },[inputMainBlock])
    

    const repeatMantramaTable = () => {
        const repeatResult = [];
    
        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                if (i === 2 && j === 2) {
                    repeatResult.push(<>
                        <div className='mantramaSubTableStyle'key={i + " X " + j} style={{ display: 'inline-block', maxWidth: '250px' }}>
                            <div>
                                <input id={"firstBlock Of MainBlock"} name={"firstBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"secondBlock Of MainBlock"} name={"secondBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"thirdBlock Of MainBlock"} name={"thirdBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                            </div>
                            <div>
                                <input id={"fourthBlock Of MainBlock"} name={"fourthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"fifthBlock Of MainBlock"} name={"fifthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"sixthBlock Of MainBlock"} name={"sixthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                            </div>
                            <div>
                                <input id={"seventhBlock Of MainBlock"} name={"seventhBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"eightthBlock Of MainBlock"} name={"eightthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"ninthBlock Of MainBlock"} name={"ninthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                            </div>
                        </div>
                    </>)
                }

                else {
                    repeatResult.push(<>
                        <div className='mantramaSubTableStyle' key={i + " X " + j} style={{ display: 'inline-block', maxWidth: '250px' }}>
                            <div >
                                <input id={"firstBlock Of "+i+"X"+j} name={"firstBlock Of "+i+"X"+j} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"secondBlock Of "+i+"X"+j} name={"secondBlock Of "+i+"X"+j} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"thirdBlock Of "+i+"X"+j} name={"thirdBlock Of "+i+"X"+j} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                            </div>
                            <div>
                                <input id={"fourthBlock Of "+i+"X"+j} name={"fourthBlock Of "+i+"X"+j} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"fifthBlock Of "+i+"X"+j} name={"fifthBlock Of "+i+"X"+j} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"sixthBlock Of "+i+"X"+j} name={"sixthBlock Of "+i+"X"+j} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                            </div>
                            <div>
                                <input id={"seventhBlock Of "+i+"X"+j} name={"seventhBlock Of "+i+"X"+j} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"eightthBlock Of "+i+"X"+j} name={"eightthBlock Of "+i+"X"+j} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                                <input id={"ninthBlock Of "+i+"X"+j} name={"ninthBlock Of "+i+"X"+j} className='mantramaBlockStyle' onChange={onChangeInputElement}></input>
                            </div>
                        </div></>)
                }
            }
        }
        return repeatResult;
    }

    return (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
            <h3>만다라트 채우기</h3>
            <div className='mantramaTable'>
                <div style={{ marginTop: '20px' }}></div>
                    {repeatMantramaTable()}
            </div>
            {/* <button style={Object.assign({}, styles.button, isInputText && styles.buttonEnabled)}>제출</button> */}
        </div>
    )


}

export default Test;
