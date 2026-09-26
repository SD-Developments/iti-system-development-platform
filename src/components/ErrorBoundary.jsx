import { Component } from 'react';
import { Link } from 'react-router';
import { Home, RefreshCw, TriangleAlert } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(err, info) {
    console.error(err, info);
  }
  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <main
          role="alert"
          className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 py-20 text-center"
        >
          <span className="flex size-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
            <TriangleAlert className="size-7" aria-hidden="true" />
          </span>

          <span className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Something went wrong
          </span>
          <h1 className="mt-3 max-w-xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            We hit an unexpected error.
          </h1>
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            Don&apos;t worry — your work is safe. Try again, or head back home and continue
            exploring.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={this.handleRetry}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <RefreshCw className="size-4" aria-hidden="true" />
              Try Again
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-muted"
            >
              <Home className="size-4" aria-hidden="true" />
              Back to Home
            </Link>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
