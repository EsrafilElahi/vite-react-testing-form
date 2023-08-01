import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        msg: "success"
      })
    )
  }),

  // Handles a GET /user/:id request
  rest.get('/user/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        email: 'esrafil.elahi@gmail.com',
        id: 1,
        msg: 'success'
      })
    )
  }),
]