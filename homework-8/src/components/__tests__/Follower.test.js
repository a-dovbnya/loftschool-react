import React from 'react';
import { shallow, mount } from 'enzyme';
import { Follower } from '../Follower/Follower';
import { MemoryRouter, Link } from 'react-router-dom';

describe('Компонент Follower ', () => { 

    it('Содержит аватар', () => {
        const wrapper = shallow(<Follower followerData={{}} />);        
        expect(wrapper.find('.follower__img')).toHaveLength(1);
    });

    it('Содержит login пользователя переданного через props', () => {
        const login = 'testUser';
        const wrapper = mount(
          <MemoryRouter>
            <Follower followerData={{ login }} />
          </MemoryRouter>,
        );
        expect(wrapper.find('Follower').prop('followerData').login).toBe(login);
      });

      it('Ссылка с логина пользователя ведет на /user/{user.login}', () => {
        const login = 'testUser';
        const wrapper = mount(
          <MemoryRouter>
            <Follower followerData={{ login }} />
          </MemoryRouter>,
        );
        const link = wrapper.findWhere(el => {
          return el.type() === Link && el.prop('to') === `/user/${login}`;
        });
        expect(link).toHaveLength(1);
      });

});
