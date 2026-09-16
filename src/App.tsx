import { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { HomePage } from './components/pages/HomePage';
import { UpdatesPage } from './components/pages/UpdatesPage';
import { DonatePage } from './components/pages/DonatePage';
import { FeedbackPage } from './components/pages/FeedbackPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { AboutPage } from './components/pages/AboutPage';

export function App({ initialPath }: { initialPath?: string } = {}) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath) return initialPath;
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const redirectPath = params.get('p');
      if (redirectPath) {
        window.history.replaceState(null, '', redirectPath);
        return redirectPath;
      }
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Synchronize path with browser history
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title, description, and canonical dynamically based on route
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const titleMap: Record<string, string> = {
      '/': 'SwipePix — Offline Android Gallery Cleaner',
      '/donate': 'Support SwipePix — Privacy-First Android Gallery Cleanup',
      '/updates': 'SwipePix Updates — Privacy-First Android Gallery Cleanup',
      '/privacy': 'SwipePix Privacy — Local & Offline by Design',
      '/about': 'About SwipePix — Privacy-First Android Gallery Cleanup',
      '/feedback': 'SwipePix Feedback — Send Feedback & Report Bugs',
    };

    const descMap: Record<string, string> = {
      '/': 'Clean your Android gallery faster with SwipePix. Swipe to keep or trash photos and videos with offline, local-first processing.',
      '/donate': 'Support SwipePix, a privacy-first Android gallery cleanup app built to help organize your photo library locally.',
      '/updates': 'Follow SwipePix updates, improvements, fixes, and new features for the privacy-first Android gallery cleanup app.',
      '/privacy': 'Learn how SwipePix handles your photos, permissions, local data, and privacy without cloud uploads.',
      '/about': 'Learn about SwipePix, its local-first approach, and the goal of making Android gallery cleanup simpler.',
      '/feedback': 'Report bugs, request features, or send feedback directly to the developer of SwipePix, the offline Android gallery cleaner.',
    };

    document.title = titleMap[currentPath] || 'SwipePix — Privacy-First Android Gallery Cleanup';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && descMap[currentPath]) {
      metaDesc.setAttribute('content', descMap[currentPath]);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const canonicalPath = currentPath === '/' ? '' : currentPath;
      canonical.setAttribute('href', `https://swipepix.heyvinay.in${canonicalPath}`);
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/updates':
        return <UpdatesPage onNavigate={handleNavigate} />;
      case '/donate':
        return <DonatePage />;
      case '/feedback':
        return <FeedbackPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink font-sans selection:bg-accent selection:text-ink">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
