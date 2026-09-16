import { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { HomePage } from './components/pages/HomePage';
import { UpdatesPage } from './components/pages/UpdatesPage';
import { DonatePage } from './components/pages/DonatePage';
import { FeedbackPage } from './components/pages/FeedbackPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { AboutPage } from './components/pages/AboutPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Check if redirected from 404.html with ?p=
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('p');
    if (redirectPath) {
      window.history.replaceState(null, '', redirectPath);
      return redirectPath;
    }
    return window.location.pathname || '/';
  });

  // Synchronize path with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title dynamically based on route
  useEffect(() => {
    const titleMap: Record<string, string> = {
      '/': 'SwipePix — 100% Offline Photo & Video Cleaner for Android | In-App Player',
      '/updates': 'Official Update Center & Releases | SwipePix',
      '/donate': 'Support Independent Development | SwipePix',
      '/feedback': 'Send Feedback & Report Issues | SwipePix',
      '/privacy': 'Privacy Policy & Permissions Audit | SwipePix',
      '/about': 'About SwipePix & Developer Philosophy | SwipePix',
    };

    document.title = titleMap[currentPath] || 'SwipePix — 100% Offline Photo & Video Cleaner for Android | In-App Player';
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
