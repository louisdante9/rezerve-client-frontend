import { Link } from 'react-router-dom'
const Contact = () => (
  <>
    {/* <!-- pageheader --> */}
    <div class="py-6 py-lg-8 ">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-8  col-12">
            {/* <!-- content --> */}
            <h1 class="display-5 fw-bold mb-2">How Can We Help You?</h1>
            <p class="lead">In case you have any questions, suggestions or if you just want to have a general talk with
              us. </p>
            <nav aria-label="breadcrumb" class="mt-5">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active">Contact us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
     {/* <!-- section contact info --> */}
    <div class="pb-lg-12 pb-7">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-12">
            {/* <!-- card --> */}
            <div class="card mb-4">
              <div class="card-body p-4">
                <h4 class="mb-3">Address</h4>
                <p class="mb-3 pe-4">300 Tetrick Road Fort Myers, London 33912</p>
                <a href="#" class="btn-link">office@rentkit.com</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            {/* <!-- card --> */}
            <div class="card mb-4">
              <div class="card-body p-4">
                <h4 class="mb-3">Contact info</h4>
                <p class="mb-3 pe-4">Talk to us and see how we can work together</p>
                <a href="#" class="btn-link">info@rentkit.com</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            {/* <!-- card --> */}
            <div class="card mb-4">
              <div class="card-body p-4">
                <h4 class="mb-3">Host Support</h4>
                <p class="mb-3 pe-4">Quickly identify you and get you the right kind of help</p>
                <a href="#" class="btn-link">host@rentkit.com</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-8">
          <div class="col-lg-8 col-md-12 col-12">
            <div>
              <h2 class="mb-5">Get in touch with our support team</h2>
              {/* <!-- form --> */}
              <form class="row needs-validation" novalidate>
                <div class="mb-3 col-md-6">
                  <label for="fname" class="form-label">First Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="fname" placeholder="First Name" required />
                  <div class="invalid-feedback">
                    Please write a firstname.
                  </div>
                </div>
                {/* <!-- last name --> */}
                <div class="mb-3 col-md-6">
                  <label for="lname" class="form-label">Last Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="lname" placeholder="Last Name" required />
                  <div class="invalid-feedback">
                    Please write a lastname.
                  </div>
                </div>
                {/* <!-- email --> */}
                <div class="mb-3 col-md-12">
                  <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                  <input type="email" class="form-control" id="email" placeholder="Email Id" required />
                  <div class="invalid-feedback">
                    Please provide your email id.
                  </div>
                </div>
                {/* <!-- message --> */}
                <div class="mb-3 col-md-12">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control " rows="3" placeholder="Message" id="message"></textarea>

                </div>
                {/* <!-- button --> */}
                <div class="col-md-12">
                  <button class="btn btn-primary" type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Contact;