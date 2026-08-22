import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto max-w-xl px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-ink-900">Algo salió mal</h1>
          <p className="mt-2 text-ink-600">
            Recarga la página o vuelve a intentarlo más tarde.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white"
          >
            Recargar
          </button>
        </main>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary