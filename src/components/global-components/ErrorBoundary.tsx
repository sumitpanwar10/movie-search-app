'use client'
import { Component, ReactNode } from 'react'

export default class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return <h2>Something went wrong. Please try again.</h2>
    return this.props.children
  }
}
