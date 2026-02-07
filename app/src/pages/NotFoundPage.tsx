import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { localeToSlug, defaultLocale } from '../i18n';

export default function NotFoundPage() {
    const homeSlug = localeToSlug[defaultLocale];

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-light to-white flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md"
            >
                <div className="text-9xl font-bold text-primary mb-4">404</div>
                <h1 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
                    Page Not Found
                </h1>
                <p className="text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        asChild
                        className="bg-primary hover:bg-primary-dark text-white"
                    >
                        <Link to={`/${homeSlug}`}>
                            <Home className="w-4 h-4 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                        className="border-primary text-primary hover:bg-primary-light"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Go Back
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
