import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, X } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Coffee vs. Tea: Which is Better for Your Daily Health?',
    image: '/blog/blog1.jpg',
    date: 'May 15, 2026',
    author: 'Samantha Rose',
    readTime: '4 min read',
    summary: 'Explore the health benefits, metabolic impacts, and energy cycles of your favorite morning pick-me-ups.',
    content: 'For generations, coffee and tea lovers have debated which beverage reigns supreme. While coffee is renowned for its high caffeine content and direct energy boost, green and black teas offer L-theanine, an amino acid that promotes calm, sustained alertness. Both beverages are packed with powerful antioxidants that fight cellular stress. Coffee contains chlorogenic acids that support metabolic health, while tea contains catechins (especially EGCG in green tea) linked to cardiovascular benefits and cognitive longevity. The verdict? Both are highly beneficial in moderation, so choose the one that aligns best with your body\'s caffeine sensitivity and daily rhythm.'
  },
  {
    id: 2,
    title: 'Sourcing Specialty Beans: From Farm to Your Cup',
    image: '/cover/cover2.jpg',
    date: 'May 10, 2026',
    author: 'Rakib Boshunia',
    readTime: '6 min read',
    summary: 'Take a journey around the equator to explore how we source our organic, single-origin coffee beans.',
    content: 'Quality coffee begins at the farm level. At Rose Cafe, we believe in direct-trade sourcing, visiting small-holder coffee cooperatives across Ethiopia, Colombia, and Sumatra. We select beans grown in high altitudes under shade trees, which allows the coffee cherries to ripen slowly and develop complex acidity and sweetness. Once harvested, the cherries undergo processing (either washed, natural, or honey-processed) which dramatically alters their final flavor profile. By supporting sustainable farming methods and ensuring farmers are paid above fair-trade wages, we deliver a cup of coffee that not only tastes incredible but also supports rural agricultural communities.'
  },
  {
    id: 3,
    title: 'Pairing Pastries & Specialty Coffee: A Flavor Guide',
    image: '/blog/blog2.jpg',
    date: 'May 05, 2026',
    author: 'Maya Lin',
    readTime: '5 min read',
    summary: 'Learn how to complement the tasting notes of different coffee roasts with our artisanal pastries.',
    content: 'Just like wine and cheese, coffee and pastries share flavor dynamics that can elevate your tasting experience. A light-roast Ethiopian coffee, known for its bright floral and citrus notes, pairs wonderfully with a fruit tart or lemon scone, magnifying the natural acidity. Medium-roast Colombian coffees, featuring chocolatey and nutty profiles, blend harmoniously with almond croissants or classic butter pastries. For dark roasts with bold, smoky characteristics, rich chocolate cakes, brownies, or savory biscuits cut through the bitterness, balancing the palate. Explore our pairing chart next time you visit Rose Cafe to find your perfect flavor combination!'
  }
];

export default function Blog() {
  const [activePost, setActivePost] = useState(null);

  return (
    <section id="blog">
      <div className="section-header">
        <span className="section-subtitle">Read Our Articles</span>
        <h2 className="section-title text-gradient">Latest From The Blog</h2>
      </div>

      <div className="blog-grid">
        {BLOG_POSTS.map((post) => (
          <div 
            key={post.id} 
            className="glass-card blog-card"
            onClick={() => setActivePost(post)}
          >
            <div className="blog-img-wrapper">
              <img src={post.image} alt={post.title} />
              <span className="blog-date">{post.date}</span>
            </div>

            <div className="blog-info">
              <div className="blog-meta">
                <span>
                  <User size={14} />
                  {post.author}
                </span>
                <span>
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              
              <span className="blog-link">
                Read Full Article
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {activePost && (
        <div className="modal-overlay" onClick={() => setActivePost(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setActivePost(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <img src={activePost.image} alt={activePost.title} className="modal-img" />
            <div className="modal-body">
              <div className="blog-meta" style={{ marginBottom: '20px' }}>
                <span>
                  <Calendar size={14} />
                  {activePost.date}
                </span>
                <span>
                  <User size={14} />
                  {activePost.author}
                </span>
                <span>
                  <Clock size={14} />
                  {activePost.readTime}
                </span>
              </div>
              <h2 className="modal-title">{activePost.title}</h2>
              <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>{activePost.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
