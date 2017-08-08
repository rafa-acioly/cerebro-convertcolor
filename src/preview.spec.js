import React from 'react';
import Preview from './preview'
import renderer from 'react-test-renderer';
import Color from 'color'

describe('preview', () => {
  const getColor = () => ({
    hex: '#000',
    rgb: 'rgb(0, 0, 0)',
    hsl: 'hsl(0, 0%, 0%)',
  })
  const getActions = () => ({
    copyToClipboard: jest.fn(),
    hideWindow: jest.fn()
  })
  
  it('renders preview and matches snapshot', () => {
    const component = renderer.create(
      <Preview color={getColor()} actions={getActions()} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('choosing element copies color to clipboard', () => {
    const actions = getActions()
    const component = renderer.create(
      <Preview color={getColor()} actions={actions} />
    );
    const tree = component.toJSON();
    tree.children[0].children[0].props.onSelect()
    expect(actions.copyToClipboard).toBeCalledWith('#000')

    tree.children[0].children[1].props.onSelect()
    expect(actions.copyToClipboard).toBeCalledWith('rgb(0, 0, 0)')

    tree.children[0].children[2].props.onSelect()
    expect(actions.copyToClipboard).toBeCalledWith('hsl(0, 0%, 0%)')
  })
})