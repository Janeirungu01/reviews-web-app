
const error = {
    color: 'red',
    fontsize:'16px'
    


}
function NotFound() {
  return (
    <>
      <h3>Page Not Found</h3>
      <p>Sorry, the page you are trying to access does not exist or has been moved to another server</p>
      <span className={error}>404 error</span>
    </>
  )
}

export default NotFound
