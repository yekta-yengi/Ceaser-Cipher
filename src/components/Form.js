/* eslint-disable no-lone-blocks */
import {React, useState, useEffect} from 'react';
import "./Form.css"

function Forms() {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z'];
    const digit = ['0','1','2','3','4','5','6','7','8','9'];

    const [inputText, setInputText] = useState(null);
    const [shiftNum, setShiftNum] = useState(null);
    const [shiftedText, setShiftedText] = useState("");

    useEffect(() => {
        handleShift();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputText, shiftNum])

    function shiftString(str,num){
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
            let char = str[i],
                isUpper = char === char.toUpperCase() ? true : false;
    
            char = char.toLowerCase();
    
            if (alphabet.indexOf(char) > -1) {
                console.log(alphabet.indexOf(char) + " Before index");
                let newIndex = alphabet.indexOf(char) + num;
                console.log(newIndex +  " After index");
                if(newIndex < alphabet.length && newIndex) {
                    isUpper ? newStr += alphabet[newIndex].toUpperCase() : newStr += alphabet[newIndex];
                    console.log(newStr)
                } else {
                    let shiftedIndex = -(alphabet.length - newIndex);
                    isUpper ? newStr += alphabet[shiftedIndex].toUpperCase() : newStr += alphabet[shiftedIndex];
                    console.log(newStr)
                }
            }else if(char ===' '){
               newStr += char;
            }else if(digit.indexOf(char) > -1){
                let newIndex = digit.indexOf(char) + num;
                console.log("number " + newIndex +  " After index");
                if(newIndex < digit.length && newIndex) {
                    newStr += digit[newIndex];
                    console.log(newStr)
                } else {
                    let shiftedIndex = -(digit.length - newIndex);
                    newStr += digit[shiftedIndex];
                    console.log(newStr)
                }
            }
            else{
                console.log('Check your character exist in English alphabet');
            }
        }
        return setShiftedText(newStr);
    }

    const handleTextChange = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    }
    const handleNumChange = (e) => {
        e.preventDefault();
        setShiftNum(e.target.value);
    }
    const handleShift = () => {
        if((inputText && shiftNum) && (inputText.length >= 0 && shiftNum > 0)){
            let text = inputText;
            let num = parseInt(shiftNum);
            shiftString(text,num);           
        }
    }
    


    return (
        <div className='formContainer'>
            <input className='inputNum' type={"number"} onChange={handleNumChange}></input>
            <input className='inputTxt' type={"text"} onChange={handleTextChange}></input>
            
            <p>{shiftedText}</p>
        </div>
    );
}

export default Forms
