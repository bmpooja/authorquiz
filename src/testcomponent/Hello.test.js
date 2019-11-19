import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


function Hello(props) {
  return <h1>hello at {props.now}</h1>;
}

const moment = new Date(1324356678000)
describe("when testing directly", () => {
  let result;

  beforeAll(() => {
    result = Hello({ now: moment.toISOString() });
  });

  it("should fail ", () => {
    expect(1 + 1).toBe(3);
  });

  it("return a value", () => {
    expect(result).not.toBeNull();
  });

  it("is a high",()=>{
    expect(result.type).toBe("h1")
  })

  it("element has children",()=>{
    expect(result.props.children).toBeTruthy()
  })
});

describe( "when testing with ReactDOM",()=>{
  it("renders without crashing",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<Hello now={moment.toISOString()}/>,div)
  })
})

Enzyme.configure({adapter: new Adapter()})

describe("when testing with enzyme",()=>{
  it("renders hi ",()=>{
    const wrapper = shallow(<Hello now = {moment.toISOString()}/>)
    expect(wrapper.find("h1").length).toBe(1)
  })
 })
