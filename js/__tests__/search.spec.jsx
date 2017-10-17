import React from 'react';
// import rednerer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

test('Search renders corrctly', ()=>{
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', ()=>{
  const component = shallow(<Search />);
  // .find() <- you can pass react component name or css selector!!! how Cool!!
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search term', ()=>{
  const searchWord = 'black';
  component.find('input').silmulate('chnage', {target: {value: searchWord}});
  const showCount = 
});
  

