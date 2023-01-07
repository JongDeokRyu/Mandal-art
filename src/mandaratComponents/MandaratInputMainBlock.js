import React, { useState, useEffect } from 'react';
import MandaratInputModal from './MandaratInputModal';
import MandaratCss from '../css/MandaratCss.css';

const MandaratInputMainBlock = (props) => {

    const [isShow, setIsShow] = useState(false);
    const [currentMandaratValue , setCurrentMandaratValue] = useState('');
    const [currentMandaratName , setCurrentMandaratName] = useState('');

    const showMandaratInputModal = (e) => {
        setCurrentMandaratName(e.target.name);
        setCurrentMandaratValue(e.target.value);
        setIsShow(true)
    }

    const closeMandaratInputModal = () =>{
        setIsShow(false)
    }

    const onChangeInputElement = (name , value) => {

        let changeSubBlock = name;
        if (name === "firstBlock") {
            props.setInputMainBlock({
                ...props.inputMainBlock,
                [name]: value,
                firstSubBlock: {
                    ...props.inputMainBlock.firstSubBlock,
                    fifthBlock: value
                }
            })
        }
        if (name === "secondBlock") {
            props.setInputMainBlock({
                ...props.inputMainBlock,
                [name]: value,
                secondSubBlock: {
                    ...props.inputMainBlock.secondSubBlock,
                    fifthBlock: value
                }
            })
        }
        if (name === "thirdBlock") {
            props.setInputMainBlock({
                ...props.inputMainBlock,
                [name]: value,
                thirdSubBlock: {
                    ...props.inputMainBlock.thirdSubBlock,
                    fifthBlock: value
                }
            })
        }
        if (name === "fourthBlock") {
            props.setInputMainBlock({
                ...props.inputMainBlock,
                [name]: value,
                fourthSubBlock: {
                    ...props.inputMainBlock.fourthSubBlock,
                    fifthBlock: value
                }
            })
        }

        if (name === "fifthBlock"){
            props.setInputMainBlock({
                ...props.inputMainBlock,
                [name]:value
            })
        }

        if (name === "sixthBlock") {
            props.setInputMainBlock({
                ...props.inputMainBlock,
                [name]: value,
                sixthSubBlock: {
                    ...props.inputMainBlock.sixthSubBlock,
                    fifthBlock: value
                }
            })
        }
        if (name === "seventhBlock") {
            props.setInputMainBlock({
                ...props.inputMainBlock,
                [name]: value,
                seventhSubBlock: {
                    ...props.inputMainBlock.seventhSubBlock,
                    fifthBlock: value
                }
            })
        }
        if (name === "eightthBlock") {
            props.setInputMainBlock({
                ...props.inputMainBlock,
                [name]: value,
                eightthSubBlock: {
                    ...props.inputMainBlock.eightthSubBlock,
                    fifthBlock: value
                }
            })
        }
        if (name === "ninthBlock") {
            props.setInputMainBlock({
                ...props.inputMainBlock,
                [name]: value,
                ninthSubBlock: {
                    ...props.inputMainBlock.ninthSubBlock,
                    fifthBlock: value
                }
            })
            //조건식 빼기 배열하나 만들어서 state 관리
        }
    }

    useEffect(() => {
        console.log('props ---> ' , props)
    },[])
    return (
        <div>
            {/* <div>
                <input id={"firstBlock Of MainBlock"} name={"firstBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstBlock} onClick={showMandaratInputModal} readonly="readonly" ></input>
                <input id={"secondBlock Of MainBlock"} name={"secondBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.secondBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                <input id={"thirdBlock Of MainBlock"} name={"thirdBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.thirdBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
            </div>
            <div>
                <input id={"fourthBlock Of MainBlock"} name={"fourthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.fourthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                <input id={"fifthBlock Of MainBlock"} name={"fifthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.fifthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                <input id={"sixthBlock Of MainBlock"} name={"sixthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.sixthBlock} onClick={showMandaratInputModal} readonly="readonly" ></input>
            </div>
            <div>
                <input id={"seventhBlock Of MainBlock"} name={"seventhBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.seventhBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                <input id={"eightthBlock Of MainBlock"} name={"eightthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.eightthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
                <input id={"ninthBlock Of MainBlock"} name={"ninthBlock"} style={{ backgroundColor: 'yellow' }} className='mantramaMainBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.ninthBlock} onClick={showMandaratInputModal} readonly="readonly"></input>
            </div> */}

            {
                isShow &&
                <MandaratInputModal
                    currentMandaratName={currentMandaratName}
                    currentMandaratValue={currentMandaratValue}
                    isShow={isShow}
                    setIsShow={setIsShow}
                    onChangeInputElement={onChangeInputElement}
                    closeMandaratInputModal={closeMandaratInputModal}
                ></MandaratInputModal>
            }
        </div>
    )
}

export default MandaratInputMainBlock;