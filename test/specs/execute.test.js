describe('::::::::::::    BROWSER EXECUTE EXAMPLE  :::::::::::::', () => {
  it('should change something on the client-side browser page', () => {
    browser.url('http://www.google.com')
    browser.pause(3000)
    const params = {
      message: 'Look ma, I got changed!'
    }
    const newMessage = browser.execute(({ message }) => {
      // Remember - this executes on client-side javascript NOT node
      //          - no access to client (browser) & console objects
      document.querySelector('.NKcBbd').textContent = message
      return message
    }, params)
    console.log('NEW MESSAGE ====> ', newMessage)
    browser.pause(3000)
  })
})