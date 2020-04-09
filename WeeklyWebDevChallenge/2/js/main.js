const db = {
  blogArticle: [
    {
      index: 0,
      title: "Green Smoothies: Too Much of a Good Thing?",
      author: "Auskteez",
      date: {
        day: "20",
        month: "November",
      },
      add: "2 hours ago",
      src: "img/blog/blog1.png",
    },
    {
      index: 1,
      title: "Growing Food and a “Thirst” for Innovation",
      author: "Auskteez",
      date: {
        day: "14",
        month: "November",
      },
      add: "3 hours ago",
      src: "img/blog/blog2.png",
    },
    {
      index: 2,
      title: "Pesticides & Food: What You Need to Know",
      author: "Auskteez",
      date: {
        day: "10",
        month: "November",
      },
      add: "6 hours ago",
      src: "img/blog/blog3.png",
    },
    {
      index: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      author: "Auskteez",
      date: {
        day: "06",
        month: "November",
      },
      add: "12 hours ago",
      src: "img/blog/blog2.png",
    },
    {
      index: 4,
      title: "Duis aute irure dolor in reprehenderit",
      author: "Auskteez",
      date: {
        day: "30",
        month: "October",
      },
      add: "15 hours ago",
      src: "img/blog/blog3.png",
    },
    {
      index: 5,
      title: "Nunc erat neque, consectetur id dictum eget",
      author: "Auskteez",
      date: {
        day: "26",
        month: "October",
      },
      add: "18 hours ago",
      src: "img/blog/blog1.png",
    },
    {
      index: 6,
      title: "Nunc id turpis et ipsum pretium",
      author: "Auskteez",
      date: {
        day: "15",
        month: "October",
      },
      add: "24 hours ago",
      src: "img/blog/blog3.png",
    },
    {
      index: 7,
      title: "Praesent elit orci, posuere quis mauris ac",
      author: "Auskteez",
      date: {
        day: "07",
        month: "October",
      },
      add: "26 hours ago",
      src: "img/blog/blog1.png",
    },
    {
      index: 8,
      title: "Mauris efficitur neque eros",
      author: "Auskteez",
      date: {
        day: "01",
        month: "October",
      },
      add: "31 hours ago",
      src: "img/blog/blog3.png",
    },
    {
      index: 9,
      title: "Mauris efficitur neque eros",
      author: "Auskteez",
      date: {
        day: "01",
        month: "October",
      },
      add: "48 hours ago",
      src: "img/blog/blog3.png",
    },
  ],
};

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      var navHeight = $(".navbar").height();
      // Store hash
      var hash = this.hash;

      console.log(navHeight);
      var target = Math.floor($(hash).offset().top) - navHeight;
      console.log(target);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: target,
        },
        800
      );
    }
  });
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  sticky();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var navbarHeight = 80;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky() {
  if (window.pageYOffset > navbarHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Gallery Photo
let gallPhotosLinks = [
  "gallery6.jpg",
  "gallery11.jpg",
  "gallery8.jpg",
  "gallery9.jpg",
];
let galleryVal = 0;

const showNextPicture = () => {
  galleryVal++;

  const addPicture = document.querySelector("#galleryContainer");
  let showGallery = document.createElement("div");
  showGallery.classList = "row";
  showGallery.innerHTML = `
      <div class="${galleryVal === 1 ? "col-md-8" : "col-md-6"} col-sm-12">
      <div class = "overflow margin">
      <button class = "gallery-btn">Show</button> 
      <div class = "shadow">
      </div>
      <div class="gallery-md-img"><img src="img/gallery/${
        galleryVal === 1 ? gallPhotosLinks[0] : gallPhotosLinks[2]
      }" alt="">
      </div>
      </div> 
      </div> 
      <div class="${galleryVal === 1 ? "col-md-4" : "col-md-6"} col-sm-12">
      <div class = "overflow">
      <button class = "gallery-btn"> Show </button> 
      <div class = "shadow">
      </div> 
      <div class = "gallery-md-img">
      <img src="img/gallery/${
        galleryVal === 1 ? gallPhotosLinks[1] : gallPhotosLinks[3]
      }" alt=""></div>
      </div> 
      </div>
    `;
  addPicture.appendChild(showGallery);

  if (galleryVal === 2) {
    const galleryBtn = document.getElementById("galleryBtn");
    galleryBtn.parentNode.removeChild(galleryBtn);
  }
};

document
  .querySelector("#galleryBtn")
  .addEventListener("click", showNextPicture);

// BLOG

function blogArticles() {
  blog = db.blogArticle;
  const blogContainer = document.getElementById("blogContainer");

  const showPosts = document.createElement("div");
  showPosts.classList = "row";
  const blogContainerChildElCount = blogContainer.childElementCount;

  let i;
  let n;

  i = blogContainerChildElCount * 3;
  n = i + 3;

  for (i; i < n; i++) {
    if (i <= db.blogArticle.length - 1) {
      const post = document.createElement("div");
      post.classList = "col-md-4";
      post.innerHTML = `
      <div class="blogPicture blog-space">
        <img src=${blog[i].src} alt="Blog Picture">
        <div class="blog-article">
          <div class="blog-date">
            ${blog[i].date.day}<br/>
            ${blog[i].date.month.toUpperCase().substr(0, 3)}
          </div>
          <div class = "shadow">
            <h3 class="blog-article-title">${blog[i].title}</h3>
            <span class="blog-details">By${blog[i].author} - ${
        blog[i].add
      }</span>
          </div>
        </div>
      </div>
    `;
      showPosts.appendChild(post);
      blogContainer.appendChild(showPosts);
    } else {
      break;
    }
  }
}

document.getElementById("blogBtn").addEventListener("click", blogArticles);
