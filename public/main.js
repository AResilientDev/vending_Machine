window.onload = function() {

  const twix = document.getElementById("twix");
  const kitKat = document.getElementById("kitKat");
  const polandSpring = document.getElementById("polandSpring");
  const ruffles = document.getElementById("ruffles");
  const fanta = document.getElementById("fanta");


  twix.addEventListener('click', function() {
    fetch('orders', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': 'Twix',
          'number': '1A'

        })
      })
      .then(response => {
        if (response.ok) return response.json()

      })
      .then(data => {

        window.location.reload() //page reload (another get request is triggered)
      })

  });
  kitKat.addEventListener('click', function() {
    fetch('orders', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': 'KitKat',
          'number':'1B'

        })
      })
      .then(response => {
        if (response.ok) return response.json()

      })
      .then(data => {

        window.location.reload() //page reload (another get request is triggered)
      })

  });
  polandSpring.addEventListener('click', function() {

    fetch('orders', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': 'Poland Spring',
          'number':'1C'
        })
      })
      .then(response => {
        if (response.ok) return response.json()

      })
      .then(data => {

        window.location.reload() //page reload (another get request is triggered)
      })

  });
  ruffles.addEventListener('click', function() {
    fetch('orders', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': 'Ruffles',
          'number':'1D'
        })
      })
      .then(response => {
        if (response.ok) return response.json()

      })
      .then(data => {

        window.location.reload() //page reload (another get request is triggered)
      })

  });
  fanta.addEventListener('click', function() {
    fetch('orders', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': 'Blue Raspberry Fanta',
          'number':'1E'
        })
      })
      .then(response => {
        if (response.ok) return response.json()

      })
      .then(data => {

        window.location.reload() //page reload (another get request is triggered)
      })

  });
}
