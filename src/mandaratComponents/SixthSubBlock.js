import React, { useState } from 'react';
import MandaratCss from '../css/MandaratCss.css';
import MandaratInputModal from './MandaratInputModal';

const SixthSubBlock = (props) => {

    const [isShow, setIsShow] = useState(false);
    const [currentMandaratValue, setCurrentMandaratValue] = useState('');
    const [currentMandaratName, setCurrentMandaratName] = useState('');

    const showMandaratInputModal = (e) => {
        if(!!props.inputMainBlock.sixthSubBlock.fifthBlock){
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
            sixthSubBlock: {
                ...props.inputMainBlock.sixthSubBlock,
                [name]: value
            }
        })
    }



    return (
        <div className='mantramaSubTableStyle' style={{ display: 'inline-block', maxWidth: '310px' }}>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"firstBlock Of 1 X 1"} name={"firstBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.sixthSubBlock.firstBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.sixthSubBlock.firstBlock && <p className='tooltipbox'>{props.inputMainBlock.sixthSubBlock.firstBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"secondBlock Of 1 X 1"} name={"secondBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.sixthSubBlock.secondBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.sixthSubBlock.secondBlock && <p className='tooltipbox'>{props.inputMainBlock.sixthSubBlock.secondBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"thirBlock Of 1 X 1"} name={"thirdBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.sixthSubBlock.thirdBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.sixthSubBlock.thirdBlock && <p className='tooltipbox'>{props.inputMainBlock.sixthSubBlock.thirdBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"fourthBlock Of 1 X 1"} name={"fourthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.sixthSubBlock.fourthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.sixthSubBlock.fourthBlock && <p className='tooltipbox'>{props.inputMainBlock.sixthSubBlock.fourthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"fifthBlock Of 1 X 1"} name={"fifthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.sixthSubBlock.fifthBlock} readonly="readonly"></input>
                    {props.inputMainBlock.sixthSubBlock.fifthBlock && <p className='tooltipbox'>{props.inputMainBlock.sixthSubBlock.fifthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"sixthBlock Of 1 X 1"} name={"sixthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.sixthSubBlock.sixthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.sixthSubBlock.sixthBlock && <p className='tooltipbox'>{props.inputMainBlock.sixthSubBlock.sixthBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"seventhBlock Of 1 X 1"} name={"seventhBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.sixthSubBlock.seventhBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.sixthSubBlock.seventhBlock && <p className='tooltipbox'>{props.inputMainBlock.sixthSubBlock.seventhBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"eightthBlock Of 1 X 1"} name={"eightthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.sixthSubBlock.eightthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.sixthSubBlock.eightthBlock && <p className='tooltipbox'>{props.inputMainBlock.sixthSubBlock.eightthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"ninthBlock Of 1 X 1"} name={"ninthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.sixthSubBlock.ninthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.sixthSubBlock.ninthBlock && <p className='tooltipbox'>{props.inputMainBlock.sixthSubBlock.ninthBlock}</ p>}
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

export default SixthSubBlock;