// Global variables and constants
let currentPage = 1; 
let cartItems = 0;
const productItemsPerPage = 6;
const articleItemsPerPage = 3;

// Article Data
const articleData = [
    {
        id: 1,
        image: "images/lounge.jpg",
        readTime: "5 Min",
        title: "Eco Friendly Living: Sustainable Choices for a Greener Home",
        description: "Dive into the world of eco-friendly living. Explore sustainable products and lifestyle choices that make a difference",
        authorImg: "images/blackM.jpg",
        authorName: "David James"
    },
    {
      id: 2,
      image: "images/bedroom.jpg",
      readTime: "5 Min",
      title: "Eco Friendly Living: Sustainable Choices for a Greener Home",
      description: "Dive into the world of eco-friendly living. Explore sustainable products and lifestyle choices that make a difference",
      authorImg: "images/blackM.jpg",
      authorName: "David James"
  },
  {
    id: 3,
    image: "images/sofa1.jpg",
    readTime: "5 Min",
    title: "Eco Friendly Living: Sustainable Choices for a Greener Home",
    description: "Dive into the world of eco-friendly living. Explore sustainable products and lifestyle choices that make a difference",
    authorImg: "images/blackM.jpg",
    authorName: "David James"
}
];

// Product Data
const productData = [
    {
        id: 1,
        category: 'Other',
        image: "images/sofa.jpg", 
        title: 'Phone Holder Sakti',
        rating: 5.0,
        reviewCount: 12,
        price: 29.90,
        featured: true,
        tag: 'New'
    },
    {
        id: 2,
        category: 'Music',
        image: "images/minimalistic kitchen.jpg", 
        title: 'Headbound',
        rating: 4.0,
        reviewCount: 28,
        price: 12.00,
        featured: false
    },
    {
      id: 2,
      category: 'Music',
      image: "images/sofa.jpg", 
      title: 'Headbound',
      rating: 4.0,
      reviewCount: 28,
      price: 12.00,
      featured: false
  },
  {
    id: 2,
    category: 'Music',
    image: "images/minimalistic kitchen.jpg", 
    rating: 4.0,
    reviewCount: 28,
    price: 12.00,
    featured: false
},
{
  id: 2,
  category: 'Music',
  image: "images/sofa.jpg", 
  title: 'Headbound',
  rating: 4.0,
  reviewCount: 28,
  price: 12.00,
  featured: false
},
{
  id: 2,
  category: 'Music',
  image: "images/minimalistic kitchen.jpg", 
  title: 'Headbound',
  rating: 4.0,
  reviewCount: 28,
  price: 12.00,
  featured: false
},
{
  id: 2,
  category: 'Music',
  image: "images/sofa.jpg", 
  title: 'Headbound',
  rating: 4.0,
  reviewCount: 28,
  price: 12.00,
  featured: false
},
{
  id: 16,
  category: 'Home',
  image: "images/minimalistic kitchen.jpg",
  title: 'Smart LED Bulbs',
  rating: 4.3,
  reviewCount: 42,
  price: 24.99,
  featured: true,
  tag: 'Smart Home'
},
{ 
id: 19,
category: 'Home',
image: "images/sofa.jpg",
title: 'Smart LED Bulbs',
rating: 4.3,
reviewCount: 42,
price: 24.99,
featured: true,
tag: 'Smart Home'
},
 {id: 16,
  category: 'Home',
  image: "images/minimalistic kitchen.jpg",
  title: 'Smart LED Bulbs',
  rating: 4.3,
  reviewCount: 42,
  price: 24.99,
  featured: true,
  tag: 'Smart Home'
},
{ 
  id: 19,
  category: 'Home',
  image: "images/sofa.jpg",
  title: 'Smart LED Bulbs',
  rating: 4.3,
  reviewCount: 42,
  price: 24.99,
  featured: true,
  tag: 'Smart Home'
  },
   {id: 16,
    category: 'Home',
    image: "images/minimalistic kitchen.jpg",
    title: 'Smart LED Bulbs',
    rating: 4.3,
    reviewCount: 42,
    price: 24.99,
    featured: true,
    tag: 'Smart Home'
  }, { 
    id: 19,
    category: 'Home',
    image: "images/sofa.jpg",
    rating: 4.3,
    reviewCount: 42,
    price: 24.99,
    featured: true,
    tag: 'Smart Home'
    },
     {id: 16,
      category: 'Home',
      image: "images/minimalistic kitchen.jpg",
      title: 'Smart LED Bulbs',
      rating: 4.3,
      reviewCount: 42,
      price: 24.99,
      featured: true,
      tag: 'Smart Home'
    },
    { 
      id: 19,
      category: 'Home',
      image: "images/minimalistic kitchen.jpg",
      title: 'Smart LED Bulbs',
      rating: 4.3,
      reviewCount: 42,
      price: 24.99,
      featured: true,
      tag: 'Smart Home'
      },
       {id: 16,
        category: 'Home',
        image: "images/sofa.jpg",
        title: 'Smart LED Bulbs',
        rating: 4.3,
        reviewCount: 42,
        price: 24.99,
        featured: true,
        tag: 'Smart Home'
      },{ 
        id: 19,
        category: 'Home',
        image: "images/minimalistic kitchen.jpg",
        title: 'Smart LED Bulbs',
        rating: 4.3,
        reviewCount: 42,
        price: 24.99,
        featured: true,
        tag: 'Smart Home'
        },
         {id: 16,
          category: 'Home',
          image: "images/sofa.jpg",
          title: 'Smart LED Bulbs',
          rating: 4.3,
          reviewCount: 42,
          price: 24.99,
          featured: true,
          tag: 'Smart Home'
        }
];

