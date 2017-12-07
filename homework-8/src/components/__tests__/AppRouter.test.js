import React from 'react';
import { shallow } from 'enzyme';

import { Switch, Route, Redirect, MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../AppRouter/AppRouter';
import PrivateRoute from '../PrivateRouter';

describe('AppRouter', () => {

    it("В AppRouter должен содержаться компонент Switch", () => {
        const wrapper = shallow(<AppRouter />);
        expect(wrapper.find(Switch)).toHaveLength(1);
        
    });

    it('В AppRouter должен содержаться компонент PrivateRoute', () => {
        const wrapper = shallow(<AppRouter />);
        expect(wrapper.find(PrivateRoute)).not.toHaveLength(0);
    });

    it("В AppRouter должен содержаться компонент PrivateRoute с атрибутом path='/user/:name' ", () => {
        const wrapper = shallow(<AppRouter />);
        const privateRoute = wrapper.findWhere(
            el => el.type() === PrivateRoute && el.prop('path') === '/user/:name',
        );
        expect(privateRoute).toHaveLength(1);
      
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

    it('В AppRouter редирект на /user/me', () => {
        const wrapper = shallow(<AppRouter />);
        const findRedirects = wrapper.findWhere(
          el => el.type() === Redirect && el.prop('to') === '/user/me',
        );
        expect(findRedirects).toHaveLength(1);
    }); 

});