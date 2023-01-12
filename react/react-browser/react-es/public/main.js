//react component type (2018..)
//1. class component (stateful 상태를 가진 : container component / lifecycle method)
//2. functional component (stateless 상태가 없는 : )
// 지금은 functional component로 사용한다.
// 2019년 react hooks api가 등장해서...
//vue lifecycle hook과 다름. vue lifecycle hook = react lifecycle method
// react hook api = vue composable


//react 컴포넌트 (목적:재사용) -> react 요소 생성
//PascalCase

// actual html element

//viertual element = react element 

//react API

//creating react element
const Headline = (props) =>
  React.createElement( //type, props, ...children
    'h1',
    { className: 'headline' }, //props {} + {}
    'react 라이브러리 활용하기' //children
  )
const Abbrebiation = (props) =>
  React.createElement(
    'abbr',
    {
      key: 'unique-key-id', //고유한 키 만들기!
      // reconciliation
      // children 리스트 중에 기존에 렌더링 된 것 있으면 비교하기.... 
      // key prop 있으면 좋음
      title: 'User Interface'
    },
    'UI'
  )
const Catchphrise = (props) =>
  React.createElent(
    'p',
    {
      className: 'catchphrise', },
      'react는 어쩌고',
        Abbrebiation, //key 필요하다. 위에 만들어줌.
        '라이브러리입니다.'
  )

//React App 컴포넌트
const App = (props) => 
React.createElement( 
  React.StrictMode, 
  null,
  React.createElement(Headline),
  React.createElement(Catchphrise),
);


// reactDOM API - 화면 렌더링
// reactDOM Root (createRoot) 
//react-dom/client - createRoot()
//client side rendering
const container = document.getElementById('root')
const reactDomRoot = ReactDOM.createRoot(container)
reactDomRoot.render(
  React.createElement(App)) //instance를 렌더링
