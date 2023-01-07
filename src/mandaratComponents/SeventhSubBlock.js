import React, { useState } from 'react';
import MandaratCss from '../css/MandaratCss.css';
import MandaratInputModal from './MandaratInputModal';

const SeventhSubBlock = (props) => {


    const [isShow, setIsShow] = useState(false);
    const [currentMandaratValue, setCurrentMandaratValue] = useState('');
    const [currentMandaratName, setCurrentMandaratName] = useState('');

    const showMandaratInputModal = (e) => {
        if(!!props.inputMainBlock.seventhSubBlock.fifthBlock){
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
            seventhSubBlock: {
                ...props.inputMainBlock.seventhSubBlock,
                [name]: value
            }
        })
    }

    return (
        <div className='mantramaSubTableStyle' style={{ display: 'inline-block', maxWidth: '310px' }}>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"firstBlock Of 1 X 1"} name={"firstBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.seventhSubBlock.firstBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.seventhSubBlock.firstBlock && <p className='tooltipbox'>{props.inputMainBlock.seventhSubBlock.firstBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"secondBlock Of 1 X 1"} name={"secondBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.seventhSubBlock.secondBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.seventhSubBlock.secondBlock && <p className='tooltipbox'>{props.inputMainBlock.seventhSubBlock.secondBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"thirBlock Of 1 X 1"} name={"thirdBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.seventhSubBlock.thirdBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.seventhSubBlock.thirdBlock && <p className='tooltipbox'>{props.inputMainBlock.seventhSubBlock.thirdBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"fourthBlock Of 1 X 1"} name={"fourthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.seventhSubBlock.fourthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.seventhSubBlock.fourthBlock && <p className='tooltipbox'>{props.inputMainBlock.seventhSubBlock.fourthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"fifthBlock Of 1 X 1"} name={"fifthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.seventhSubBlock.fifthBlock} readonly="readonly"></input>
                    {props.inputMainBlock.seventhSubBlock.fifthBlock && <p className='tooltipbox'>{props.inputMainBlock.seventhSubBlock.fifthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"sixthBlock Of 1 X 1"} name={"sixthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.seventhSubBlock.sixthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.seventhSubBlock.sixthBlock && <p className='tooltipbox'>{props.inputMainBlock.seventhSubBlock.sixthBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"seventhBlock Of 1 X 1"} name={"seventhBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.seventhSubBlock.seventhBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.seventhSubBlock.seventhBlock && <p className='tooltipbox'>{props.inputMainBlock.seventhSubBlock.seventhBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"eightthBlock Of 1 X 1"} name={"eightthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.seventhSubBlock.eightthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.seventhSubBlock.eightthBlock && <p className='tooltipbox'>{props.inputMainBlock.seventhSubBlock.eightthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"ninthBlock Of 1 X 1"} name={"ninthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.seventhSubBlock.ninthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.seventhSubBlock.ninthBlock && <p className='tooltipbox'>{props.inputMainBlock.seventhSubBlock.ninthBlock}</ p>}
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

export default SeventhSubBlock;