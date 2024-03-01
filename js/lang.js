lang();
function lang() {
  if( window.sessionStorage )
  {
    if( !sessionStorage.getItem('langue') )
    {
      window.location.reload();
      charge()
    }
  }
}
function charge() {
  if (!sessionStorage.getItem("langue")) {
    sessionStorage.setItem("langue", "français");
    change.forEach(element => element.textContent = "english");
  }
}
