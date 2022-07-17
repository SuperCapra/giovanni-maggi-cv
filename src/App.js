import logo from './faccioneWhited.png';
import './App.css';
import React from 'react';
import vocabulary from './languages.js'
const active = process.env.ACTIVE || 'true';
const message = process.env.MESSAGE || 'Page inactive (for now)';

let language = undefined
let stage = 'LanguageSelection'
let languages = [{value : 'it', label: '[Italiano]'},{value : 'en', label: '[English]'}]

function App() {
  return (
    <Homepage/>
  );
}

class Homepage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      stage : 'LanguageSelection',
      i : 0
    }
  }

  languageSelection(value) {
    console.log('handleClick: ', value)
    language = value
    this.setState({
      stage : 'FirstStep'
    })
  }
  
  routesToLanguage() {
    if(!Boolean(active)) {
      return (
        <code className="code-inactive">{message}</code>
      )
    }
    if(this.state.stage === 'LanguageSelection') return (
      <LanguageSelection onClick={value => this.languageSelection(value)}/>
    )
    if(this.state.stage === 'FirstStep') return (
      <FirstStep/>
    )
  }

  returnRadioLang() {
    if(language) return (
      <RadioLang className="radio-lang" onChangeLanguage={value => this.languageSelection(value)}/>
    )
    return (<div></div>)
  }

  render() {
    return (    
      <div className="App">
          {this.returnRadioLang()}
        <div className="App-header">
          <div>
            {this.routesToLanguage()}
          </div>
        </div>
      </div>
    )
  }
}

class LanguageSelection extends React.Component {
  render() {
    return(
      <div>
        <div onClick={() => this.props.onClick('it')} className="div-cliccable">
            <p name={languages[0].value}><code>{languages[0].label}</code></p>
          </div>
          <div onClick={() => this.props.onClick('en')} className="div-cliccable">
            <p name={languages[1].value} ><code>{languages[1].label}</code></p> 
        </div>
      </div>
    )
  }
}

class FirstStep extends React.Component {
  render() {
    return(
      <div>
        <div className="wrapper-image">
          <img src={logo} className="App-logo" alt="avatar" />
        </div>
        <p>{vocabulary[language].firstStep.p1} <code className="code-name">Giovanni Maggi</code>: {vocabulary[language].firstStep.p2}</p>
        <p>
          <code className="code-cv-classic" onClick={() => window.open(vocabulary[language].cv, '_blank')}>{vocabulary[language].firstStep.downloadCV}</code> 
          <code className="code-cv-interactive">{vocabulary[language].firstStep.interactiveCV}</code>
        </p>
      </div>
    )
  }
}

class RadioLang extends React.Component {
  returnClass(value) {
    console.log('value', value)
    console.log('language', language)
    if(language !== undefined && value === language) return 'lang-selected'
    return 'lang-unselected'
  }

  render() {
    return(
      <div>
        <code className={this.returnClass(languages[0].value)} onClick={() => this.props.onChangeLanguage('it')}>{languages[0].value.toUpperCase()}</code> <code className={this.returnClass(languages[1].value)} onClick={() => this.props.onChangeLanguage('en')}>{languages[1].value.toUpperCase()}</code>
      </div>
    )
  }
}

export default App;
