import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test('should render LoginPage', () => {
    const wrapper = shallow(<LoginPage></LoginPage>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}></LoginPage>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});