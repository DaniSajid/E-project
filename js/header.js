if(document.querySelector("header")){
    document.querySelector("header")
    document.querySelector("header").innerHTML =`
    <!-- icon start -->
    <div class="nan">
      <a href="#" class="fa fa-facebook dj"></a>
    <a href="#" class="fa fa-twitter dj"></a>
    <a href="#" class="fa fa-instagram dj"></a>
    <a href="#" class="fa fa-youtube dj"></a>
    <a href="#" class="fa fa-snapchat dj"></a>
  </div>
               <!-- icon end -->
    <!-- nav bar start -->
    <nav class="navbar navbar-expand-lg bg-dark ">
      <div class="container-fluid clor">
        <img src="/img/class.png" alt="Avatar Logo" style="width:130px;" class="rounded-pill">
        <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
        </button>
        <div class="collapse navbar-collapse  " id="navbarNav">
          <nav class="navbar navbar-light">
            <div class="container-fluid">
              <span class="navbar-brand high mb-0 h1 mt-2 me-5 text-light animate-charcter">Galleria</span>
            </div>
          </nav>
          <ul class="navbar-nav ms-auto navtext ">
            <li class="nav-item h6 text-dark mt-3">
              <a class="nav-link active text-light fw-bold" aria-current="page" href="/index.html">Home
                <a>
            </li>
            <li class="nav-item h6 text-dark mt-3">
              <a class="nav-link text-light fw-bold" href="/pages/about.html">About us</a>
            </li>
            <li class="nav-item h6 text-dark mt-3">
              <a class="nav-link text-light fw-bold" href="/pages/gall.html">
                Gallery
              </a>
            </li>
            <li class="nav-item h6 text-dark mt-3">
              <a class="nav-link text-light fw-bold" href="/pages/cont.html">
                Contact
              </a>
            </li>
            <li class="nav-item h6 text-dark mt-3">
              <a class="nav-link text-light fw-bold" href="/pages/pant.html">
                Painting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `
  }