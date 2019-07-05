function getComponent() {
  return import(/* webpackChunkName:"lodash" */ 'loadsh').then(({ default: _ }) => {
    var element = document.createElement('div')
    element.innerText = _.join(['chen', 'zhang'], '-')
    return element
  })
}

getComponent().then(e => {
  document.body.appendChild(e)
})