import sinon from 'sinon'

const sandbox = sinon.createSandbox()

afterEach(() => {
  sandbox.restore()
})

export default sandbox