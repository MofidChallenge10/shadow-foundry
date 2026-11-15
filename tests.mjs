import test from "node:test";import assert from "node:assert/strict";import {shadowCss} from "./app.mjs";
test("converts hex to rgba shadow",()=>{assert.equal(shadowCss({x:2,y:4,blur:8,spread:0,color:"#ff0000",opacity:50}),"2px 4px 8px 0px rgba(255, 0, 0, 0.5)")});
test("supports inset shadows",()=>{assert.match(shadowCss({inset:true}),/^inset /)});
test("rejects invalid opacity and color",()=>{assert.throws(()=>shadowCss({opacity:101}));assert.throws(()=>shadowCss({color:"red"}))});
