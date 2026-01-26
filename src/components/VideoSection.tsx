import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Play, ExternalLink, X } from 'lucide-react';
import Informative from '@/assets/informative.mp4';
import Product from '@/assets/informative.mp4';
import Evemt from '@/assets/informative.mp4';
import Funny from '@/assets/informative.mp4';
import Sales from '@/assets/informative.mp4';
import Brand from '@/assets/informative.mp4';
import Travel from '@/assets/informative.mp4';

const videos = [
  { id: 1, title: 'Brand Story', category: 'Informative', src: Informative },
  { id: 2, title: 'Product Launch', category: 'Promo', src: Product },
  { id: 3, title: 'Corporate Events', category: 'Event', src: Evemt },
  { id: 4, title: 'Casual Reels', category: 'Funny', src: Funny },
  { id: 5, title: 'Product Sale', category: 'Sales', src: Sales },
  { id: 6, title: 'Brand Promotion', category: 'Brand', src: Brand },
  { id: 6, title: 'Traveling', category: 'Travel', src: Travel },
];

export const VideoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [activeVideo, setActiveVideo] = useState(null);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeVideo ? 'hidden' : '';
  }, [activeVideo]);

  return (
    <>
      <section id="videos" className="section-padding bg-noise relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
            style={{
              background:
                'radial-gradient(ellipse, hsl(38 90% 55% / 0.3), transparent)',
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="section-title">
              My <span className="gradient-text">Videos</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A collection of my best work across various industries and styles.
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl cursor-pointer video-card"
                onClick={() => setActiveVideo(video)}
              >
                {/* Fake thumbnail using video poster frame */}
                <video
                  src={video.src}
                  muted
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

                {/* Play Icon */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                    <Play
                      className="w-6 h-6 text-primary-foreground ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {video.category}
                  </span>
                  <h3 className="text-white font-semibold mt-1">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's collab
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
   {/* MODAL */}
<AnimatePresence>
  {activeVideo && (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setActiveVideo(null)}
    >
      <motion.div
        className="relative w-full max-w-full md:max-w-4xl h-auto md:h-auto rounded-xl overflow-hidden bg-black flex items-center justify-center"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setActiveVideo(null)}
          className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black/80 rounded-full p-2 text-white"
        >
          <X size={18} />
        </button>

        {/* Video */}
        <video
          src={activeVideo.src}
          controls
          autoPlay
          playsInline
          className="w-full h-auto max-h-[90vh] object-contain bg-black rounded-xl"
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};
