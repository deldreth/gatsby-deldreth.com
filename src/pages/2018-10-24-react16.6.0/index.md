---
title: React 16.6.0 released
date: '2018-10-24T00:00:00.284Z'
tags: ['react', '16.6.0', 'code-splitting']
thumbnail: './react.png'
---

React 16.6.0 is officially out and introduces two new HOCs .memo() and .lazy() and they offer up some interesting futures.

<!-- end -->

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">React 16.6 is hot off the presses! 😱<br>– React.memo (like PureComponent but for function components)<br>– React.lazy (code splitting powered by Suspense)<br>– .contextType in class components<a href="https://t.co/LJx7ItF4wY">https://t.co/LJx7ItF4wY</a></p>&mdash; React (@reactjs) <a href="https://twitter.com/reactjs/status/1054886083475857408?ref_src=twsrc%5Etfw">October 24, 2018</a></blockquote>

## Code-splitting, React.lazy()

If you're using TypeScript >2.4 or a plugin with Babel to handle dynamic imports then you're probably already familiar with asynchronous loading of components. In most of my projects I've used something like react-loadable to handle code-splitting coupled with named directives for webpack's favor.

Now we can effectively handle the same situation with React.lazy and Suspense.

```javascript
import React, { Fragment, Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Fragment>Loading...</Fragment>}>
      <LazyComponent />
    </Suspense>
  );
}
```

You can see this in action [here](https://stackblitz.com/edit/react-xqazvl). The API for the Suspense component and lazy function are pretty straight forward. Suspense operates largely the same as a Fragment. Meaning you can structure your component to render multiple lazy components within a single Suspense.

One of the most useful places code-splitting shows its benefits is with routing.

```javascript
import React, { Fragment, Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './style.css';

const RouteOne = lazy(() => import('./route1.js'));
const RouteTwo = lazy(() => import('./route2.js'));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Fragment>Loading!</Fragment>}>
        <Switch>
          <Route key="one" path="/" exact component={RouteOne} />
          <Route key="one" path="/two" component={RouteTwo} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}
```

You can see this working [here](https://stackblitz.com/edit/react-sraxvv).

## Memoization, React.memo()

`React.memo()` provides a way to memoize functional components. Functional components are always rerendered regardless of whether or not their props change. Class that extend PureComponent will only rerender if their props change.

```javascript
import React, { Component, memo } from 'react';
import Thing from './Components';

const MemoizedThing = memo(Thing);

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 5000);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.count}
        <Thing type="Functional" />
        <MemoizedThing type="Memoized" />
      </React.Fragment>
    );
  }
}
```

In this case `Thing` is a functional component that has a single prop `type`. While I never actually change the prop value for these components, the App component's state count is incremented every 5 seconds. If you check the console [here](https://stackblitz.com/edit/react-memo) you'll notice that every five seconds 'Functional' is logged whereas 'Memoized' is only logged once.

## Wrap up

While React 16.6.0 introduces a few other additions (such as `static contextType`) the `.lazy()` and `.memo()` functions are arguably the biggest that may make your life easier (and even more performant).

All stackblitz apps linked in this post:

[.lazy()](https://stackblitz.com/edit/react-xqazvl)

[Routing](https://stackblitz.com/edit/react-sraxvv)

[.memo()](https://stackblitz.com/edit/react-memo)
