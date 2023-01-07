import React, { useState, useEffect } from 'react';
import MandaratCss from '../css/MandaratCss.css';
import MandaratInputModal from './MandaratInputModal';

const FirstSubBlock = (props) => {

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
    const validationBlock = (blockName) => {
        isValid[blockName] = false;
        console.log('isValid[blockName] --->' , isValid[blockName])
        setTimeout(() => {
            isValid[blockName] = true;
            console.log('3초 뒤 isValid[blockName] --->' , isValid[blockName])
        },3000)
    }

    useEffect(() => {
        console.log('is11Valid ---> ' , isValid);
    },[isValid])

    const showMandaratInputModal = (e) => {
        let blockName = e.target.name;
        if(!!props.inputMainBlock.firstSubBlock.fifthBlock){
            setCurrentMandaratName(e.target.name);
            setCurrentMandaratValue(e.target.value);
            setIsShow(true)
        }
        else {
            alert('에러다')
            validationBlock(blockName)
        }
    }

    const closeMandaratInputModal = () => {
        setIsShow(false)
    }

    const onChangeInputElement = (name, value) => {
        props.setInputMainBlock({
            ...props.inputMainBlock,
            firstSubBlock: {
                ...props.inputMainBlock.firstSubBlock,
                [name]: value
            }
        })
    }



    return (
        <div className='mantramaSubTableStyle' style={{ display: 'inline-block', maxWidth: '310px' }}>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"firstBlock Of 1 X 1"} name={"firstBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.firstBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.firstSubBlock.firstBlock && <p className='tooltipbox'>{props.inputMainBlock.firstSubBlock.firstBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"secondBlock Of 1 X 1"} name={"secondBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.secondBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.firstSubBlock.secondBlock && <p className='tooltipbox'>{props.inputMainBlock.firstSubBlock.secondBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"thirBlock Of 1 X 1"} name={"thirdBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.thirdBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.firstSubBlock.thirdBlock && <p className='tooltipbox'>{props.inputMainBlock.firstSubBlock.thirdBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"fourthBlock Of 1 X 1"} name={"fourthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.fourthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.firstSubBlock.fourthBlock && <p className='tooltipbox'>{props.inputMainBlock.firstSubBlock.fourthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"fifthBlock Of 1 X 1"} name={"fifthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.fifthBlock} readonly="readonly"></input>
                    {props.inputMainBlock.firstSubBlock.fifthBlock && <p className='tooltipbox'>{props.inputMainBlock.firstSubBlock.fifthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"sixthBlock Of 1 X 1"} name={"sixthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.sixthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.firstSubBlock.sixthBlock && <p className='tooltipbox'>{props.inputMainBlock.firstSubBlock.sixthBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"seventhBlock Of 1 X 1"} name={"seventhBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.seventhBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.firstSubBlock.seventhBlock && <p className='tooltipbox'>{props.inputMainBlock.firstSubBlock.seventhBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"eightthBlock Of 1 X 1"} name={"eightthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.eightthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.firstSubBlock.eightthBlock && <p className='tooltipbox'>{props.inputMainBlock.firstSubBlock.eightthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"ninthBlock Of 1 X 1"} name={"ninthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.ninthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.firstSubBlock.ninthBlock && <p className='tooltipbox'>{props.inputMainBlock.firstSubBlock.ninthBlock}</ p>}
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


export default FirstSubBlock;