import React from 'react';
import { shallow } from 'enzyme';

import { Switch, Route, Redirect, MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../AppRouter/AppRouter';
import PrivateRoute from '../PrivateRouter';

describe('AppRouter', () => {

    it("В AppRouter должен содержаться компонент Switch", () => {
        const wrapper = shallow(<AppRouter />);
       //console.log("wrapper = ", wrapper);
        //console.log(wrapper.debug());
        expect(wrapper.find(Switch)).toHaveLength(1);
        
    });

    it('В AppRouter должен содержаться компонент PrivateRoute', () => {
        const wrapper = shallow(<AppRouter />);
        expect(wrapper.find(PrivateRoute)).toHaveLength(1);
    });

    it("В AppRouter должен содержаться компонент PrivateRoute с атрибутом path='/user/:name' ", () => {
        const wrapper = shallow(<AppRouter />);
        const prop = wrapper.find(PrivateRoute).prop('path');
        expect(prop).toBe('/user/:name');
    });

    it('В AppRouter должен содержаться компонент Route', () => {
        const wrapper = shallow(<AppRouter />);
        expect(wrapper.find(Route)).not.toHaveLength(0);
    });

    it("В AppRouter должен содержаться компонент Route c атрибутом path='/login' ", () => {
        const wrapper = shallow(<AppRouter />);
        const findRoutes = wrapper.findWhere(
          el => el.type() === Route && el.prop('path') === '/login',
        );
        expect(findRoutes).toHaveLength(1);
    });

    it('В AppRouter редирект на /user/dex157', () => {
        const wrapper = shallow(<AppRouter />);
        const findRedirects = wrapper.findWhere(
          el => el.type() === Redirect && el.prop('to') === '/user/dex157',
        );
        expect(findRedirects).toHaveLength(1);
    }); 

});