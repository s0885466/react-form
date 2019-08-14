import React from 'react';
import InputItem from './InputItem';
import {mount} from 'enzyme';

describe('Testing <InputItem/>', () => {
    const inputItem = mount(<InputItem/>);

    it('must set fa-smile', () => {
        inputItem.setProps({check:true});
        expect(inputItem.find('.fa-smile')).toHaveLength(1);
    });

    it('must set fa-frown', () => {
        inputItem.setProps({check:false});
        expect(inputItem.find('.fa-frown')).toHaveLength(1);
    });
});