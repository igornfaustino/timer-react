import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App /> works properly', () => {
  const getWrapper = () => shallow(<App />);

  test('play button', () => {
    const wrapper = getWrapper();
    wrapper.find('#playBtn').simulate('click');
    expect(wrapper.find('#playBtn').text()).toBe('Pause');
  });

  test('speed button 1x', () => {
    const wrapper = getWrapper();
    wrapper.find('#btn1x').simulate('click');
    expect(wrapper.find('#btn1x').find('.selected')).toHaveLength(1);
    expect(wrapper.find('#btn1_5x').find('.selected')).toHaveLength(0);
    expect(wrapper.find('#btn2x').find('.selected')).toHaveLength(0);
  });

  test('speed button 1.5x', () => {
    const wrapper = getWrapper();
    wrapper.find('#btn1_5x').simulate('click');
    expect(wrapper.find('#btn1x').find('.selected')).toHaveLength(0);
    expect(wrapper.find('#btn1_5x').find('.selected')).toHaveLength(1);
    expect(wrapper.find('#btn2x').find('.selected')).toHaveLength(0);
  });

  test('speed button 2x', () => {
    const wrapper = getWrapper();
    wrapper.find('#btn2x').simulate('click');
    expect(wrapper.find('#btn1x').find('.selected')).toHaveLength(0);
    expect(wrapper.find('#btn1_5x').find('.selected')).toHaveLength(0);
    expect(wrapper.find('#btn2x').find('.selected')).toHaveLength(1);
  });

  test('minutes input', () => {
    const wrapper = getWrapper();
    wrapper.find('#minutes').simulate('change', { target: { value: 2 } });
    expect(wrapper.find('#minutes').prop('value')).toBe(2);
    expect(wrapper.find('Timer').prop('initialTimeSeconds')).toBe(120);
  });
});
