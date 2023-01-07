import React, { useState } from 'react';
import MandaratCss from '../css/MandaratCss.css';
import MandaratInputModal from './MandaratInputModal';

const ThirdSubBlock = (props) => {

    const [isShow, setIsShow] = useState(false);
    const [currentMandaratValue, setCurrentMandaratValue] = useState('');
    const [currentMandaratName, setCurrentMandaratName] = useState('');

    const showMandaratInputModal = (e) => {
        
        if(!!props.inputMainBlock.thirdSubBlock.fifthBlock){
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
            thirdSubBlock: {
                ...props.inputMainBlock.thirdSubBlock,
                [name]: value
            }
        })
    }


    return (
        <div className='mantramaSubTableStyle' style={{ display: 'inline-block', maxWidth: '310px' }}>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"firstBlock Of 1 X 1"} name={"firstBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.thirdSubBlock.firstBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.thirdSubBlock.firstBlock && <p className='tooltipbox'>{props.inputMainBlock.thirdSubBlock.firstBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"secondBlock Of 1 X 1"} name={"secondBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.thirdSubBlock.secondBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.thirdSubBlock.secondBlock && <p className='tooltipbox'>{props.inputMainBlock.thirdSubBlock.secondBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"thirBlock Of 1 X 1"} name={"thirdBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.thirdSubBlock.thirdBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.thirdSubBlock.thirdBlock && <p className='tooltipbox'>{props.inputMainBlock.thirdSubBlock.thirdBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"fourthBlock Of 1 X 1"} name={"fourthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.thirdSubBlock.fourthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.thirdSubBlock.fourthBlock && <p className='tooltipbox'>{props.inputMainBlock.thirdSubBlock.fourthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"fifthBlock Of 1 X 1"} name={"fifthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.thirdSubBlock.fifthBlock} readonly="readonly"></input>
                    {props.inputMainBlock.thirdSubBlock.fifthBlock && <p className='tooltipbox'>{props.inputMainBlock.thirdSubBlock.fifthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"sixthBlock Of 1 X 1"} name={"sixthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.thirdSubBlock.sixthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.thirdSubBlock.sixthBlock && <p className='tooltipbox'>{props.inputMainBlock.thirdSubBlock.sixthBlock}</ p>}
                </div>
            </div>
            <div>
                <div className='input-tooltipbox'>
                    <input id={"seventhBlock Of 1 X 1"} name={"seventhBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.thirdSubBlock.seventhBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.thirdSubBlock.seventhBlock && <p className='tooltipbox'>{props.inputMainBlock.thirdSubBlock.seventhBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"eightthBlock Of 1 X 1"} name={"eightthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.thirdSubBlock.eightthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.thirdSubBlock.eightthBlock && <p className='tooltipbox'>{props.inputMainBlock.thirdSubBlock.eightthBlock}</ p>}
                </div>
                <div className='input-tooltipbox'>
                    <input id={"ninthBlock Of 1 X 1"} name={"ninthBlock"} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.thirdSubBlock.ninthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                    {props.inputMainBlock.thirdSubBlock.ninthBlock && <p className='tooltipbox'>{props.inputMainBlock.thirdSubBlock.ninthBlock}</ p>}
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

export default ThirdSubBlock;