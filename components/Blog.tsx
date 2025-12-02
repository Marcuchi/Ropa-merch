import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-sq-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              SPEED <span className="text-gray-500">NEWS</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-brand rounded-full"></div>
          </div>
          <a href="#" className="hidden md:flex items-center text-cyan-400 hover:text-white transition-colors">
            Ver todas las noticias <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-sq-dark border border-gray-800 rounded-xl p-6 hover:border-fuchsia-500/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 text-xs text-fuchsia-400 mb-3 font-mono">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm font-medium text-white group-hover:underline">
                Leer artículo
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
            <a href="#" className="text-cyan-400 font-medium">Ver más noticias &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;