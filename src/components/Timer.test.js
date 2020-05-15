import React from 'react';
import Timer from './Timer';
import { shallow } from 'enzyme';

describe('<Timer/> works properly', () => {
  const getWrapper = (props) => shallow(<Timer {...props} />);

  test('render current time', () => {
    const wrapper = getWrapper({
      initialTimeSeconds: 120,
      currentTimeSeconds: 100,
    });

    expect(wrapper.find('.clock').text()).toBe('01:40');
  });

  test('Text should be red', () => {
    const wrapper = getWrapper({
      initialTimeSeconds: 120,
      currentTimeSeconds: 20,
    });

    expect(wrapper.find('.warning'));
  });

  test('Text should not blink', () => {
    const wrapper = getWrapper({
      initialTimeSeconds: 120,
      currentTimeSeconds: 20,
    });

    expect(wrapper.find('.blinking')).toHaveLength(0);
  });

  test('Text should be blinking', () => {
    const wrapper = getWrapper({
      initialTimeSeconds: 120,
      currentTimeSeconds: 10,
    });

    expect(wrapper.find('.blinking')).toHaveLength(1);
  });

  test('Should have a message "More than halfway there!"', () => {
    const wrapper = getWrapper({
      initialTimeSeconds: 120,
      currentTimeSeconds: 10,
    });

    expect(wrapper.text()).toContain('More than halfway there!');
  });

  test('Should NOT have a message "More than halfway there!"', () => {
    const wrapper = getWrapper({
      initialTimeSeconds: 120,
      currentTimeSeconds: 100,
    });

    expect(wrapper.text()).not.toContain('More than halfway there!');
  });

  test('Should have a message "Time’s up!"', () => {
    const wrapper = getWrapper({
      initialTimeSeconds: 120,
      currentTimeSeconds: 0,
    });

    expect(wrapper.text()).toContain('Time’s up!');
  });
});
