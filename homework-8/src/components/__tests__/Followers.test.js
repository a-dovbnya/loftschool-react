import React from 'react';
import { shallow } from 'enzyme';
import { Followers } from '../Followers/Followers';
import Loader from 'react-svg-spinner';

describe('Компонент Followers', () => {
    it('соджержит метод componentDidMount', () => {
        const wrapper = shallow(<Followers fetchFollowersRequest={jest.fn()} />);
        expect(wrapper.instance().componentDidMount).toBeDefined();       
    });

    it('Содержит спиннер ', () => {
        const wrapper = shallow(<Followers fetchFollowersRequest={jest.fn()}  isFetching={true}/>);
        expect(wrapper.find(Loader)).toHaveLength(1);
    });

    it('возвращаются компоненты Followers в том количестве, в котором передаются в props.followers', () => {
        const followers = [{}, {}];
        const wrapper = shallow(<Followers fetchFollowersRequest={jest.fn()}  isFetching={false} followers={followers}/>);
        expect(wrapper.find('Follower')).toHaveLength(followers.length);
    });
});