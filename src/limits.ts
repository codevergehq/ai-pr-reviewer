export class TokenLimits {
  maxTokens: number
  requestTokens: number
  responseTokens: number
  knowledgeCutOff: string

  constructor(model = 'gpt-4o-mini') {
    this.knowledgeCutOff = '2021-09-01'
    if (model === 'gpt-4o') {
      this.maxTokens = 128000
      this.responseTokens = 3000
    } else {
      this.maxTokens = 128000
      this.responseTokens = 3000
    }
    // provide some margin for the request tokens
    this.requestTokens = this.maxTokens - this.responseTokens - 100
  }

  string(): string {
    return `max_tokens=${this.maxTokens}, request_tokens=${this.requestTokens}, response_tokens=${this.responseTokens}`
  }
}
