interface Turnstile {
  render(container: HTMLElement, options: {
    sitekey: string;
    callback: (token: string) => void;
  }): string;
  reset(widgetId: string): void;
  remove(widgetId: string): void;
}

interface Window {
  turnstile?: Turnstile;
}
