import { Hono } from 'hono'

const app = new Hono()

// Welcome message
app.get('/', (c) => {
  return c.text('Ho Ho Ho! Welcome to Santa\'s Naughty and Nice List API!')
})

// Get list of children on Santa's list
app.get('/children', (c) => {
  return c.text('List of naughty and nice children.')
})

// Get info on individual child.
app.get('/children/:id', (c) => {
  const id = Number(c.req.param('id'))
  return c.text(`Info on child ${id}`)
})

// Add child to Sants's list
app.post('/children', (c) => {
  return c.text('Added child to Santa\'s list.')
})

// Update info of a child on Santa's list
app.put('/children/:id', (c) => {
  const id = Number(c.req.param('id'))
  return c.text(`Updated info on child ${id}.`)
})

// Remove child from Santa's list
app.delete('/children/:id', (c) => {
  const id = Number(c.req.param('id'))
  return c.text(`Removed child ${id} from Santa\'s list.`)
})

export default app
