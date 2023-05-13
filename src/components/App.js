import React, {useState} from 'react'

import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {
  const showOutput = e => {
    setYear(e.target.value)
  };
  const [year, setYear] = useState(null);

  return (
    <div id="main">
      <select onInput={showOutput}>
      <option value={null}></option>
<option value={'2018'}>2018</option>
<option value={'2019'}>2019</option>
<option value={'2020'}>2020</option>
<option value={'2021'}>2021</option>
<option value={'2022'}>2022</option>
      </select>
      <div id="selected-year">
				{!year ? 'No year selected' : <div>Selected year-{year}</div>}
			</div>
			<ul>
				{data[year]?.map(el => (
					<li>{el}</li>
				))}
			</ul>
    </div>
  )
}


export default App;