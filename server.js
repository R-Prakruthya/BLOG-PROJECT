const express = require('express')
const blogsRouter = require('./routes/blogs')
const app= express()

app.set('view engine', 'ejs')

app.use('/blogs' , blogsRouter)

app.get('/', (req, res) => {
    const blog =[{
        title: 'Food Blog',
        createdOn: new Date(),
        desc: 'Blog dedicated to delicious goodies'
    },
    {
        title: 'Food Blog 2',
        createdOn: new Date(),
        desc: '#1 Blog for Foodies'
    }]
    res.render('index', { blogs: blog})
})

app.listen(5000)