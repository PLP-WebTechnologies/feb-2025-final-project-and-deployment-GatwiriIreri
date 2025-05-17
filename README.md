# Overview

Homexa is a responsive website focused on home decor, transformation, and lifestyle. It provides users with a seamless experience to explore home decor ideas, shop for furniture and accessories, and read blogs about home transformation, sustainable living, and design inspiration.

# Table of Contents

Features
Pages
Structure
Styling
JavaScript Functionality
Installation
Usage
Dependencies
Contributing

# Features

Responsive Design: The website is fully responsive, adapting to different screen sizes and devices.
Modern UI/UX: Clean and modern interface with subtle animations and transitions.
Blog Section: Curated blog posts about home decor, DIY projects, and home transformation.
Navigation System: Easy navigation with links to Home, Shop, and Blog pages.
Shopping Cart: Interactive shopping cart with badge notification.
Newsletter Subscription: Email subscription form for updates and new content.
Pagination: Dynamic pagination system for blog articles.
Search Functionality: Search bar for finding specific content across the site.

# Pages

1. Home Page (index.html)

Hero section with featured content
Introduction to Homexa concept
Featured blog posts and articles

# Blog Page (blog.html)

Hero banner with featured blog post
Top blogs section featuring a grid layout with:

One featured vertical blog card
Two horizontal blog cards

Articles section with paginated blog posts
Newsletter subscription
Footer with site information

# Individual Blog Post Page

Hero image banner
Blog content with introduction and sections
Benefits/features list with numbered sections
Related article suggestions
Comments section (if implemented)

# Structure

├── index.html # Home page
├── blog.html # Blog listing page
├── style.css # Main stylesheet
├── index.js # JavaScript functionality
├── images/ # Image assets directory
│ ├── profile-image.jpg
│ ├── bald.jpeg
│ ├── blackM.jpg
│ ├── sofa.jpg
│ ├── set1.jpg
│ ├── minimalistic kitchen.jpg
│ └── ...
└── README.md # This file
Styling
The website uses a clean, modern design language with the following key style elements:

# Color Scheme:

Primary text: #121212 (dark gray)
Light background: #f2f1f1
Accent color: #BB7333
White: #ffffff
Dark background: #222

# Typography:

Primary font: 'Poppins', sans-serif for body text and general content
Secondary font: 'Amita', cursive for brand name and select headings
Font weights vary from 100 to 900 for different emphasis

# Layout:

Container max-width: 1200px
Responsive grid system
Flexbox layouts for component positioning
Card-based UI for blog posts and products

# JavaScript Functionality

The website includes several JavaScript features:

Dynamic Article Generation: Blog articles are generated from a JavaScript array of article data.
Pagination System: Interactive pagination for the blog articles section.
Newsletter Form Handling: Form submission handling with validation.
Interactive Elements: Event listeners for cards, buttons, and navigation elements.

# Key JavaScript Functions:

generateArticleCards(page): Generates article cards based on pagination
updatePagination(): Updates the pagination UI based on current page
Event handlers for pagination buttons and numbered navigation
