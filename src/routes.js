import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/layout';
import About from './components/About/about';
import Experience from './components/Experience/experience';
import Education from './components/Education/education';
import Skills from './components/Skills/skills';
import Interests from './components/Interests/interests';
import Awards from './components/Awards/awards';
class Routes extends Component{
  render(){
    return(

      <Layout>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/education" exact component={Education} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/interests" exact component={Interests} />
          <Route path="/awards" exact component={Awards} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes;
