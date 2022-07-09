import React, {useState} from 'react';
import SuperEditableSpan from './EditableSpan/SuperEditableSpan';
import SuperButton from './SuperButton/SuperButton';
import SuperCheckbox from './SuperCheckbox/SuperCheckbox';
import SuperRadio from './SuperRadio/SuperRadio';
import SuperSelect from './SuperSelect/SuperSelect';
import s from './commonComponents.module.css'
import SuperInputText from "./SuperInputText/SuperInputText";

export const CommonComponents = () => {
    const [text, setText] = useState('SuperEditableSpan')
    const error = text ? '' : 'error'
    const arr = ['Minsk', 'Kiev', 'Tbilisi']
    const [value, setValue] = useState(arr[0])
    return (
        <div className={s.container}>
            <div>
                <SuperEditableSpan value={text} onChangeText={setText}/>
            </div>
            <div>
                <SuperButton disabled>SuperButton</SuperButton>
            </div>
            <div>
                <SuperCheckbox>SuperCheckbox</SuperCheckbox>
            </div>
            <div>
                <SuperInputText value={text} onChangeText={setText} error={error}/>
            </div>
            <div>
                <SuperRadio name={'radio'} options={arr} value={value} onChangeOption={setValue}/>
            </div>
            <div>
                <SuperSelect options={arr} value={value} onChangeOption={setValue}/>
            </div>
        </div>
    );
};
