// Shop Page
// Product Data
const productData = [
    {
        id: 1,
        category: 'Other',
        image: "sofa.jpg",
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
        image: "/api/placeholder/200/180",
        title: 'Headbound',
        rating: 4.0,
        reviewCount: 28,
        price: 12.00,
        featured: false
    },
    {
        id: 3,
        category: 'Other',
        image: "/api/placeholder/200/180",
        title: 'Airpods Cleaner',
        rating: 4.4,
        reviewCount: 15,
        price: 29.90,
        featured: false,
        tag: 'Best Seller'
    },
    {
        id: 4,
        category: 'Home',
        image: "/api/placeholder/200/180",
        title: 'CCTV Maling',
        rating: 4.2,
        reviewCount: 19,
        price: 50.00,
        featured: true
    },
    {
        id: 5,
        category: 'Other',
        image: "/api/placeholder/200/180",
        title: 'Stuftus Poker 32',
        rating: 3.0,
        reviewCount: 28,
        price: 9.90,
        featured: false,
        tag: 'On Sale'
    },
    {
        id: 6,
        category: 'Music',
        image: "/api/placeholder/200/180",
        title: 'Stuftus R175',
        rating: 4.9,
        reviewCount: 24,
        price: 34.10,
        featured: true
    },
    {
        id: 7,
        category: 'Home',
        image: "/api/placeholder/200/180",
        title: 'CCTV Maling Pro',
        rating: 4.2,
        reviewCount: 19,
        price: 50.00,
        featured: false
    },
    {
        id: 8,
        category: 'Other',
        image: "/api/placeholder/200/180",
        title: 'Stuftus Poker 32 Pro',
        rating: 3.5,
        reviewCount: 21,
        price: 12.90,
        featured: false
    },
    {
        id: 9,
        category: 'Music',
        image: "/api/placeholder/200/180",
        title: 'Stuftus R175 Plus',
        rating: 4.9,
        reviewCount: 24,
        price: 34.10,
        featured: true
    },
    {
        id: 10,
        category: 'Other',
        image: "/api/placeholder/200/180",
        title: 'TWS Bujug',
        rating: 3.5,
        reviewCount: 12,
        price: 29.90,
        featured: false
    },
    {
        id: 11,
        category: 'Music',
        image: "/api/placeholder/200/180",
        title: 'Headbound Baptis',
        rating: 3.7,
        reviewCount: 22,
        price: 12.00,
        featured: false
    },
    {
        id: 12,
        category: 'Other',
        image: "/api/placeholder/200/180",
        title: 'Adudu Cleaner',
        rating: 4.1,
        reviewCount: 14,
        price: 29.90,
        featured: true
    },
    // Additional products
    {
        id: 13,
        category: 'For Phone',
        image: "/api/placeholder/200/180",
        title: 'Smartphone Stand Deluxe',
        rating: 4.7,
        reviewCount: 56,
        price: 19.99,
        featured: true
    },
    {
        id: 14,
        category: 'For Storage',
        image: "/api/placeholder/200/180",
        title: 'External SSD 1TB',
        rating: 4.9,
        reviewCount: 123,
        price: 89.99,
        featured: false
    },
    {
        id: 15,
        category: 'For Music',
        image: "/api/placeholder/200/180",
        title: 'Wireless Earbuds Pro',
        rating: 4.5,
        reviewCount: 78,
        price: 49.99,
        featured: true,
        tag: 'Hot'
    }
  ];
  
  // Recommendation Data (can be same as product data or different)
//   const recommendationData = productData.filter(product => product.featured);


// Enhanced Recommendation Data - include more featured products and popular items
const recommendationData = [
    ...productData.filter(product => product.featured),
    ...productData.filter(product => product.rating >= 4.5).slice(0, 5),
    ...productData.filter(product => product.tag === 'Best Seller'),
    ...productData.filter(product => product.tag === 'New')
].filter((product, index, self) =>
    index === self.findIndex(p => p.id === product.id)
);
// Enhanced Recommendation Data - include more featured products and popular items
const recommendationData = [
    ...productData.filter(product => product.featured),
    ...productData.filter(product => product.rating >= 4.5).slice(0, 5),
    ...productData.filter(product => product.tag === 'Best Seller'),
    ...productData.filter(product => product.tag === 'New')
].filter((product, index, self) =>
    index === self.findIndex(p => p.id === product.id)
);

