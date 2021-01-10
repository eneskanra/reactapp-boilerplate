import { render } from "node-sass";
import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}></Header>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}></Header>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});