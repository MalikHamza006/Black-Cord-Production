import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log errorInfo to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-xl mx-auto mt-24 p-6 bg-card/60 border border-red-600/30 rounded-xl text-foreground shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white text-xl font-bold">!</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">Something went wrong.</h2>
              <p className="text-sm text-muted-foreground mb-4">An unexpected error occurred. You can reload the page or go back to the homepage.</p>
              <pre className="text-sm bg-background/30 p-3 rounded text-red-200 overflow-auto max-h-40">{this.state.error && this.state.error.toString()}</pre>
              <div className="mt-4 flex gap-3">
                <button onClick={() => window.location.reload()} className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-500 transition">Reload</button>
                <a href="/" className="px-4 py-2 rounded border border-red-600 text-red-600 hover:bg-red-600/10 transition">Home</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
