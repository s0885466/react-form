import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

const app = shallow(<App/>);

describe('Testing state <App/>', () => {

    it('<App/> have rendered correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('inputs state inputs is array', () => {
        expect(app.state().inputs).toBeArray();
    });

    it('submit state is object', () => {
        expect(app.state().submit).toBeObject();
    });

    it('textArea state is object', () => {
        expect(app.state().textArea).toBeObject();
    });

    it('progressBar state is object', () => {
        expect(app.state().progressBar).toBeObject();
    });
});

describe('testing onSubmitClick() <App/>', () => {
    it('testing onSubmitClick()', () => {
        app.instance().onSubmitClick();
        expect(app.state().progressBar).toEqual({percent: 0});
        expect(app.state().textArea).toEqual({class: 'show'});
    });
});

describe('testing checkInput(id, value)', () => {
    const check = (id, str, check) => {
        app.instance().checkInput(id, str);
        let index = app.state().inputs.findIndex(el => el.id === id);
        expect(app.state().inputs[index].check).toBe(check);
    };

    it('testing checkInput id=email', () => {
        check('email', 'dfsfsfsfs@f' , true);
        check('email', 'dfsfsfddsf' , false);
    });

    it('testing checkInput id=phone', () => {
        check('phone', '89110885466' , true);
        check('phone', '323424' , false);
    });

});