// Calculate total pages
const productTotalPages = Math.ceil(productData.length / productItemsPerPage);
const articleTotalPages = Math.ceil(articleData.length / articleItemsPerPage);

// Recommendation Data
const recommendationData = productData.filter(product => product.featured);

/* ARTICLE FUNCTIONS */
function generateArticleCards(page = 1) {
    const articlesContainer = document.querySelector('.articles-container');
    if (!articlesContainer) return; // Skip if no container
    
    articlesContainer.innerHTML = '';
    
    const startIndex = (page - 1) * articleItemsPerPage;
    const endIndex = startIndex + articleItemsPerPage;
    const paginatedData = articleData.slice(startIndex, endIndex);
    
    paginatedData.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-image" />
            <div class="article-content">
                <p class="read-time">${article.readTime}</p>
                <h2 class="article-title">${article.title}</h2>
                <p class="article-description">${article.description}</p>
                <div class="author">
                    <img src="${article.authorImg}" alt="${article.authorName}" class="author-image" />
                    <div class="author-info">
                        <span class="written-by">Written by</span>
                        <span class="author-name">${article.authorName}</span>
                    </div>
                </div>
            </div>
        `;
        articlesContainer.appendChild(articleCard);
    });
}

function updateArticlePagination() {
    const prevButton = document.getElementById('article-prev-button');
    const nextButton = document.getElementById('article-next-button');
    
    if (prevButton) prevButton.disabled = currentPage === 1;
    if (nextButton) nextButton.disabled = currentPage === articleTotalPages;
}

/* PRODUCT FUNCTIONS */
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '★';
    if (halfStar) stars += '★';
    for (let i = 0; i < emptyStars; i++) stars += '☆';
    return stars;
}

function generateProductCards(page = 1, filters = {}) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    // Apply filters
    let filteredProducts = [...productData];
    
    if (filters.category && filters.category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }
    
    if (filters.newArrival) {
        filteredProducts = filteredProducts.filter(product => product.tag === 'New');
    }
    
    if (filters.bestSeller) {
        filteredProducts = filteredProducts.filter(product => product.tag === 'Best Seller');
    }
    
    if (filters.onDiscount) {
        filteredProducts = filteredProducts.filter(product => product.tag === 'On Sale');
    }
    
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filteredProducts = filteredProducts.filter(product => 
            product.title.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm)
    )}
    
    // Pagination
    const startIndex = (page - 1) * productItemsPerPage;
    const endIndex = startIndex + productItemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Generate cards
    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" />
                ${product.tag ? `<span class="featured-tag">${product.tag}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="count">(${product.reviewCount} Reviews)</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="buy-now">Buy Now</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
    
    updateProductPagination(page, Math.ceil(filteredProducts.length / productItemsPerPage));
    
    // Add cart event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}

function generateRecommendationCards() {
    const recommendationSlider = document.getElementById('recommendation-slider');
    if (!recommendationSlider) return;
    
    recommendationSlider.innerHTML = '';
    
    recommendationData.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.minWidth = '250px';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" />
                ${product.tag ? `<span class="featured-tag">${product.tag}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="count">(${product.reviewCount} Reviews)</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="buy-now">Buy Now</button>
                </div>
            </div>
        `;
        recommendationSlider.appendChild(productCard);
    });
}

