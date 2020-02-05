const percent = {
        '1/2': 'calc(1/2 * 100%)',
        '1/3': 'calc(1/3 * 100%)', '2/3': 'calc(2/3 * 100%)',
        '1/4': 'calc(1/4 * 100%)', '2/4': 'calc(2/4 * 100%)', '3/4': 'calc(3/4 * 100%)',
        '1/5': 'calc(1/5 * 100%)', '2/5': 'calc(2/5 * 100%)', '3/5': 'calc(3/5 * 100%)', '4/5': 'calc(4/5 * 100%)',
        '1/6': 'calc(1/6 * 100%)', '2/6': 'calc(2/6 * 100%)', '3/6': 'calc(3/6 * 100%)', '4/6': 'calc(4/6 * 100%)', '5/6': 'calc(5/6 * 100%)',
        '1/12': 'calc(1/12 * 100%)', '2/12': 'calc(2/12 * 100%)', '3/12': 'calc(3/12 * 100%)', '4/12': 'calc(4/12 * 100%)', '5/12': 'calc(5/12 * 100%)', '6/12': 'calc(6/12 * 100%)', '7/12': 'calc(7/12 * 100%)', '8/12': 'calc(8/12 * 100%)', '9/12': 'calc(9/12 * 100%)', '10/12': 'calc(10/12 * 100%)', '11/12': 'calc(11/12 * 100%)',
        full: '100%',
      },
      viewportWidth = {
        '1/2-screen': 'calc(1/2 * 100vw)',
        '1/3-screen': 'calc(1/3 * 100vw)', '2/3-screen': 'calc(2/3 * 100vw)',
        '1/4-screen': 'calc(1/4 * 100vw)', '2/4-screen': 'calc(2/4 * 100vw)', '3/4-screen': 'calc(3/4 * 100vw)',
        '1/5-screen': 'calc(1/5 * 100vw)', '2/5-screen': 'calc(2/5 * 100vw)', '3/5-screen': 'calc(3/5 * 100vw)', '4/5-screen': 'calc(4/5 * 100vw)',
        '1/6-screen': 'calc(1/6 * 100vw)', '2/6-screen': 'calc(2/6 * 100vw)', '3/6-screen': 'calc(3/6 * 100vw)', '4/6-screen': 'calc(4/6 * 100vw)', '5/6-screen': 'calc(5/6 * 100vw)',
        '1/12-screen': 'calc(1/12 * 100vw)', '2/12-screen': 'calc(2/12 * 100vw)', '3/12-screen': 'calc(3/12 * 100vw)', '4/12-screen': 'calc(4/12 * 100vw)', '5/12-screen': 'calc(5/12 * 100vw)', '6/12-screen': 'calc(6/12 * 100vw)', '7/12-screen': 'calc(7/12 * 100vw)', '8/12-screen': 'calc(8/12 * 100vw)', '9/12-screen': 'calc(9/12 * 100vw)', '10/12-screen': 'calc(10/12 * 100vw)', '11/12-screen': 'calc(11/12 * 100vw)',
        screen: '100vw',
      },
      viewportHeight = {
        '1/2-screen': 'calc(1/2 * 100vh)',
        '1/3-screen': 'calc(1/3 * 100vh)', '2/3-screen': 'calc(2/3 * 100vh)',
        '1/4-screen': 'calc(1/4 * 100vh)', '2/4-screen': 'calc(2/4 * 100vh)', '3/4-screen': 'calc(3/4 * 100vh)',
        '1/5-screen': 'calc(1/5 * 100vh)', '2/5-screen': 'calc(2/5 * 100vh)', '3/5-screen': 'calc(3/5 * 100vh)', '4/5-screen': 'calc(4/5 * 100vh)',
        '1/6-screen': 'calc(1/6 * 100vh)', '2/6-screen': 'calc(2/6 * 100vh)', '3/6-screen': 'calc(3/6 * 100vh)', '4/6-screen': 'calc(4/6 * 100vh)', '5/6-screen': 'calc(5/6 * 100vh)',
        '1/12-screen': 'calc(1/12 * 100vh)', '2/12-screen': 'calc(2/12 * 100vh)', '3/12-screen': 'calc(3/12 * 100vh)', '4/12-screen': 'calc(4/12 * 100vh)', '5/12-screen': 'calc(5/12 * 100vh)', '6/12-screen': 'calc(6/12 * 100vh)', '7/12-screen': 'calc(7/12 * 100vh)', '8/12-screen': 'calc(8/12 * 100vh)', '9/12-screen': 'calc(9/12 * 100vh)', '10/12-screen': 'calc(10/12 * 100vh)', '11/12-screen': 'calc(11/12 * 100vh)',
        screen: '100vh',
      }

module.exports = {
  percent,
  viewportWidth,
  viewportHeight,
}
