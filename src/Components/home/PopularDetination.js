export const Popular = () => {
  const places = [
    {
      name: "Lagos",
      numbers: 2272,
      price: "N240.00",
      image:
        "https://images.adsttc.com/media/images/5d4b/fbad/284d/d131/c200/00c3/newsletter/open-uri20190808-19972-1cifqrb.jpg?1565260689",
    },
    {
      name: "Abuja",
      numbers: 2272,
      price: "N240.00",
      image:
        "https://images.adsttc.com/media/images/5d4b/fbad/284d/d131/c200/00c3/newsletter/open-uri20190808-19972-1cifqrb.jpg?1565260689",
    },
    {
      name: "Ibadan",
      numbers: 2272,
      price: "N240.00",
      image:
        "https://images.adsttc.com/media/images/5d4b/fbad/284d/d131/c200/00c3/newsletter/open-uri20190808-19972-1cifqrb.jpg?1565260689",
    },
    {
      name: "Port-harcourt",
      numbers: 2272,
      price: "N240.00",
      image:
        "https://images.adsttc.com/media/images/5d4b/fbad/284d/d131/c200/00c3/newsletter/open-uri20190808-19972-1cifqrb.jpg?1565260689",
    },
  ];
  return (
    <div className="py-lg-12 py-7">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-6">
              <h2 className="mb-0">Popular Destinations</h2>
              <p>
                Top 50+ best tourist places to See in country for a perfect
                holiday or a trip
              </p>
            </div>
          </div>
          {places.map(({ name, numbers, price, image }) => (
            <div className="col-xl-3 col-md-6 col-12">
              <a className="text-white" href="/app/listings">
                <div className="position-relative text-white mb-4">
                  <div className="overlay-bg">
                    <img
                      src={image}
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="position-absolute text-white mt-n4 bottom-0 ps-4 pb-4 ">
                    <h3 className="mb-1 text-white fw-bold">{name}</h3>
                    <p className="fs-6 mb-n1 fw-bold">
                      {numbers} places to stay
                    </p>
                    <p className="fs-6 mb-0 fw-bold">Avg {price}/night</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
          <div className="col-12 mt-4">
            <a href="/app/listings" className="btn btn-outline-secondary">
              View more destinations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
