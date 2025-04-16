const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
const supabase = createClient('https://eqdodsqaziqtlbfffgqu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxZG9kc3FhemlxdGxiZmZmZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMTg2NDYsImV4cCI6MjA0NzY5NDY0Nn0.-CVEz7MIYK6xQYjNlE9iT5CirpVYJayH_wpdoXFM5yE')

const express = require('express')
const app = express()
const port = 3000

app.get('/staff', async (req, res) => {
  const { data, error } = await supabase
  .from('staff')
  .select()

  res.json(data)
})

app.post('/staff', (req, res) => {
  res.send('所有的人都不是人 ты крутой')
})

app.delete('/staff/:id', async (req, res) => {
  const response = await supabase
  .from('staff')
  .delete()
  .eq('id', req.params.id)

  res.json('ты где то просчитался в ' + req.params.id)
})

app.put('/staff', (req, res) => {
  res.send('所有的人都不是人')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})