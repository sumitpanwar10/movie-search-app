'use client'

import { Component } from 'react'
import { ErrorBoundaryProps } from '@/types/ErrorBoundaryProps'

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

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
