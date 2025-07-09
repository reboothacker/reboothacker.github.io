import{ab as a,ac as f,ad as m}from"./ChainAdapterBlueprint-BNEzhT6p.js";import{c as p}from"./if-defined-Be-JERJx.js";import"./index-BJ_thjQZ.js";import"./bitcoin-DUyz2iJA.js";import"./index-XG6Is51o.js";import"./index-CMz3wG_E.js";import"./index-CTAdAUMy.js";import"./index-C97Je7AX.js";import"./index-Ca1t7bXk.js";import"./index-DWyMHgop.js";const d=a`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var s=o.length-1;s>=0;s--)(l=o[s])&&(t=(n<3?l(t):n>3?l(e,i,t):l(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let c=class extends f{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=d;c=u([p("w3m-transactions-view")],c);export{c as W3mTransactionsView};
