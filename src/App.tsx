import React, { useState } from 'react';
import Info from './components/Info';
import Counter from './components/Counter'; 
import Image from './components/Image';
import './App.css';

interface IState {
  nama: string;
  kelas: string;
  isMorning: boolean;
  counter: number;
}



class App extends React.Component<{}, IState> {
  constructor(props: any){
    super(props);

    this.incrementCounter = this.incrementCounter.bind(this);
  }

   state = {
    nama: 'Shandy',
    kelas: 'XD',
    isMorning: false,
    counter: 0,
   }

   incrementCounter() {
     const {counter} = this.state;
     this.setState({counter: counter + 1});
   }

   renderImage = () => {
     const {counter} = this.state;

     if (counter % 3 === 0 && counter !== 0) {
       return <Image num={counter} />
      }else {
        return null;
      }
   }

  render() {
    const {nama, kelas, isMorning, counter} = this.state

    return (
      <div>
        <Info 
      nama={nama}
      kelas={kelas}
      isMorning={isMorning}
      />
      <Counter num={this.state.counter} handleAppState={this.incrementCounter}/>
      {this.renderImage()}

      </div>
    )
  }
}


export default App;
