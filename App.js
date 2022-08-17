import React from 'react'
import { useState } from 'react';
import Search from './Components/Search/Search';
import { Box } from "@chakra-ui/react"
import axios from 'axios';
import { useEffect } from 'react';
import Posts from './Components/Posts/Posts';


function App () {
  const url = 'http://localhost:3001/'
    useEffect(() => {
    const fetchPost = async () => {
      axios.get(url + 'posts')
      try {
        const res = await axios.get(url + 'posts');
        setPosts(res.data)
      } catch (err) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    }
    fetchPost()
  }, [])

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)

  return (
    <Box w='100%' height='100%' display='block' backgroundColor='#0f131d'>
      <Box className="container row" pt={'50px'}>
        <Search
          search={search}
          setSearch={setSearch}
          items={posts}
        />
        <Posts
          posts={posts}
          show={show}
          setShow={setShow}
        />
      </Box>
    </Box>
  );
}

export default App;