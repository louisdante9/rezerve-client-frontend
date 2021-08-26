const Comingsoon = () => (
    <div style={{background: '#212529'}}>
    <div class="container">
        <div class="row align-items-center min-vh-100 ">
            <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8  col-md-12 col-12">
                <div class="text-center">
                    <h1 class="display-4 text-white">We Are Coming Soon</h1>
                    <p class=" h3 text-white">We are working to bring the new site live soon! Dont forget to subscribe to our newsletter.</p>
                    <div class="countdown p-2 p-md-5">
                        <ul class="list-inline">
                            <li class="list-inline-item me-md-5">
                                <p class="h4 font-weight-bold text-white">Days</p>
                                <span class="days display-4 font-weight-bold text-white">OO</span>
                            </li>
                            <li class="list-inline-item me-md-5">
                                <p class="h4 font-weight-bold text-white">Hours</p>
                                <span class="hours display-4 font-weight-bold text-white">OO</span>
                            </li>
                            <li class="list-inline-item me-md-5">
                                <p class="h4 font-weight-bold text-white">Minutes</p>
                                <span class="minutes display-4 font-weight-bold text-white">OO</span>
                            </li>
                            <li class="list-inline-item me-md-5">
                                <p class="h4 font-weight-bold text-white">Seconds</p>
                                <span class="seconds display-4 font-weight-bold text-white">OO</span>
                            </li>
                        </ul>
                    </div>
                    <form class="row g-2 mb-3 px-md-8 ps-0 pe-5">
                        <div class="col-md-9 col-9">
                            <input type="email" class="form-control border-0" id="email" placeholder="Email address" required/>
                        </div>
                        <div class="col-md-3 col-3">
                            <button type="submit" class="btn btn-primary">Subscribe</button>
                        </div>
                    </form>
                    <span class="text-white">Subscribe to our newsletter & stay update!</span>
                    <ul class="nav justify-content-center mt-4">
                        <li class="nav-item"><a href="#" class="nav-link text-white"><span class="mdi-24px mdi mdi-facebook"></span></a></li>
                        <li class="nav-item"><a href="#" class="nav-link text-white"><span class="mdi-24px mdi mdi-twitter"></span></a></li>
                        <li class="nav-item"><a href="#" class="nav-link text-white"><span class="mdi-24px mdi mdi-linkedin"></span></a></li>
                        <li class="nav-item"><a href="#" class="nav-link text-white"><span class="mdi-24px mdi mdi-google"></span></a></li>
                      <li class="nav-item"><a href="#" class="nav-link text-white"><span class="mdi-24px mdi mdi-instagram"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
)

export default Comingsoon