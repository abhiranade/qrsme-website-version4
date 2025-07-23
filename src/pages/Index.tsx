import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main content with proper spacing for fixed header */}
      <main className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI-Powered QR Intelligence
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transform your business with sophisticated QR solutions powered by artificial intelligence
              </p>
              <div className="pt-8">
                <button className="btn-sophisticated px-8 py-4 text-lg font-semibold text-primary-foreground border-0 rounded-xl">
                  Explore Platform
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