function updateProductPagination(page, totalPages) {
    document.querySelectorAll('.page-number').forEach((el, index) => {
        if (index < totalPages) {
            el.style.display = 'flex';
            el.classList.toggle('active', index + 1 === page);
        } else {
            el.style.display = 'none';
        }
    });
    
    document.getElementById('prev-button').disabled = page === 1;
    document.getElementById('next-button').disabled = page === totalPages;
}

function addToCart(productId) {
    cartItems++;
    const cartCount = document.getElementById('cart-count');
    if (cartCount) cartCount.textContent = cartItems;
    
    const notification = document.getElementById('notification');
    if (notification) {
        notification.classList.add('show');
        setTimeout(() => notification.classList.remove('show'), 2000);
    }
}

/* FILTER FUNCTIONS */
function getFilters() {
    const filters = {};
    
    if (document.getElementById('for-home').checked) {
        filters.category = 'Home';
    } else if (document.getElementById('for-music').checked) {
        filters.category = 'Music';
    } else if (document.getElementById('for-phone').checked) {
        filters.category = 'For Phone';
    } else if (document.getElementById('for-storage').checked) {
        filters.category = 'For Storage';
    } else {
        filters.category = 'all';
    }
    
    filters.newArrival = document.getElementById('new-arrival').checked;
    filters.bestSeller = document.getElementById('best-seller').checked;
    filters.onDiscount = document.getElementById('on-discount').checked;
    
    const searchTerm = document.getElementById('search-input').value;
    if (searchTerm) filters.search = searchTerm;
    
    return filters;
}

function filterProducts() {
    currentPage = 1;
    generateProductCards(currentPage, getFilters());
}

/* EVENT LISTENERS */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize articles
    if (document.querySelector('.articles-container')) {
        generateArticleCards(currentPage);
        updateArticlePagination();
        
        document.getElementById('article-prev-button')?.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                generateArticleCards(currentPage);
                updateArticlePagination();
            }
        });
        
        document.getElementById('article-next-button')?.addEventListener('click', () => {
            if (currentPage < articleTotalPages) {
                currentPage++;
                generateArticleCards(currentPage);
                updateArticlePagination();
            }
        });
    }
    
    // Initialize products
    if (document.getElementById('product-grid')) {
        generateProductCards(currentPage);
        generateRecommendationCards();
        
        // Product pagination
        document.getElementById('prev-button')?.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                generateProductCards(currentPage, getFilters());
            }
        });
        
        document.getElementById('next-button')?.addEventListener('click', () => {
            if (currentPage < productTotalPages) {
                currentPage++;
                generateProductCards(currentPage, getFilters());
            }
        });
        
        // Recommendation slider
        document.getElementById('prev-rec')?.addEventListener('click', () => {
            document.getElementById('recommendation-slider')?.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
        
        document.getElementById('next-rec')?.addEventListener('click', () => {
            document.getElementById('recommendation-slider')?.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
        
        // Filters
        document.getElementById('all-products')?.addEventListener('change', function() {
            if (this.checked) {
                document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
                    if (checkbox.id !== 'all-products') checkbox.checked = false;
                });
            }
            filterProducts();
        });
        
        document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
            if (checkbox.id !== 'all-products') {
                checkbox.addEventListener('change', function() {
                    if (this.checked) document.getElementById('all-products').checked = false;
                    filterProducts();
                });
            }
        });
        
        // Search
        document.getElementById('search-button')?.addEventListener('click', function() {
            currentPage = 1;
            generateProductCards(currentPage, {
                ...getFilters(),
                search: document.getElementById('search-input').value
            });
        });
        
        document.getElementById('search-input')?.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                currentPage = 1;
                generateProductCards(currentPage, {
                    ...getFilters(),
                    search: this.value
                });
            }
        });
    }
    
    // Newsletter
    document.getElementById("subscription-form")?.addEventListener("submit", function(e){
        e.preventDefault();
        const email = this.querySelector("input[type='email']").value.trim();
        if (email) {
            this.reset();
            alert("Thank you for subscribing to the newsletter!");
        }
    });
});