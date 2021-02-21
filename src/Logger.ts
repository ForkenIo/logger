class Logger {
  private isTimeVisible = false;
  public labels: Record<string, string> = {
    info: 'info',
    error: 'error',
    warning: 'warning',
    success: 'success'
  }
  public colors: Record<string, any>  = {
      info: {
        text: '#F9FAFB',
      background: '#9CA3AF'
      },
      error: {
        text: '#FEF2F2',
        background: '#F87171'
      },
      warning: {
        text: '#FFFBEB',
        background: '#FBBF24'
      },
      success: {
        text: '#ECFDF5',
        background: '#10B981'
      }
  }

  public construct(options: Record<string, any>) {
    const { labels } = options
    this.labels = {...this.labels, ...(labels|| {})}
  }

  public get time(): Logger {
    this.isTimeVisible = true

    return this
  }

  public log(type: string, ...args: any[]) {
    const label = this.labels[type] || 'log'
    const {text, background} = this.colors[type] || this.colors.info
    const font = 'Roboto,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Oxygen,Fira Sans,Droid Sans,Helvetica Neue'

    if (this.isTimeVisible) {
      args = [`[${new Date().toLocaleTimeString()}]`, ...args]
    }
    console.log('%c%s', `color: ${text}; padding: 2px 4px; border-radius: 4px; background: ${background}; font-weight: 500; font-size: 11px; font-family: ${font};`, label, ...args)
    this.isTimeVisible = false
  }

  public info(...args: any[]) {
    this.log('info', ...args)
  }

  public error(...args: any[]) {
    this.log('error', ...args)
  }

  public warning(...args: any[]) {
    this.log('warning', ...args)
  }

  public success(...args: any[]) {
    this.log('success', ...args)
  }
}

export default Logger
