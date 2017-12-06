import React from 'react';
import { shallow } from 'enzyme';

import { UserPage } from '../UserPage/UserPage';
import { Followers } from '../Followers/Followers';
import { fetchUserRequest } from "../../actions/users";
import Loader from 'react-svg-spinner';


describe('Компонент UserPage ', () => {

    describe('Содержит метод ', () => {

        const match = { params: { name: 'User123' } };
        const wrapper = shallow(<UserPage match={match} fetchUserRequest={jest.fn()} />);
    
        it('componentDidMount', () => {
            expect(wrapper.instance().componentDidMount).toBeDefined();       
        });
    
        it('componentWillReceiveProps', () => {
            expect(wrapper.instance().componentWillReceiveProps).toBeDefined();       
        });

    });

    describe('Содержит спиннер ', () => {
        const match = { params: { name: 'User123' } };
        const fetchUserRequestMock = jest.fn();
        const wrapper = shallow(<UserPage match={match} fetchUserRequest={fetchUserRequestMock} isFetching={true}/>);

        it('если props.isFetching === true', () => {
            expect(wrapper.find(Loader)).toHaveLength(1);
        });
    });

    describe('Содержит сообщение об ошибке ', () => {
        const match = { params: { name: 'User123' } };
        const fetchUserRequestMock = jest.fn();
        const wrapper = shallow(<UserPage match={match} fetchUserRequest={fetchUserRequestMock} isFetching={false} user={null}/>);

        it('isFetching === false && user == null', () => {
            expect(wrapper.find('.error-msg')).toHaveLength(1);
        });
    });

    describe('В основной верстке должен быть', () => {
        const match = { params: { name: 'User123' } };
        const fetchUserRequestMock = jest.fn();
        const wrapper = shallow(<UserPage match={match} fetchUserRequest={fetchUserRequestMock} isFetching={false} user={[]}/>);

        it('Аватар пользователя', () => {
            expect(wrapper.find('.user__ava')).toHaveLength(1);
        });
        it('login пользователя', () => {
            expect(wrapper.find('.user__login')).toHaveLength(1);
        });
        it('Количество фаловеров пользователя,', () => {
            expect(wrapper.find('.user__followers')).toHaveLength(1);
        });
        it('компонент Followers с передачей login через props', () => {
            const login = 'testUser';
            wrapper.setProps({ user: { login } });
            expect(wrapper.find('Connect(Followers)').prop('login')).toBe(login);
        });
    })
    
});