import logo from './faccioneWhitedLow.jpg';
import './App.css';
import React from 'react';
import {vocabulary, languages} from './languages.js'
const active = process.env.ACTIVE || true;
const message = process.env.MESSAGE || 'Page inactive (for now)';

let language = undefined
// to add a Language it is enough to add the translation and the language here in the JSON vocabulary and in the languages Array :)
// let languages = this.languages
let stage = 'LanguageSelection'
let stageHistory = ['LanguageSelection']

function App() {
  return (
    <Homepage/>
  );
}

class Homepage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      stage : stage,
      stageHistory : stageHistory
    }
  }

  changeStage(value) {
    console.log('handleClick: ', value)
    if(value.stage) {
      stage = value.stage
      if(value.stage === 'LanguageSelection') {
        stageHistory = ['LanguageSelection']
        language = undefined
      } else if(stageHistory[stageHistory.length - 1] !== value.stage) {
        stageHistory.push(value.stage)
      }
    }
    console.log('stageHistory', stageHistory)
    if(value.language) language = value.language
    console.log('language: ', language)
    this.setState({
      stage : stage,
      stageHistory : stageHistory
    })
  }
  
  routesToStage() {
    console.log('process.env.ACTIVE:', process.env.ACTIVE)
    if(!Boolean(active)) {
      return (
        <code className="code-inactive">{message}</code>
      )
    }
    if(this.state.stage === 'LanguageSelection') {
      return (<LanguageSelection onClick={value => this.changeStage(value)}/>)
    } else if(this.state.stage === 'FirstStep') {
      return (<FirstStep onInteractiveSelection={value => this.changeStage(value)}/>)
    } else if(this.state.stage === 'Interactive') return (
      <Interactive/>
    )
  }

  returnRadioLang() {
    if(language) return (
      <RadioLang className="radio-lang" onChangeLanguage={value => this.changeStage(value)}/>
    )
    return (<div></div>)
  }

  goBack() {
    console.log('stageHistory', stageHistory)
    stageHistory.pop()
    this.changeStage({stage: stageHistory[stageHistory.length - 1]})
    console.log('stageHistory', stageHistory)
  }

  returnBack() {
    if(stageHistory.length > 1) {
      return (<Back onBack={() => this.goBack()}/>)
    } else {
      return (<div></div>)
    }
  }

  render() {
    return (    
      <div className="App">
          {this.returnRadioLang()}
          {this.returnBack()}
        <div className="App-header">
          <div>
            {this.routesToStage()}
          </div>
        </div>
      </div>
    )
  }
}

class LanguageSelection extends React.Component {
  cycleLanguages() {
    return(
      <div>
        {languages.map(x => {
          return(
            <div key={x.value} onClick={() => this.props.onClick({stage: 'FirstStep', language: x.value})} className="div-cliccable">
              <p name={x.value}><code>{x.label}</code></p>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.cycleLanguages()}
      </div>
    )
  }
}

class FirstStep extends React.Component {
  render() {
    return(
      <div>
        <div className="wrapper-image">
          <img src={logo} className="App-logo img-bordered" alt="avatar" />
        </div>
        <p>{vocabulary[language].firstStep.p1} <code className="code-name">Giovanni Maggi</code>: {vocabulary[language].firstStep.p2}</p>
        <p className="p-unmargin">
          <code className="code-cv-classic" onClick={() => window.open(vocabulary[language].cv, '_blank')}>{vocabulary[language].firstStep.downloadCV}</code>
        </p>
        <p className="p-unmargin p-right">
          <code className="code-cv-interactive" onClick={() => this.props.onInteractiveSelection({stage : 'Interactive'})}>{vocabulary[language].firstStep.interactiveCV}</code>
        </p>
      </div>
    )
  }
}

class RadioLang extends React.Component {
  cycleCodeLanguages() {
    return(
      <div>
        {languages.map(x => {
          return(
            <code key={x.value} className={this.returnClass(x.value)} onClick={() => this.props.onChangeLanguage({language: x.value})}>{x.value.toUpperCase()}</code>
          )
        })}
      </div>
    )
  }
  returnClass(value) {
    if(language !== undefined && value === language) return 'lang-selected'
    return 'lang-unselected'
  }

  render() {
    return(
      <div className="left-container">
        {this.cycleCodeLanguages()}
      </div>
    )
  }
}

class Interactive extends React.Component {
  render() {
    return(
      <div className="left-container">
        {vocabulary[language].interactive.a}
      </div>
    )
  }
}

class Back extends React.Component {
  render() {
    return(
      <div className="left-container" onClick={() => this.props.onBack()}>
        {vocabulary[language].back.back}
      </div>
    )
  }
}

export default App;
