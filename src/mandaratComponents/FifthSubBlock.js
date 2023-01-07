import React, { useEffect } from 'react';
import MandaratCss from '../css/MandaratCss.css';

const FifthSubBlock = (props) => {

    const onChangeInputElement = (e) => {
        const { value , name } = e.target;
        console.log('e.target ---> ' ,e.target);
        props.setInputMainBlock({
            ...props.inputMainBlock,
            [name] : value ,
        })
    }

    useEffect(() => {
        console.log('props.inputMainBlock ---> ' , props.inputMainBlock)
    },[props.inputMainBlock])

    return (
        <div className='mantramaSubTableStyle'  style={{ display: 'inline-block', maxWidth: '310px' }}>
            <div>
                <input id={"firstBlock Of 1 X 1"} name={"firstSubBlock.firstBlock"}  className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.firstBlock}></input>
                <input id={"secondBlock Of 1 X 1"} name={"secondBlock Of 1 X 1"}  className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.secondBlock}></input>
                <input id={"thirBlock Of 1 X 1"} name={"thirBlock Of 1 X 1"}  className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.thirBlock}></input>
            </div>
            <div>
                <input id={"fourthBlock Of 1 X 1"} name={"fourthBlock Of 1 X 1"}  className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.fourthBlock}></input>
                <input id={"fifthBlock Of 1 X 1"} name={"fifthBlock Of 1 X 1"} style={{ backgroundColor: 'yellow' }} className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.fifthBlock}></input>
                <input id={"sixthBlock Of 1 X 1"} name={"sixthBlock Of 1 X 1"}  className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.sixthBlock}></input>
            </div>
            <div>
                <input id={"seventhBlock Of 1 X 1"} name={"seventhBlock Of 1 X 1"}  className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.seventhBlock}></input>
                <input id={"eightthBlock Of 1 X 1"} name={"eightthBlock Of 1 X 1"}  className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.eightthBlock}></input>
                <input id={"ninthBlock Of 1 X 1"} name={"ninthBlock Of 1 X 1"}  className='mantramaBlockStyle' onChange={onChangeInputElement} defaultValue={props.inputMainBlock.firstSubBlock.ninthBlock}></input>
            </div>
        </div>
    )
}

export default FifthSubBlock;