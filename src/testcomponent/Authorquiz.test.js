import React from 'react'
import { isMainThread } from 'worker_threads'
//import AuthourQuiz from './authourQuiz'

describe("Author quiz",()=>{
  it("renders without crashing",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<AuthourQuiz/> ,div)
  })
})