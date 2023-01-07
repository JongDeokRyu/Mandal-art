import React, { useState, useEffect } from 'react';
import MandaratCss from '../css/MandaratCss.css';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import MandaratInputModal from './MandaratInputModal';
import MandaratInputMainBlock from './MandaratInputMainBlock';

const MainBlock = (props) => {

    const [isShow, setIsShow] = useState(false);
    const [currentMandaratValue, setCurrentMandaratValue] = useState('');
    const [currentMandaratName, setCurrentMandaratName] = useState('');
    const [isValid , setIsValid] = useState({
        firstBlock : true,
        secondBlock : true,
        thridBlock : true,
        fourthBlock : true,
        fifthBlock : true,
        sixthBlock : true,
        seventhBlock : true,
        eightthBlock : true,
        ninthBlock : true
    });

    const onChangeInputElement = (name, value) => {

        let updateSubBlock = name;
        let updateMainBlock = updateSubBlock.slice(0, updateSubBlock.length - 8).concat('Block');
        props.setInputMainBlock({
            ...props.inputMainBlock,
            mainBlock: {
                ...props.inputMainBlock.mainBlock,
                [updateMainBlock]: value
            },
            [updateSubBlock]: {
                ...props.inputMainBlock[updateSubBlock],
                fifthBlock: value
            }
        })
    }

    const validationBlock = (blockName) => {
        isValid[blockName] = false;
        console.log('isValid[blockName] --->' , isValid[blockName])
        setTimeout(() => {
            isValid[blockName] = true;
            console.log(isValid[blockName])
        },3000)
    }

    useEffect(() => {
        console.log('is11Valid ---> ' , isValid);
    },[isValid])

    const showMandaratInputModal = (e) => {

        let blockName = e.target.name.slice(0, e.target.name.length - 8).concat('Block');
        if(blockName !== 'fifthBlock' && !!props.inputMainBlock.mainBlock.fifthBlock ){
            setCurrentMandaratName(e.target.name);
            setCurrentMandaratValue(e.target.value);
            setIsShow(true)    
        }
        else if (blockName === 'fifthBlock'){
            setCurrentMandaratName(e.target.name);
            setCurrentMandaratValue(e.target.value);
            setIsShow(true)    
        }
        else{
            validationBlock(blockName)
            alert('에러다')
        }
    }

    const closeMandaratInputModal = () => {
        setIsShow(false)
    }

    useEffect(() => {
        console.log(props.inputMainBlock.mainBlock)
    },[props.inputMainBlock])



    return (
        <div className='mantramaSubTableStyle' style={{ display: 'inline-block', maxWidth: '310px' }}>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"firstBlock Of MainBlock"} name={"firstSubBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.mainBlock.firstBlock} onClick={showMandaratInputModal} readonly="readonly" ></input>
                    {props.inputMainBlock.mainBlock.firstBlock && <p className='tooltipbox'>{props.inputMainBlock.mainBlock.firstBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"secondBlock Of MainBlock"} name={"secondSubBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.mainBlock.secondBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.mainBlock.secondBlock && <p className='tooltipbox'>{props.inputMainBlock.mainBlock.secondBlock}</p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"thirdBlock Of MainBlock"} name={"thirdSubBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.mainBlock.thirdBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.mainBlock.thirdBlock && <p className='tooltipbox'>{props.inputMainBlock.mainBlock.thirdBlock}</p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"fourthBlock Of MainBlock"} name={"fourthSubBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.mainBlock.fourthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.mainBlock.fourthBlock && <p className='tooltipbox'>{props.inputMainBlock.mainBlock.fourthBlock}</p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"fifthBlock Of MainBlock"} name={"fifthSubBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.mainBlock.fifthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.mainBlock.fifthBlock && <p className='tooltipbox'>{props.inputMainBlock.mainBlock.fifthBlock}</p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"sixthBlock Of MainBlock"} name={"sixthSubBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.mainBlock.sixthBlock} onClick={showMandaratInputModal} readonly="readonly" ></input>
                    {props.inputMainBlock.mainBlock.sixthBlock && <p className='tooltipbox'>{props.inputMainBlock.mainBlock.sixthBlock}</p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"seventhBlock Of MainBlock"} name={"seventhSubBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.mainBlock.seventhBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.mainBlock.seventhBlock && <p className='tooltipbox'>{props.inputMainBlock.mainBlock.seventhBlock}</p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"eightthBlock Of MainBlock"} name={"eightthSubBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.mainBlock.eightthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.mainBlock.eightthBlock && <p className='tooltipbox'>{props.inputMainBlock.mainBlock.eightthBlock}</p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"ninthBlock Of MainBlock"} name={"ninthSubBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.mainBlock.ninthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.mainBlock.ninthBlock && <p className='tooltipbox'>{props.inputMainBlock.mainBlock.ninthBlock}</p>}
                </div>
            </div>

            {isShow &&
                <MandaratInputModal
                    currentMandaratName={currentMandaratName}
                    currentMandaratValue={currentMandaratValue}
                    isShow={isShow}
                    setIsShow={setIsShow}
                    onChangeInputElement={onChangeInputElement}
                    closeMandaratInputModal={closeMandaratInputModal}
                ></MandaratInputModal>}
        </div>

    )
}

export default MainBlock;