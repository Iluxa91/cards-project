import React from 'react';
import SuperEditableSpan from './EditableSpan/SuperEditableSpan';
import SuperButton from './SuperButton/SuperButton';
import SuperCheckbox from './SuperCheckbox/SuperCheckbox';
import SuperRadio from './SuperRadio/SuperRadio';
import SuperSelect from './SuperSelect/SuperSelect';

export const CommonComponents = () => {
    return (
        <div>
            <SuperEditableSpan value={'SuperEditableSpan'}/>
            <SuperButton/>
            <SuperCheckbox/>
            <SuperRadio/>
            <SuperSelect/>
        </div>
    );
};
