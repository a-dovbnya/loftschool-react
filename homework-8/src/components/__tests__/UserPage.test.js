import React from 'react';
import { shallow } from 'enzyme';

//import { Switch, Route, Redirect } from 'react-router-dom';
import UserPage from '../UserPage/UserPage';
import { fetchUserRequest } from "../../actions/users";
//import PrivateRoute from '../PrivateRouter';

describe('UserPage', () => {
    it('В компоненте UserPage должен быть метод componentDidMount', () => {
        const match = { params: { name: 'User123' } };
        const fetchUserRequestMock = jest.fn();
        const wrapper = shallow(<UserPage match={match} fetchUserRequest={fetchUserRequestMock(fetchUserRequest)} />);
        console.log(wrapper);
        console.log(wrapper.debug());
        expect(wrapper.at(0).instance().componentDidMount).toBeDefined();
       
    });
});