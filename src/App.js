//  parent component

import React, { useState , useEffect, useRef} from 'react'
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  //  kiri = getter
  //  kanan = setter
  // State = data sementara
  const ref = useRef(null)
  const [pacarSaya, setPacarSaya] = useState(0)
  const [namaPacar, setNamaPacar] = useState("")
  const [disable, setDisable] = useState(false)
  
  useEffect(() => {
    const putus = ref.current;
    console.log(putus.disabled)
    if (pacarSaya === 0) {
      putus.disabled = true
    } else {
      putus.disabled = false
    }
  
    
  }, [pacarSaya]);
  
  useEffect(() => {
    if (pacarSaya === 1) {
      setNamaPacar("Anda Setia 💞")
    }
    if (pacarSaya === 2) {
      setNamaPacar("Anda Selingkuh 💥")
    }
    if (pacarSaya === 3) {
      setNamaPacar("Anda Buaya 🐊")
    }
    if (pacarSaya > 3) {
      setNamaPacar("Lu Atur Idup Lu!!!")
    }
    if (pacarSaya === 0) {
      setNamaPacar("Anda Jomblo!!!")
    }
  }, [pacarSaya])

  return (
    <div>
      <h1>Status : {namaPacar}</h1>
      <h1>Saya Memiliki : {pacarSaya} pacar</h1>
      <button onClick={() => setPacarSaya((prev) => prev + 1)}>tambah pacar</button>
      <button ref={ref} onClick={() => setPacarSaya((prev) => prev - 1)}>putuskan pacar</button>
      {/* <Profile />
      <Introduction name="sam" />
      <Introduction name="alexa" /> */}
    </div>
  );
}


export default App;
