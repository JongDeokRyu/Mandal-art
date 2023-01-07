import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import Main from './main.css';
import MandaratCss from '../css/MandaratCss.css';
import FirstSubBlock from '../mandaratComponents/FirstSubBlock';
import SecondSubBlock from '../mandaratComponents/SecondSubBlock';
import ThirdSubBlock from '../mandaratComponents/ThirdSubBlock';
import FourthSubBlock from '../mandaratComponents/FourthSubBlock';
import MainBlock from '../mandaratComponents/MainBlock';
import SixthSubBlock from '../mandaratComponents/SixthSubBlock';
import SeventhSubBlock from '../mandaratComponents/SeventhSubBlock';
import EightthSubBlock from '../mandaratComponents/EightthSubBlock';
import NinthSubBlock from '../mandaratComponents/NinthSubBlock';

const MandaratPage = () => {

    const [inputMainBlock, setInputMainBlock] = useState({
        // 구조 수정

        mainBlock: {
            Id: "mainBlock",
            firstBlock: "",
            secondBlock: "",
            thirdBlock: "",
            fourthBlock: "",
            fifthBlock: "",
            sixthBlock: "",
            seventhBlock: "",
            eightthBlock: "",
            ninthBlock: ""
        },
        firstSubBlock: {
            Id: "firstSubBlock",
            firstBlock: "",
            secondBlock: "",
            thirdBlock: "",
            fourthBlock: "",
            fifthBlock: "",
            sixthBlock: "",
            seventhBlock: "",
            eightthBlock: "",
            ninthBlock: ""
        },
        secondSubBlock: {
            Id: "secondSubBlock",
            firstBlock: "",
            secondBlock: "",
            thirdBlock: "",
            fourthBlock: "",
            fifthBlock: "",
            sixthBlock: "",
            seventhBlock: "",
            eightthBlock: "",
            ninthBlock: ""
        },
        thirdSubBlock: {
            Id: "thirdSubBlock",
            firstBlock: "",
            secondBlock: "",
            thirdBlock: "",
            fourthBlock: "",
            fifthBlock: "",
            sixthBlock: "",
            seventhBlock: "",
            eightthBlock: "",
            ninthBlock: ""
        },
        fourthSubBlock: {
            Id: "fourthSubBlock",
            firstBlock: "",
            secondBlock: "",
            thirdBlock: "",
            fourthBlock: "",
            fifthBlock: "",
            sixthBlock: "",
            seventhBlock: "",
            eightthBlock: "",
            ninthBlock: ""
        },
        sixthSubBlock: {
            Id: "sixthSubBlock",
            firstBlock: "",
            secondBlock: "",
            thirdBlock: "",
            fourthBlock: "",
            fifthBlock: "",
            sixthBlock: "",
            seventhBlock: "",
            eightthBlock: "",
            ninthBlock: ""
        },
        seventhSubBlock: {
            Id: "seventhSubBlock",
            firstBlock: "",
            secondBlock: "",
            thirdBlock: "",
            fourthBlock: "",
            fifthBlock: "",
            sixthBlock: "",
            seventhBlock: "",
            eightthBlock: "",
            ninthBlock: ""
        },
        eightthSubBlock: {
            Id: "eightthSubBlock",
            firstBlock: "",
            secondBlock: "",
            thirdBlock: "",
            fourthBlock: "",
            fifthBlock: "",
            sixthBlock: "",
            seventhBlock: "",
            eightthBlock: "",
            ninthBlock: ""
        },
        ninthSubBlock: {
            Id: "ninthSubBlock",
            firstBlock: "",
            secondBlock: "",
            thirdBlock: "",
            fourthBlock: "",
            fifthBlock: "",
            sixthBlock: "",
            seventhBlock: "",
            eightthBlock: "",
            ninthBlock: ""
        }
    });


    return (
        <div className='Mains App-body'>
            <div id='Mains-left'>
            </div>
            <div className='right-body-style' >
                <div style={{ marginTop: '20px' }} className='mantramaTable'>
                    <div style={{ marginTop: '20px' }}></div>
                    <FirstSubBlock
                        inputMainBlock={inputMainBlock}
                        setInputMainBlock={setInputMainBlock}
                    ></FirstSubBlock>
                    <SecondSubBlock
                        inputMainBlock={inputMainBlock}
                        setInputMainBlock={setInputMainBlock}
                        ></SecondSubBlock>
                    <ThirdSubBlock
                        inputMainBlock={inputMainBlock}
                        setInputMainBlock={setInputMainBlock}
                        ></ThirdSubBlock>
                    <FourthSubBlock
                        inputMainBlock={inputMainBlock}
                        setInputMainBlock={setInputMainBlock}
                        ></FourthSubBlock>
                    <MainBlock
                        inputMainBlock={inputMainBlock}
                        setInputMainBlock={setInputMainBlock}
                        >
                    </MainBlock>
                    <SixthSubBlock
                        inputMainBlock={inputMainBlock}
                        setInputMainBlock={setInputMainBlock}
                        ></SixthSubBlock>
                    <SeventhSubBlock
                        inputMainBlock={inputMainBlock}
                        setInputMainBlock={setInputMainBlock}
                        ></SeventhSubBlock>
                    <EightthSubBlock
                        inputMainBlock={inputMainBlock}
                        setInputMainBlock={setInputMainBlock}
                        ></EightthSubBlock>
                    <NinthSubBlock
                        inputMainBlock={inputMainBlock}
                        setInputMainBlock={setInputMainBlock}
                        ></NinthSubBlock>
                </div>
            </div>
        </div>
    );
}

export default MandaratPage;