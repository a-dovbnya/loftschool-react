import React from 'react';
import { shallow } from 'enzyme';

import { Switch, Route, Redirect, MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../AppRouter/AppRouter';
import PrivateRoute from '../PrivateRouter';

describe('AppRouter', () => {

    const wrapper = shallow(<AppRouter />);

    it("В AppRouter должен содержаться компонент Switch", () => {
        expect(wrapper.find(Switch)).toHaveLength(1);
    });

    it('В AppRouter должен содержаться компонент PrivateRoute', () => {
        expect(wrapper.find(PrivateRoute)).not.toHaveLength(0);
    });

    it("В AppRouter должен содержаться компонент PrivateRoute с атрибутом path='/user/:name' ", () => {
        const privateRoute = wrapper.findWhere(
            el => el.type() === PrivateRoute && el.prop('path') === '/user/:name',
        );
        expect(privateRoute).toHaveLength(1);
      
    });

    it('В AppRouter должен содержаться компонент Route', () => {
        expect(wrapper.find(Route)).not.toHaveLength(0);
    });

    it("В AppRouter должен содержаться компонент Route c атрибутом path='/login' ", () => {
        const findRoutes = wrapper.findWhere(
          el => el.type() === Route && el.prop('path') === '/login',
        );
        expect(findRoutes).toHaveLength(1);
    });

    it('В AppRouter редирект на /user/me', () => {
        const findRedirects = wrapper.findWhere(
          el => el.type() === Redirect && el.prop('to') === '/user/me',
        );
        expect(findRedirects).toHaveLength(1);
    }); 

    
      it('Выводить кнопку logout если props.isAuthorized === true', () => {
        wrapper.setProps({ isAuthorized: true });
        expect(wrapper.find('.user-page__button')).toHaveLength(1);
      });
    
      it('Выводить сетевую ошибку networkError, если она передается через props.networkError', () => {
        wrapper.setProps({ networkError: 'network error' });
        expect(wrapper.find('.networkError')).toHaveLength(1);
      });
});