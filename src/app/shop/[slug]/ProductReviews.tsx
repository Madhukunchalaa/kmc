'use client';

import { useState, useEffect } from 'react';

interface ReviewDoc {
  _id: string;
  productSlug: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  approved: boolean;
  createdAt: string;
}

export default function ProductReviews({ productSlug }: { productSlug: string }) {
  const [reviews, setReviews] = useState<ReviewDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetchReviews();
  }, [productSlug]);

  const fetchReviews = async () => {
    try {
      const res = await fetch(`/api/reviews?slug=${productSlug}`);
      const data = await res.json();
      if (data.ok) {
        setReviews(data.reviews || []);
      }
    } catch (err) {
      console.error('Failed to load reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (rating === 0) {
      setErrorMsg('Please select a star rating.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productSlug, name, email, rating, comment }),
      });
      const data = await res.json();

      if (!data.ok) {
        setErrorMsg(data.reason || 'Failed to submit review.');
      } else {
        setSuccessMsg('✨ Thank you! Your review has been posted successfully.');
        setName('');
        setEmail('');
        setRating(0);
        setComment('');
        setShowForm(false);
        // Refresh reviews list
        fetchReviews();
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Calculations for Amazon-like rating summary
  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? Number((reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1))
      : 0;

  // Count reviews per star level (1 to 5)
  const starCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => {
    const star = r.rating as 5 | 4 | 3 | 2 | 1;
    if (starCounts[star] !== undefined) {
      starCounts[star]++;
    }
  });

  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0;
    return Math.round((count / totalReviews) * 100);
  };

  const getInitials = (fullName: string) => {
    return fullName
      .trim()
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const formatDate = (dateString: string) => {
    if (!isMounted) return '';
    try {
      return new Date(dateString).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return '';
    }
  };

  return (
    <div style={{ marginTop: '3rem', fontFamily: 'inherit' }}>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-heading, serif)',
              color: 'var(--dark-2, #2D1B0E)',
              fontSize: '1.8rem',
              margin: 0,
            }}
          >
            Customer Reviews
          </h3>
          <p style={{ color: '#888', margin: '4px 0 0 0', fontSize: '0.9rem' }}>
            What our clients say about their crystal experience
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            background: 'linear-gradient(135deg, var(--primary, #C8956C), var(--primary-dark, #A7744D))',
            color: '#fff',
            border: 'none',
            borderRadius: '24px',
            padding: '10px 24px',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(200, 149, 108, 0.25)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(200, 149, 108, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(200, 149, 108, 0.25)';
          }}
        >
          {showForm ? 'Close Form' : 'Write a Review'}
        </button>
      </div>

      <div className="row g-5">
        {/* Left Column: Amazon-style rating summary */}
        <div className="col-lg-4 col-md-5">
          <div
            style={{
              background: '#FAF6F1',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid rgba(200, 149, 108, 0.15)',
              position: 'sticky',
              top: '120px',
            }}
          >
            <div className="d-flex align-items-center gap-3 mb-3">
              <span
                style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: 'var(--dark-2, #2D1B0E)',
                  lineHeight: 1,
                }}
              >
                {averageRating}
              </span>
              <div>
                <div style={{ color: 'var(--primary, #C8956C)', fontSize: '1.2rem', display: 'flex', gap: '3px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={
                        star <= Math.round(averageRating)
                          ? 'fa-solid fa-star'
                          : star - 0.5 <= averageRating
                          ? 'fa-solid fa-star-half-stroke'
                          : 'fa-regular fa-star'
                      }
                    ></i>
                  ))}
                </div>
                <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: 500 }}>
                  {totalReviews} {totalReviews === 1 ? 'client rating' : 'client ratings'}
                </span>
              </div>
            </div>

            {/* Progress Bars for Star levels */}
            <div style={{ display: 'grid', gap: '10px' }}>
              {([5, 4, 3, 2, 1] as const).map((star) => {
                const count = starCounts[star];
                const pct = getPercentage(count);
                return (
                  <div key={star} className="d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: '#555' }}>
                    <span style={{ width: '40px', fontWeight: 600 }}>{star} star</span>
                    <div
                      style={{
                        flexGrow: 1,
                        height: '10px',
                        background: '#ECE4DB',
                        borderRadius: '5px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${pct}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, #E8C99A, #C8956C)',
                          borderRadius: '5px',
                          transition: 'width 0.5s ease',
                        }}
                      ></div>
                    </div>
                    <span style={{ width: '35px', textAlign: 'right', fontWeight: 600, color: '#888' }}>
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Write review form & reviews feed */}
        <div className="col-lg-8 col-md-7">
          {/* Write a review form */}
          {showForm && (
            <div
              style={{
                background: '#fff',
                padding: '24px',
                borderRadius: '16px',
                border: '2px solid rgba(200, 149, 108, 0.25)',
                marginBottom: '2rem',
                boxShadow: '0 8px 30px rgba(200, 149, 108, 0.08)',
                animation: 'fadeIn 0.3s ease',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-heading, serif)',
                  color: 'var(--dark-2, #2D1B0E)',
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <i className="fa-solid fa-pen-fancy" style={{ color: 'var(--primary, #C8956C)' }}></i>
                Share Your Intentions & Experience
              </h4>

              {errorMsg && (
                <div className="alert alert-danger py-2 px-3" style={{ fontSize: '0.85rem', borderRadius: '8px' }}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
                {/* Star rating selector */}
                <div>
                  <label
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--dark-2, #2D1B0E)',
                      marginBottom: '6px',
                      display: 'block',
                    }}
                  >
                    Your overall rating <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div style={{ display: 'flex', gap: '8px', fontSize: '1.6rem', color: '#D2C3B5' }}>
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isActive = star <= (hoverRating || rating);
                      return (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            color: isActive ? 'var(--primary, #C8956C)' : '#E0D5C9',
                            transition: 'transform 0.1s ease',
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setRating(star);
                            }
                          }}
                        >
                          <i className={isActive ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-sm-6">
                    <label
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--dark-2, #2D1B0E)',
                        marginBottom: '6px',
                        display: 'block',
                      }}
                    >
                      Your Name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aisha Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="newsletter-input"
                      style={{ width: '100%', height: '44px', background: '#FAF6F1', border: '1px solid rgba(0,0,0,0.08)' }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--dark-2, #2D1B0E)',
                        marginBottom: '6px',
                        display: 'block',
                      }}
                    >
                      Email Address <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. aisha@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="newsletter-input"
                      style={{ width: '100%', height: '44px', background: '#FAF6F1', border: '1px solid rgba(0,0,0,0.08)' }}
                    />
                    <small style={{ color: '#888', fontSize: '0.75rem', marginTop: '2px', display: 'block' }}>
                      Your email is safe and will never be published publicly.
                    </small>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--dark-2, #2D1B0E)',
                      marginBottom: '6px',
                      display: 'block',
                    }}
                  >
                    Your Review <span style={{ color: 'red' }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share how the crystal makes you feel, your energy experience, or design feedback..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="newsletter-input"
                    style={{
                      width: '100%',
                      padding: '12px',
                      height: 'auto',
                      background: '#FAF6F1',
                      border: '1px solid rgba(0,0,0,0.08)',
                      resize: 'vertical',
                    }}
                  ></textarea>
                </div>

                <div className="d-flex justify-content-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    style={{
                      background: 'transparent',
                      border: '1px solid #ddd',
                      borderRadius: '24px',
                      padding: '8px 20px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      background: 'linear-gradient(135deg, var(--primary, #C8956C), var(--primary-dark, #A7744D))',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '24px',
                      padding: '8px 24px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? 'Posting...' : 'Post Review'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {successMsg && (
            <div
              className="alert alert-success py-3 px-4 mb-4"
              style={{
                borderRadius: '12px',
                border: '1px solid #A3DCA7',
                background: '#EAF8EB',
                color: '#2A5D31',
                fontWeight: 500,
                fontSize: '0.95rem',
              }}
            >
              {successMsg}
            </div>
          )}

          {/* Reviews feed */}
          {loading ? (
            <div className="text-center py-5">
              <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2rem', color: 'var(--primary, #C8956C)' }}></i>
              <p style={{ color: '#888', marginTop: '10px' }}>Loading reviews...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div
              style={{
                background: '#FAF6F1',
                padding: '40px 20px',
                textAlign: 'center',
                borderRadius: '16px',
                border: '1px dashed rgba(200, 149, 108, 0.3)',
              }}
            >
              <i className="fa-regular fa-comments" style={{ fontSize: '2.5rem', color: 'var(--primary, #C8956C)', marginBottom: '12px' }}></i>
              <h5 style={{ color: 'var(--dark-2, #2D1B0E)', fontWeight: 600 }}>No reviews yet</h5>
              <p style={{ color: '#777', fontSize: '0.9rem', maxWidth: '300px', margin: '6px auto 16px auto' }}>
                Be the first to share your energy journey with this crystal bracelet.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="btn-outline-custom"
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderColor: 'var(--primary, #C8956C)',
                  color: 'var(--primary, #C8956C)',
                  background: 'transparent',
                }}
              >
                Write the First Review
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '24px' }}>
              {reviews.map((rev) => (
                <div
                  key={rev._id}
                  style={{
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    paddingBottom: '24px',
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
                    {/* User profile */}
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #FAF6F1, #E8C99A)',
                          color: '#8A4F27',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          border: '1px solid rgba(200, 149, 108, 0.25)',
                        }}
                      >
                        {getInitials(rev.name)}
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <span style={{ fontWeight: 600, color: 'var(--dark-2, #2D1B0E)', fontSize: '0.95rem' }}>
                            {rev.name}
                          </span>
                          <span
                            style={{
                              fontSize: '0.72rem',
                              color: '#2A5D31',
                              background: '#EAF8EB',
                              border: '1px solid #A3DCA7',
                              padding: '2px 8px',
                              borderRadius: '12px',
                              fontWeight: 600,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <i className="fa-solid fa-circle-check" style={{ fontSize: '0.75rem' }}></i>
                            Verified Purchase
                          </span>
                        </div>
                        <div style={{ color: 'var(--primary, #C8956C)', fontSize: '0.8rem', display: 'flex', gap: '2px', marginTop: '2px' }}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i key={star} className={star <= rev.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Date */}
                    {isMounted && (
                      <span style={{ fontSize: '0.8rem', color: '#888', fontWeight: 500 }}>
                        Reviewed on {formatDate(rev.createdAt)}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      color: '#4A3E3D',
                      fontSize: '0.92rem',
                      lineHeight: '1.6',
                      margin: '10px 0 0 0',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {rev.comment}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
