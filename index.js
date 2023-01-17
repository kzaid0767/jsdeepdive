function getData(baseUrl) {
   
    return (route) =>{
        return (callback) =>{
            fetch(`${baseUrl}${route}`)
            .then(res => res.json())
            .then(data => callback(data))
        }
    }
}

// getData('https://jsonplaceholder.typicode.com', '/posts');
const data = getData('https://jsonplaceholder.typicode.com' );
const getComments = data('/comments')
const getPosts = data('/posts')
/* they receive data in form of arrays */
getPosts(post => console.log(post[0]))
