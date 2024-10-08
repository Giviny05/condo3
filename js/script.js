const navbar =document.getElementById("navbar");

window.onscroll = () => {
    const scrollValue = window.scrollY;
    console.log(scrollValue);
    const valuescroll = 120;

    if (window.scrollY > valuescroll) {
        navbar.style.backgroundColor = " #353935 ";
        navbar.style.transition = "0.5s";
    }
    else{
        navbar.style.backgroundColor = " transparent ";
        navbar.style.transition = "0.5s";   
    }
};
const condos = [
    {
      "id": 1,
      "title": "Small Condo in Downtown",
      "price": 75000,
      "bedrooms": 1,
      "location": "Downtown City",
      "image": "https://images.squarespace-cdn.com/content/v1/589a3e1a414fb58b9eca1eed/1674093635044-SB3UF2TR3P4NPPFRV3PY/Mbm5clgQ.jpeg"
    },
    {
      "id": 2,
      "title": "Cozy Studio Condo",
      "price": 85000,
      "bedrooms": 1,
      "location": "Suburban Area",
      "image": "https://images.wsj.net/im-530001?width=784&height=522"
    },
    {
      "id": 3,
      "title": "Compact City Condo",
      "price": 69000,
      "bedrooms": 1,
      "location": "City Center",
      "image": "https://thumbs.6sqft.com/wp-content/uploads/2014/05/21065012/1-central-park-west-trump-tower.jpg?w=768&format=webp"
    },
    {
      "id": 4,
      "title": "Modern Condo with City View",
      "price": 90000,
      "bedrooms": 2,
      "location": "Uptown District",
      "image": "https://images.wsj.net/im-530001?width=784&height=522"
    },
    {
      "id": 5,
      "title": "Affordable Condo in the Suburbs",
      "price": 80000,
      "bedrooms": 1,
      "location": "Suburban Neighborhood",
      "image": "https://thumbs.6sqft.com/wp-content/uploads/2023/04/12172506/101-Central-Park-West-1.jpg?w=768&format=webp"
    },
    {
      "id": 5,
      "title": "Affordable Condo in the Suburbs",
      "price": 90000,
      "bedrooms": 1,
      "location": "Suburban Neighborhood",
      "image": "https://as1.ftcdn.net/v2/jpg/05/58/93/82/1000_F_558938248_YUQGg9VG8fGSzLgT3hTK7c1jw3q6uVB4.jpg"
    },
    {
      "id": 5,
      "title": "Affordable Condo in the Suburbs",
      "price": 60000,
      "bedrooms": 1,
      "location": "Suburban Neighborhood",
      "image": "https://i.etsystatic.com/43666763/r/il/2db538/5352677110/il_fullxfull.5352677110_m1ld.jpg"
    },
    {
      "id": 5,
      "title": "Affordable Condo in the Suburbs",
      "price": 40000,
      "bedrooms": 1,
      "location": "Suburban Neighborhood",
      "image": "https://wallpapers.com/images/featured/apartment-bbiy2mat3yd31d3t.jpg"
    },
  ];

const rowcard = document.getElementById("rowcard");
const rowcard1 = document.getElementById("rowcard1");
const rowcard2 = document.getElementById("rowcard2");

condos.forEach(condo => {
    const condoElment = 
    `
        <div class="col-6 col-md-4 col-lg-3 p-1 p-md-2 my-1">
            <div class="card overflow-hidden">
              <div class="image bg-secondary">
                  <img
                  class="w-100 h-100 object-fit-cover"
                  src="${condo.image}"
                  alt="No image"
                  />
              </div>
                <div class="card-body text-center suse-font">
                  <h4>$${condo.price}</h4>
                  <div class="border-top text-center pt-2">
                  <p class="m-0 text-secondary">
                      <i class="bi bi-geo-alt-fill text-dark"></i>
                      ${condo.location}
                  </p>
                  <p class="m-0 text-secondary">
                      <i class="fa-solid fa-bed text-dark"></i>
                      ${condo.bedrooms} BED</p>
                  </div>
              </div>
            </div>
        </div>
    `
    rowcard.innerHTML += condoElment;
    rowcard1.innerHTML += condoElment;
    rowcard2.innerHTML += condoElment;
})
