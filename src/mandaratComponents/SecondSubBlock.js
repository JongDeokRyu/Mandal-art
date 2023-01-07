import React, { useState, useEffect } from 'react';
import MandaratCss from '../css/MandaratCss.css';
import MandaratInputModal from './MandaratInputModal';


const SecondSubBlock = (props) => {


    const [isShow, setIsShow] = useState(false);
    const [currentMandaratValue, setCurrentMandaratValue] = useState('');
    const [currentMandaratName, setCurrentMandaratName] = useState('');

    const showMandaratInputModal = (e) => {

        if(!!props.inputMainBlock.secondSubBlock.fifthBlock){
            setCurrentMandaratName(e.target.name);
            setCurrentMandaratValue(e.target.value);
            setIsShow(true)
        }
        else alert('에러다')
    }

    const closeMandaratInputModal = () => {
        setIsShow(false)
    }
    const onChangeInputElement = (name, value) => {
        props.setInputMainBlock({
            ...props.inputMainBlock,
            secondSubBlock: {
                ...props.inputMainBlock.secondSubBlock,
                [name]: value
            }
        })
    }




    return (
        <div className='mantramaSubTableStyle' style={{ display: 'inline-block', maxWidth: '310px' }}>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"firstBlock Of 1 X 1"} name={"firstBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.secondSubBlock.firstBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.secondSubBlock.firstBlock && <p className='tooltipbox'>{props.inputMainBlock.secondSubBlock.firstBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"secondBlock Of 1 X 1"} name={"secondBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.secondSubBlock.secondBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.secondSubBlock.secondBlock && <p className='tooltipbox'>{props.inputMainBlock.secondSubBlock.secondBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"thirBlock Of 1 X 1"} name={"thirdBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.secondSubBlock.thirdBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.secondSubBlock.thirdBlock && <p className='tooltipbox'>{props.inputMainBlock.secondSubBlock.thirdBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"fourthBlock Of 1 X 1"} name={"fourthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.secondSubBlock.fourthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.secondSubBlock.fourthBlock && <p className='tooltipbox'>{props.inputMainBlock.secondSubBlock.fourthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"fifthBlock Of 1 X 1"} name={"fifthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.secondSubBlock.fifthBlock} readonly="readonly"></input>
                    {props.inputMainBlock.secondSubBlock.fifthBlock && <p className='tooltipbox'>{props.inputMainBlock.secondSubBlock.fifthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"sixthBlock Of 1 X 1"} name={"sixthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.secondSubBlock.sixthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.secondSubBlock.sixthBlock && <p className='tooltipbox'>{props.inputMainBlock.secondSubBlock.sixthBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"seventhBlock Of 1 X 1"} name={"seventhBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.secondSubBlock.seventhBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.secondSubBlock.seventhBlock && <p className='tooltipbox'>{props.inputMainBlock.secondSubBlock.seventhBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"eightthBlock Of 1 X 1"} name={"eightthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.secondSubBlock.eightthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.secondSubBlock.eightthBlock && <p className='tooltipbox'>{props.inputMainBlock.secondSubBlock.eightthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"ninthBlock Of 1 X 1"} name={"ninthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.secondSubBlock.ninthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.secondSubBlock.ninthBlock && <p className='tooltipbox'>{props.inputMainBlock.secondSubBlock.ninthBlock}</ p>}
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

export default SecondSubBlock;