// Enhanced generateRecommendationCards function with better carousel
function generateRecommendationCards() {
    const recommendationSlider = document.getElementById('recommendation-slider');
    if (!recommendationSlider) return;
    
    recommendationSlider.innerHTML = '';
    // Create a container for all recommendation cards
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
    sliderContainer.style.width = `${recommendationData.length * 270}px`; // 250px card + 20px margin
    
    recommendationData.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'recommendation-card';
        productCard.style.minWidth = '250px';
        productCard.style.marginRight = '20px';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" />
                ${product.tag ? `<span class="featured-tag">${product.tag}</span>` : ''}








  // Variables for pagination
  let currentPage = 1;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(productData.length / itemsPerPage);
  let cartItems = 0;
    
  
  
  // Generate star rating
  function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (halfStar) {
        stars += '★';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    return stars;
  }
  
  // Generate product cards
  function generateProductCards(page = 1, filters = {}) {
    const productGrid = document.getElementById('product-grid');
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
        );
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Generate product cards
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
    
    // Update pagination
    updatePagination(page, Math.ceil(filteredProducts.length / itemsPerPage));
    
    // Add event listeners to the Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
  }
  
  // Generate recommendation cards
  function generateRecommendationCards() {
    const recommendationSlider = document.getElementById('recommendation-slider');
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
    
    // Add event listeners to the Add to Cart buttons
    document.querySelectorAll('.recommendation-slider .add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
  }
  
  // Update pagination
  function updatePagination(page, totalPages) {
    document.querySelectorAll('.page-number').forEach((el, index) => {
        if (index < totalPages) {
            el.style.display = 'flex';
            if (index + 1 === page) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        } else {
            el.style.display = 'none';
        }
    });
    
    // Disable/enable prev/next buttons
    document.getElementById('prev-button').disabled = page === 1;
    document.getElementById('next-button').disabled = page === totalPages;
  }
  
  // Add to cart function
  function addToCart(productId) {
    cartItems++;
    document.getElementById('cart-count').textContent = cartItems;
    
    // Show notification
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
  }
  
  // Event Listeners
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize product cards
    generateProductCards(currentPage);
    
    // Initialize recommendation cards
    generateRecommendationCards();
    
    // Pagination event listeners
    document.getElementById('prev-button').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            generateProductCards(currentPage, getFilters());
        }
    });
    
    document.getElementById('next-button').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            generateProductCards(currentPage, getFilters());
        }
    });
    
    // Numbered pagination
    document.querySelectorAll('.page-number').forEach(el => {
        el.addEventListener('click', () => {
            currentPage = parseInt(el.dataset.page);
            generateProductCards(currentPage, getFilters());
        });
    });
    
    // Recommendation slider navigation
    document.getElementById('prev-rec').addEventListener('click', () => {
        document.getElementById('recommendation-slider').scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
    
    document.getElementById('next-rec').addEventListener('click', () => {
        document.getElementById('recommendation-slider').scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
    
    // Filter checkboxes
    document.getElementById('all-products').addEventListener('change', function() {
        if (this.checked) {
            document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
                if (checkbox.id !== 'all-products') {
                    checkbox.checked = false;
                }
            });
        }
        filterProducts();
    });
    
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.id !== 'all-products') {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    document.getElementById('all-products').checked = false;
                }
                filterProducts();
            });
        }
    });
    
    // Search functionality
    document.getElementById('search-button').addEventListener('click', function() {
        const searchTerm = document.getElementById('search-input').value;
        currentPage = 1;
        generateProductCards(currentPage, {
            ...getFilters(),
            search: searchTerm
        });
    });
    
    document.getElementById('search-input').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const searchTerm = this.value;
            currentPage = 1;
            generateProductCards(currentPage, {
                ...getFilters(),
                search: searchTerm
            });
        }
    });
  });
  
  // Get current filter settings
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
    if (searchTerm) {
        filters.search = searchTerm;
    }
    
    return filters;
  }
  
  // Apply filters and update product display
  function filterProducts() {
    currentPage = 1;
    generateProductCards(currentPage, getFilters());
  }
  