import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import './App.css';

interface UserProps {
  pk: number
  model: string
}

function App() {
  const [data, setData] = useState<UserProps[]>([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
    .then(response => {
      return response.json()
    })
    .then((data) => {
      setData(data)
    })
  }, [])

  return (
    <div className="App">
      {data.map(f => {
        return <Text key={f.pk}>{f.model}</Text>
      })}
    </div>
  );
}

export default App;
