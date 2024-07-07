import React, { ErrorInfo, ReactNode } from "react";

interface IErrorState {
  hasError: boolean;
  errorMessage?: string | null;
}

interface IProps {
  children?: ReactNode;
  fallback?: ReactNode;
}

export class ErrorBoundary extends React.Component<IProps, IErrorState> {
  state = { hasError: false, errorMessage: null };

  // static getDerivedStateFromError(error: Error): IErrorState {
  //   return { hasError: true, errorMessage: error.toString() };
  // }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, errorMessage: errorInfo.componentStack });
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
