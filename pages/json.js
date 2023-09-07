var cards = document.getElementById("cards");

var dani = fetch("naext.json");

dani.then((d) => {
    return d.json();
})
    .then((data) => {
        data.forEach((val, ind) => {
            cards.innerHTML += ` <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="card" >
              <img src="../img/${val.img}" height='300px' width='400px' class="he">
              <div class="card__content bg-dark">
                <p class="card__title text-light"> ${val.name}
                </p>
                <p class="card__description"> ${val.paragraph}</p>
                <a href="" class="btn btn-danger mt-2 mb-2"> ${val.btntext}</a>
              </div>
            </div>
          </div>`
        });
    })

    .catch(() => {
        ("File Not Working")
    })