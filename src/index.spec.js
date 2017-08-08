import { fn } from './index'

describe('convert color plugin', () => {
  it('includes main function', () => {
    expect(typeof fn).toEqual('function')
  })

  it('parses hex color', () => {
    const display = jest.fn()
    const term = '#AABB00'
    fn({term, display})
    expect(display).toBeCalledWith(expect.objectContaining({
      title: "Conversion for code #AABB00"
    }))
  })

  it('parses short hex color', () => {
    const display = jest.fn()
    const term = '#000'
    fn({term, display})
    expect(display).toBeCalledWith(expect.objectContaining({
      title: "Conversion for code #000"
    }))
  })

  it('parses full rgba color', () => {
    const display = jest.fn()
    const term = 'rgba(255, 100, 50, 0.5)'
    fn({term, display})
    expect(display).toBeCalledWith(expect.objectContaining({
      title: "Conversion for code rgba(255, 100, 50, 0.5)"
    }))
  })

  it('parses rgba color with short alfa-channel', () => {
    const display = jest.fn()
    const term = 'rgba(255, 100, 50, .5)'
    fn({term, display})
    expect(display).toBeCalledWith(expect.objectContaining({
      title: "Conversion for code rgba(255, 100, 50, .5)"
    }))
  })

  it('parses hsl color', () => {
    const display = jest.fn()
    const term = 'hsl(360, 100%, 50%)'
    fn({term, display})
    expect(display).toBeCalledWith(expect.objectContaining({
      title: "Conversion for code hsl(360, 100%, 50%)"
    }))
  })

  it('parses word colors', () => {
    const display = jest.fn()
    const term = 'blue'
    fn({term, display})
    expect(display).toBeCalledWith(expect.objectContaining({
      title: "Conversion for code blue"
    }))
  })
})