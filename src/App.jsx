import React from 'react';

// --- Configuration ---
// The final destination link for your Selar product page.
const SELAR_LINK = "https://selar.com/dp7388";
// Your YouTube Video ID for the free video reveal.
const VIDEO_ID = "Ih_YrEDTdeI"; 

// --- Components ---

/**
 * Testimonial Image component, now using a required 'src' prop
 * for the local file path (e.g., /images/testimonial-1.png).
 */
const TestimonialImage = ({ src, index, alt, className = '' }) => (
    <img
        // The src now uses the relative path from the public folder
        src={src} 
        alt={alt || `Student testimonial screenshot ${index}`}
        className={`w-full h-auto rounded-lg shadow-xl border-4 border-gray-700 object-cover ${className}`}
        loading="lazy"
        // Fallback in case the image path is wrong
        onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = `https://placehold.co/600x400/000/FFFFFF?text=MISSING+TESTIMONIAL+${index}`;
        }}
    />
);

/**
 * Animated Arrow component to point towards the CTA button.
 */
const AnimatedArrow = () => (
    <div className="flex justify-center my-4">
        <svg
            className="w-8 h-8 text-white animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            {/* Downward pointing arrow path */}
            <path d="M19 14l-7 7-7-7"></path>
            <path d="M12 21V3"></path>
        </svg>
    </div>
);

/**
 * Reusable Buy Now Button component, styled in red for high urgency/contrast.
 */
const BuyNowButton = () => (
    <a
        href={SELAR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        // Updated colors to RED and improved hover/active states
        className="w-full sm:w-80 md:w-96 p-4 rounded-xl text-center text-2xl font-extrabold transition duration-300 ease-in-out transform hover:scale-[1.03] 
                   bg-red-600 text-white border-4 border-white shadow-lg 
                   hover:bg-red-700 hover:border-gray-300 hover:shadow-2xl active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-red-500/50"
    >
        BUY NOW - Secure Your Spot
    </a>
);

/**
 * Responsive YouTube Video Embed Component (Now max-w-5xl).
 */
const YouTubeEmbed = () => (
    <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-white">
        <iframe
            title="Free Video Course Reveal"
            width="100%"
            height="100%"
            // Using the user-provided video ID
            src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`} 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    </div>
);

/**
 * Sub-Headline component with custom highlights and font.
 */
const SubHeadlineText = () => {
    // Splitting the text for targeted styling
    const part1 = "How To ";
    const part2 = "Build, Grow & Monetize"; // Red Highlight
    const part3 = " a Telegram Channel From Scratch ";
    const part4 = "Without Spending a Single Dime on Ads"; // Yellow Highlight & Underlined

    return (
        <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-center"
            // Enforcing Georgia font using inline style
            style={{ fontFamily: 'Georgia, serif' }} 
        >
            {part1}
            {/* "On Telegram" highlighted in Red */}
            <span className="text-red-500">{part2}</span>
            {part3}
            {/* "Without selling..." highlighted in Yellow and underlined */}
            <span className="text-yellow-400 underline">{part4}</span>
        </h2>
    );
};


/**
 * Main Landing Page Component
 */
function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">

        {/* --- 1. Small Headline Section (Highlighted in Yellow) --- */}
        <header className="text-center mb-6">
          <h1 className="text-xl md:text-2xl font-light tracking-wide uppercase text-yellow-400">
            Free 29 Minutes+ Video Reveals...
          </h1>
        </header>

        {/* --- 2. Dark Sub-Headline Container (The Hook) --- */}
        <section className="mb-12 md:mb-16 p-4 sm:p-6 md:p-8 rounded-xl bg-gray-900 shadow-inner border-4 border-white">
          <SubHeadlineText />
        </section>

        {/* --- 3. Video Slot (Wider) --- */}
        <section className="mb-12 md:mb-16">
          <YouTubeEmbed />
        </section>

        {/* --- 4. First Buy Now Button (Conversion Point 1) --- */}
        <section className="flex flex-col items-center mb-16 md:mb-24">
            <AnimatedArrow />
            <p className="text-lg mb-4 text-center font-medium">
                (Click the button below to secure your full course access now!)
            </p>
            <BuyNowButton />
        </section>

        {/* --- 5. Testimonials Header --- */}
        <section className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-4xl font-bold border-b-4 border-white inline-block pb-1">
                See what others are saying about the 5weeks challenge
            </h3>
        </section>
        
        {/* --- 6. First 4 Testimonials (Now referencing local files) --- */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 md:mb-16">
            <TestimonialImage index={1} src="/images/testimonial-1.png" className="col-span-1" />
            <TestimonialImage index={2} src="/images/testimonial-2.png" className="col-span-1" />
            <TestimonialImage index={3} src="/images/testimonial-3.png" className="col-span-1" />
            <TestimonialImage index={4} src="/images/testimonial-4.png" className="col-span-1" />
        </section>

        {/* --- 7. Second Buy Now Button (Conversion Point 2) --- */}
        <section className="flex flex-col items-center mb-10 md:mb-16">
            <AnimatedArrow />
            <BuyNowButton />
        </section>

        {/* --- 8. Second 4 Testimonials (Now referencing local files) --- */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 md:mb-16">
            <TestimonialImage index={5} src="/images/testimonial-5.png" className="col-span-1" />
            <TestimonialImage index={6} src="/images/testimonial-6.png" className="col-span-1" />
            <TestimonialImage index={7} src="/images/testimonial-7.png" className="col-span-1" />
            <TestimonialImage index={8} src="/images/testimonial-8.png" className="col-span-1" />
        </section>

        {/* --- 9. Final Buy Now Button (Conversion Point 3) --- */}
        <section className="flex justify-center pb-16">
            <BuyNowButton />
        </section>

      </div>
    </div>
  );
}

export default App;
