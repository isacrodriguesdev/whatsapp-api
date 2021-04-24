
interface HttpData {
  user?: any
  body: any
  roles?: string[]
}

export interface HttpResponse extends HttpData {
  status: number
}

export interface HttpRequest extends HttpData {
  params?: any
  query?: any
  headers?: any
  file?: any
}