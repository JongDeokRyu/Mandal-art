import React, { useState } from 'react';
import MandaratCss from '../css/MandaratCss.css';
import MandaratInputModal from './MandaratInputModal';

const EightthSubBlock = (props) => {

    const [isShow, setIsShow] = useState(false);
    const [currentMandaratValue, setCurrentMandaratValue] = useState('');
    const [currentMandaratName, setCurrentMandaratName] = useState('');

    const showMandaratInputModal = (e) => {
        if(!!props.inputMainBlock.eightthSubBlock.fifthBlock){
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
            eightthSubBlock: {
                ...props.inputMainBlock.eightthSubBlock,
                [name]: value
            }
        })
    }

    return (
        <div className='mantramaSubTableStyle' style={{ display: 'inline-block', maxWidth: '310px' }}>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"firstBlock Of 1 X 1"} name={"firstBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.eightthSubBlock.firstBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.eightthSubBlock.firstBlock && <p className='tooltipbox'>{props.inputMainBlock.eightthSubBlock.firstBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"secondBlock Of 1 X 1"} name={"secondBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.eightthSubBlock.secondBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.eightthSubBlock.secondBlock && <p className='tooltipbox'>{props.inputMainBlock.eightthSubBlock.secondBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"thirdBlock Of 1 X 1"} name={"thirdBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.eightthSubBlock.thirdBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.eightthSubBlock.thirdBlock && <p className='tooltipbox'>{props.inputMainBlock.eightthSubBlock.thirdBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"fourthBlock Of 1 X 1"} name={"fourthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.eightthSubBlock.fourthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.eightthSubBlock.fourthBlock && <p className='tooltipbox'>{props.inputMainBlock.eightthSubBlock.fourthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"fifthBlock Of 1 X 1"} name={"fifthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.eightthSubBlock.fifthBlock} readonly="readonly"></input>
                    {props.inputMainBlock.eightthSubBlock.fifthBlock && <p className='tooltipbox'>{props.inputMainBlock.eightthSubBlock.fifthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"sixthBlock Of 1 X 1"} name={"sixthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.eightthSubBlock.sixthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.eightthSubBlock.sixthBlock && <p className='tooltipbox'>{props.inputMainBlock.eightthSubBlock.sixthBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"seventhBlock Of 1 X 1"} name={"seventhBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.eightthSubBlock.seventhBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.eightthSubBlock.seventhBlock && <p className='tooltipbox'>{props.inputMainBlock.eightthSubBlock.seventhBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"eightthBlock Of 1 X 1"} name={"eightthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.eightthSubBlock.eightthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.eightthSubBlock.eightthBlock && <p className='tooltipbox'>{props.inputMainBlock.eightthSubBlock.eightthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"ninthBlock Of 1 X 1"} name={"ninthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.eightthSubBlock.ninthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.eightthSubBlock.ninthBlock && <p className='tooltipbox'>{props.inputMainBlock.eightthSubBlock.ninthBlock}</ p>}
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

export default EightthSubBlock;