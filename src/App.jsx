import Head from './components/Header'
import Body from './components/Body'

// Adding smooth scroll using LENIS, just cause i want to and i have been awake for last 40 hours and i am maybe losing it, but idk f it, we Ball.
import { ReactLenis } from 'lenis/react';

// Required: Prevents browser default scroll bouncing and layout jumps
import 'lenis/dist/lenis.css';

export default function App(){
  return(
    <>
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, syncTouch: true }}>
      <Head/>
      <Body/>
    </ReactLenis>
    </>
  )
}