lang();
function lang() {
  if( window.localStorage )
  {
    if( !localStorage.getItem('langue') )
    {
      window.location.reload();
      charge()
    }
  }
}
function charge() {
  if (!localStorage.getItem("langue")) {
    localStorage.setItem("langue", "français");
    change.forEach(element => element.textContent = "english");
  }
}
