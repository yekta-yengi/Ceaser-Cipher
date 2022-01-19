/* eslint-disable no-lone-blocks */
import {React, useState, useEffect} from 'react';
import "./Form.css"

function Forms() {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z'];

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
            }
            else{
                console.log('Error occured');
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
        if((inputText && shiftNum) && (inputText.length > 0 )){
            let text = inputText;
            let num = parseInt(shiftNum);
            shiftString(text,num);           
        }
    }
    

// inputlardan veriyi nasıl alacağımı bulmam lazım.
    return (
        <div className='formContainer'>
            <input className='inputNum' type={"number"} onChange={handleNumChange}></input>
            <input className='inputTxt' type={"text"} onChange={handleTextChange}></input>
            
            <p>{shiftedText}</p>
        </div>
    );
}

export default Forms


{/*
    <Formik
            initialValues={{
                textInp : '',
                numInp : 0
            }
            }
            validationSchema = {Yup.object({
                textInp: Yup.string()
                    .max(30,'Must be 30 char or less')
                    .required('Required'),
                numInp: Yup.number()
                    .required
            })}
        >
            <Form>
                <TextInput
                    label="Text"
                    name="textInp"
                    type="text"
                    placeholder="Ceaser cipher"
                />
                <NumInput
                    label="Shift"
                    name="numInp"
                    type="num"
                    placeholder="Shift * times"
                />
            </Form>

        </Formik> */}
