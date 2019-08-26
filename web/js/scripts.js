

//Navigate to my any url
function navigateTo(url, NewPage) {

  console.log('Navigating to: ', url, NewPage);
  if (NewPage !== undefined) {
    window.open(
      url,
      '_blank'
    );
  }
  else {
    window.open(
      url
    );
  }
}
