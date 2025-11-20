import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { children } from './db/schema'
import { eq } from 'drizzle-orm'

// Initialize app
const app = new Hono()
app.use(prettyJSON())

// Add connection to SQLite DB via Drizzle ORM
const db = drizzle(process.env.DB_FILE_NAME!)

// Welcome message
app.get('/', (c) => {
  return c.text("Ho Ho Ho! Welcome to Santa's Naughty and Nice List API!")
})

// Get list of children on Santa's list
app.get('/children', (c) => {
  const childrenList = db
    .select()
    .from(children)
    .all()

  return c.json(childrenList)
})

// Get info on individual child.
app.get('/children/:id', async (c) => {
  const id = c.req.param('id')
  const child = await db
    .select()
    .from(children)
    .where(eq(children.id, Number(id)))

  return child.length > 0 
    ? c.json(child) 
    : c.json({ "messsage": `Could not find a child in Santa's list with an id of ${id}`}, 404)
})

// Add child to Sants's list
app.post('/children', async (c) => {
  const { firstName, lastName, dateOfBirth, hometown } = await c.req.json()
  const newChild = await db.insert(children)
    .values({ firstName, lastName, dateOfBirth, hometown })

  return c.json(newChild)
})

// Update info of a child on Santa's list
app.put('/children/:id', (c) => {
  const id = c.req.param('id')
  return c.text(`Updated info on child ${id}.`)
})

// Remove child from Santa's list
app.delete('/children/:id', async (c) => {
  const id = c.req.param('id')
  await db.delete(children)
    .where(eq(children.id, Number(id)))
  return c.json({ "message": `Removed child ${id} from Santa's list.` })
})

export default app
