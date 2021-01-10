import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";

test('should render expense Not Found page', () => {
    const wrapper = shallow(<NotFoundPage></NotFoundPage>);
    expect(wrapper).toMatchSnapshot();
});