import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Child, children } from './children'

// Initialize app
const app = new Hono()
app.use(prettyJSON())

// Add connection to SQLite DB via Drizzle ORM
const db = drizzle(process.env.DB_FILE_NAME!)

// Welcome message
app.get('/', (c) => {
  return c.text('Ho Ho Ho! Welcome to Santa\'s Naughty and Nice List API!')
})

// Get list of children on Santa's list
app.get('/children', (c) => {
  return c.json(children)
})

// Get info on individual child.
app.get('/children/:id', (c) => {
  const id = Number(c.req.param('id'))
  const child = children.find((chi) => chi.id === id)
  return child ? c.json(child) : c.json({"message": `Could not find a child with the id of ${id}`}, 404)
})

// Add child to Sants's list
app.post('/children', async (c) => {
  const child = await c.req.json<Child>()
  children.push(child)
  return c.json(child, 201)
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
