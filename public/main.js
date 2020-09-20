var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function() {
    const id = this.parentNode.parentNode.childNodes[1].innerText
    const money = this.parentNode.parentNode.childNodes[5].innerText
    console.log(id)
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'id': id,
      })
    }).then(function(response) {
      window.location.reload()
    })
  });
});
