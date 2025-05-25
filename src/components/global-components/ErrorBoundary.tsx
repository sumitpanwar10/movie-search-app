'use client'

import { Component } from 'react'
import { ErrorBoundaryProps } from '@/types/ErrorBoundaryProps'

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  
  // Creates an instance of the ErrorBoundary component.
  // Initializes the component state to track whether an error has occurred.
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  // This is a React lifecycle method.
  // It’s triggered when any child component throws an error.
  // It updates the state to indicate that an error occurred, triggering a re-render with the fallback UI.
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <h2 className="text-red-500 text-lg font-semibold">Something went wrong. Please try again.</h2>
      )
    }

    return this.props.children
  }
}
